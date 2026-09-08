const { put, list } = require('@vercel/blob');

const PATH = 'board.json';
const RANKS = ['They would buy', 'You named the desire', 'You copied the ads', 'They scrolled past'];

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}');
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString() || '{}';
  return JSON.parse(raw);
}

function send(res, data, status) {
  res.statusCode = status || 200;
  res.setHeader('content-type', 'application/json');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(data));
}

function cleanTag(s) {
  return String(s || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 12);
}

function cleanRow(raw) {
  const tag = cleanTag(raw && raw.tag);
  const score = Math.round(Number(raw && raw.score));
  const mistakes = Math.round(Number(raw && raw.mistakes));
  const elapsed = Math.round(Number(raw && raw.elapsed));
  const rank = RANKS.includes(raw && raw.rank) ? raw.rank : RANKS[RANKS.length - 1];
  if (!tag || tag.length < 1) return null;
  if (!Number.isFinite(score) || score < 0 || score > 30000) return null;
  if (!Number.isFinite(mistakes) || mistakes < 0 || mistakes > 200) return null;
  if (!Number.isFinite(elapsed) || elapsed < 0 || elapsed > 7200) return null;
  return { tag, score, mistakes, rank, elapsed, t: Date.now() };
}

function uniqueBest(rows) {
  const map = new Map();
  (rows || []).forEach(r => {
    if (!r || !r.tag) return;
    const prev = map.get(r.tag);
    if (!prev || r.score > prev.score || (r.score === prev.score && r.mistakes < prev.mistakes)) map.set(r.tag, r);
  });
  return [...map.values()].sort((a, b) => b.score - a.score || a.mistakes - b.mistakes || a.t - b.t).slice(0, 50);
}

async function loadBoard() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return { rows: [] };
  const { blobs } = await list({ prefix: PATH, limit: 5 });
  const file = blobs.find(b => b.pathname === PATH || b.pathname.endsWith('/' + PATH)) || blobs[0];
  if (!file) return { rows: [] };
  const r = await fetch(file.url, { headers: { Authorization: 'Bearer ' + token } });
  if (!r.ok) return { rows: [] };
  const data = await r.json();
  return { rows: uniqueBest(data.rows || []) };
}

async function saveBoard(rows) {
  await put(PATH, JSON.stringify({ rows: uniqueBest(rows) }), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
  });
}

function placeOf(rows, you) {
  const i = rows.findIndex(r => r.tag === you.tag && r.score === you.score);
  const idx = i >= 0 ? i : rows.findIndex(r => r.tag === you.tag);
  return { place: idx >= 0 ? idx + 1 : rows.length + 1, total: Math.max(rows.length, 1) };
}

module.exports = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const data = await loadBoard();
      return send(res, { rows: data.rows.slice(0, 8), total: data.rows.length });
    }
    if (req.method !== 'POST') return send(res, { error: 'method' }, 405);
    const body = await readJson(req);
    const you = cleanRow(body);
    if (!you) return send(res, { error: 'bad' }, 400);
    const data = await loadBoard();
    const rows = uniqueBest(data.rows.concat([you]));
    await saveBoard(rows);
    const { place, total } = placeOf(rows, you);
    return send(res, { rows: rows.slice(0, 8), place, total, you });
  } catch (err) {
    return send(res, { error: 'board', rows: [] }, 500);
  }
};
