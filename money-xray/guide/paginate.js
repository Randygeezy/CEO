// Lays the source sections out onto fixed A4 pages: full-bleed sections get their own page,
// chapters start a new page, blocks flow onto the next page when they don't fit, and a
// heading is never left alone at the bottom of a page. Fills the contents page numbers.
(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  const src = document.getElementById('src'), book = document.getElementById('book');
  src.style.display = 'block';
  let n = 0, cur = null; const pageOf = {}; const warn = [];
  const isHead = el => /^(H3|H4)$/.test(el.tagName) || el.classList.contains('bar');
  function newPage(full) {
    n++; const pg = document.createElement('div'); pg.className = 'pg'; book.appendChild(pg);
    if (full) { cur = null; return pg; }
    const c = document.createElement('div'); c.className = 'content'; pg.appendChild(c);
    const f = document.createElement('div'); f.className = 'foot';
    f.innerHTML = '<span>MONEY X-RAY</span><span>' + n + '</span><span>THE COMPLETE GUIDE</span>';
    pg.appendChild(f); cur = c; return pg;
  }
  const over = () => cur.scrollHeight > cur.clientHeight + 1;
  // Long tables and lists continue on the next page instead of jumping whole (table header repeats).
  const splittable = el => (el.tagName === 'TABLE' && el.rows.length > 4) || (/^(UL|OL)$/.test(el.tagName) && el.children.length > 3);
  function splitInto(el) {
    const isTable = el.tagName === 'TABLE';
    const items = isTable ? [...el.rows] : [...el.children];
    const head = isTable && items[0].querySelector('th') ? items.shift() : null;
    const shell = () => { const c = el.cloneNode(false); if (head) c.appendChild(head.cloneNode(true)); return c; };
    let part = shell(); cur.replaceChild(part, el); let placed = 0;
    for (const it of items) {
      part.appendChild(it);
      if (over()) {
        part.removeChild(it);
        const carry = [];
        if (placed === 0) {
          cur.removeChild(part);
          while (cur.lastElementChild && isHead(cur.lastElementChild) && cur.children.length > 1) carry.unshift(cur.removeChild(cur.lastElementChild));
        }
        newPage(false); carry.forEach(c => cur.appendChild(c)); part = shell(); cur.appendChild(part); part.appendChild(it); placed = 0;
        if (!isTable && el.tagName === 'OL') part.setAttribute('start', String(items.indexOf(it) + 1));
      }
      placed++;
    }
  }
  for (const sec of [...src.children]) {
    if (sec.classList.contains('full')) { newPage(true).appendChild(sec); if (sec.dataset.id) pageOf[sec.dataset.id] = n; continue; }
    if (!cur || !sec.classList.contains('cont')) newPage(false);
    else { const sp = document.createElement('div'); sp.style.height = '7mm'; cur.appendChild(sp); }
    let first = true;
    for (const blk of [...sec.children]) {
      cur.appendChild(blk);
      if (over() && splittable(blk)) { splitInto(blk); if (first && sec.dataset.id) pageOf[sec.dataset.id] = n; first = false; continue; }
      if (over()) {
        cur.removeChild(blk);
        const carry = [];
        while (cur.lastElementChild && isHead(cur.lastElementChild) && cur.children.length > 1) carry.unshift(cur.removeChild(cur.lastElementChild));
        newPage(false);
        carry.forEach(c => cur.appendChild(c));
        cur.appendChild(blk);
        if (over()) warn.push('page ' + n + ': block too tall: ' + (blk.textContent || '').trim().slice(0, 60));
      }
      if (first && sec.dataset.id) pageOf[sec.dataset.id] = n;
      first = false;
    }
  }
  src.remove();
  document.querySelectorAll('[data-pg]').forEach(e => e.textContent = pageOf[e.dataset.pg] || '?');
  window.__result = { pages: n, pageOf, warn };
})();
