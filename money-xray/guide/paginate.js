// Lays the source sections out onto fixed A4 pages.
// - Full-bleed sections (cover, contents, part dividers) get a page of their own.
// - A chapter (a section without "cont", plus any "cont" sections after it) starts on a new page.
// - Blocks flow to the next page when they don't fit; long tables and lists continue across pages
//   (table header repeats); a heading is never left alone at the bottom of a page.
// - No near-empty pages: if a chapter's last page would be less than MIN_FILL full, the chapter is
//   laid out again slightly tighter (zoom steps below) and the first version that saves a page wins.
// - Fills the contents page numbers. Result in window.__result.
(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  const MIN_FILL = 0.4, ZOOMS = [1, 0.95, 0.9, 0.86];
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
  const fill = c => { if (!c || !c.lastElementChild) return 0; const top = c.getBoundingClientRect().top; return (c.lastElementChild.getBoundingClientRect().bottom - top) / c.clientHeight; };
  const splittable = el => (el.tagName === 'TABLE' && el.rows.length > 4) || (/^(UL|OL)$/.test(el.tagName) && el.children.length > 3);
  function splitInto(el) {
    const isTable = el.tagName === 'TABLE';
    const items = isTable ? [...el.rows] : [...el.children];
    const head = isTable && items[0].querySelector('th') ? items.shift() : null;
    const shell = () => { const c = el.cloneNode(false); c.style.zoom = el.style.zoom; if (head) c.appendChild(head.cloneNode(true)); return c; };
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
        if (el.tagName === 'OL') part.setAttribute('start', String(items.indexOf(it) + 1));
      }
      placed++;
    }
  }
  function layoutGroup(secs, zoom, ids) {
    const startN = n;
    secs.forEach((sec, si) => {
      if (si === 0) newPage(false);
      else { const sp = document.createElement('div'); sp.style.height = '7mm'; cur.appendChild(sp); }
      let first = true;
      for (const blk of [...sec.children]) {
        if (zoom !== 1) blk.style.zoom = zoom;
        cur.appendChild(blk);
        if (over() && splittable(blk)) splitInto(blk);
        else if (over()) {
          cur.removeChild(blk);
          const carry = [];
          while (cur.lastElementChild && isHead(cur.lastElementChild) && cur.children.length > 1) carry.unshift(cur.removeChild(cur.lastElementChild));
          newPage(false); carry.forEach(c => cur.appendChild(c)); cur.appendChild(blk);
          if (over()) warn.push('page ' + n + ': block too tall: ' + (blk.textContent || '').trim().slice(0, 60));
        }
        if (first && sec.dataset.id) ids[sec.dataset.id] = n;
        first = false;
      }
    });
    return { pages: n - startN, lastFill: fill(cur) };
  }
  // group sections: full pages alone; a chapter = one section plus the "cont" sections after it
  const groups = [];
  for (const sec of [...src.children]) {
    if (sec.classList.contains('full') || !sec.classList.contains('cont') || !groups.length || groups[groups.length - 1].full) groups.push({ full: sec.classList.contains('full'), secs: [sec] });
    else groups[groups.length - 1].secs.push(sec);
  }
  for (const g of groups) {
    if (g.full) { newPage(true).appendChild(g.secs[0]); if (g.secs[0].dataset.id) pageOf[g.secs[0].dataset.id] = n; continue; }
    const pristine = g.secs.map(s => s.cloneNode(true));
    const pagesBefore = [...book.children].length;
    let ids = {}; let r = layoutGroup(g.secs, 1, ids);
    if (r.pages > 1 && r.lastFill < MIN_FILL) {
      const target = r.pages - 1;
      for (const z of ZOOMS.slice(1)) {
        while (book.children.length > pagesBefore) book.lastElementChild.remove();
        n = pagesBefore; cur = null;
        const trial = pristine.map(s => s.cloneNode(true)); const tIds = {};
        const t = layoutGroup(trial, z, tIds);
        if (t.pages <= target) { ids = tIds; r = t; break; }
        if (z === ZOOMS[ZOOMS.length - 1]) { ids = tIds; r = t; warn.push('chapter at page ' + (pagesBefore + 1) + ' still ends ' + Math.round(t.lastFill * 100) + '% full'); }
      }
    }
    Object.assign(pageOf, ids);
  }
  src.remove();
  // renumber footers (pages may have been rebuilt) and fill the contents page
  [...book.children].forEach((pg, i) => { const f = pg.querySelector('.foot span:nth-child(2)'); if (f) f.textContent = i + 1; });
  document.querySelectorAll('[data-pg]').forEach(e => e.textContent = pageOf[e.dataset.pg] || '?');
  const fills = [...book.children].map((pg, i) => ({ page: i + 1, fill: Math.round(fill(pg.querySelector('.content')) * 100) })).filter(p => p.fill && p.fill < 40);
  window.__result = { pages: book.children.length, pageOf, warn, lowFill: fills };
})();
