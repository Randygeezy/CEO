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
  const MIN_FILL = 0.4, ZOOMS = ['', 'tight1', 'tight2', 'tight3'];  // CSS tightening levels
  const src = document.getElementById('src'), book = document.getElementById('book');
  src.style.display = 'block';
  // let late fonts and image sizes settle before measuring anything
  await new Promise(r => requestAnimationFrame(() => setTimeout(r, 1000)));
  await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
  await document.fonts.ready;
  let n = 0, cur = null, level = ''; const pageOf = {}; const warn = [];
  const isHead = el => /^(H3|H4)$/.test(el.tagName) || el.classList.contains('bar');
  function newPage(full) {
    n++; const pg = document.createElement('div'); pg.className = 'pg'; book.appendChild(pg);
    if (full) { cur = null; return pg; }
    const c = document.createElement('div'); c.className = 'content' + (level ? ' ' + level : ''); pg.appendChild(c);
    const f = document.createElement('div'); f.className = 'foot';
    f.innerHTML = '<span>MONEY X-RAY</span><span>' + n + '</span><span>THE COMPLETE GUIDE</span>';
    pg.appendChild(f); cur = c; return pg;
  }
  // measure real positions (scrollHeight is unreliable once blocks are zoomed)
  const over = () => {
    const bottom = cur.getBoundingClientRect().bottom;
    const last = cur.lastElementChild; if (!last) return false;
    const els = [last, ...last.querySelectorAll('*')];
    return els.some(e => e.getBoundingClientRect().bottom > bottom + 0.5) || cur.scrollHeight > cur.clientHeight + 1;
  };
  const fill = c => { if (!c || !c.lastElementChild) return 0; const top = c.getBoundingClientRect().top; return (c.lastElementChild.getBoundingClientRect().bottom - top) / c.clientHeight; };
  const splittable = el => (el.tagName === 'TABLE' && el.rows.length > 4) || (/^(UL|OL)$/.test(el.tagName) && el.children.length > 3);
  let splitLog = [];
  function splitInto(el) {
    const isTable = el.tagName === 'TABLE';
    const items = isTable ? [...el.rows] : [...el.children];
    const head = isTable && items[0].querySelector('th') ? items.shift() : null;
    const shell = () => { const c = el.cloneNode(false); if (head) c.appendChild(head.cloneNode(true)); return c; };
    splitLog.push({ el, items }); let part = shell(); cur.replaceChild(part, el); let placed = 0;
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
  function layoutGroup(secs, blocks, zoom, ids) {
    const startN = n; level = zoom;
    secs.forEach((sec, si) => {
      if (si === 0) newPage(false);
      else { const sp = document.createElement('div'); sp.style.height = '7mm'; cur.appendChild(sp); if (over()) { cur.removeChild(sp); newPage(false); } }
      let first = true;
      for (const blk of blocks[si]) {
        cur.appendChild(blk);
        if (over() && splittable(blk)) splitInto(blk);
        else if (over()) {
          cur.removeChild(blk);
          const carry = [];
          while (cur.lastElementChild && isHead(cur.lastElementChild) && cur.children.length > 1) carry.unshift(cur.removeChild(cur.lastElementChild));
          newPage(false); carry.forEach(c => cur.appendChild(c)); cur.appendChild(blk);
          if (over()) warn.push('page ' + n + ': block too tall: ' + (blk.textContent || '').trim().slice(0, 60));
        }
        if (first && sec.dataset.id) { ids[sec.dataset.id] = n; blk.dataset.first = sec.dataset.id; }
        first = false;
      }
    });
    level = '';
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
    const blocks = g.secs.map(s => [...s.children]); splitLog = [];
    const pagesBefore = [...book.children].length;
    let ids = {}; let r = layoutGroup(g.secs, blocks, '', ids);
    if (r.pages > 1 && r.lastFill < MIN_FILL) {
      const target = r.pages - 1;
      for (const z of ZOOMS.slice(1)) {
        while (book.children.length > pagesBefore) book.lastElementChild.remove();
        n = pagesBefore; cur = null;
        // put split tables/lists back together, then lay the same original blocks out again
        for (const { el, items } of splitLog.reverse()) items.forEach(it => el.appendChild(it));
        splitLog = []; const tIds = {};
        const t = layoutGroup(g.secs, blocks, z, tIds);
        if (t.pages <= target) { ids = tIds; r = t; break; }
        if (z === ZOOMS[ZOOMS.length - 1]) { ids = tIds; r = t; warn.push('chapter at page ' + (pagesBefore + 1) + ' still ends ' + Math.round(t.lastFill * 100) + '% full'); }
      }
    }
    Object.assign(pageOf, ids);
  }
  src.remove();
  // safety pass: a page whose content still overflows pushes its last block onto a new page after it
  const overflowing = c => { const bt = c.getBoundingClientRect().bottom; return [...c.querySelectorAll('*')].some(e => e.getBoundingClientRect().bottom > bt + 0.5); };
  const safety = (tag) => {
  for (let i = 0; i < book.children.length; i++) {
    const c = book.children[i].querySelector('.content');
    if (!c) continue;
    const moved = [];
    while (overflowing(c) && c.children.length > 1) moved.unshift(c.removeChild(c.lastElementChild));
    if (moved.length) {
      const pg = document.createElement('div'); pg.className = 'pg';
      const nc = document.createElement('div'); nc.className = c.className; pg.appendChild(nc);
      const f = document.createElement('div'); f.className = 'foot'; f.innerHTML = '<span>MONEY X-RAY</span><span></span><span>THE COMPLETE GUIDE</span>'; pg.appendChild(f);
      moved.forEach(m => nc.appendChild(m)); book.insertBefore(pg, book.children[i + 1] || null);
      warn.push('safety pass moved ' + moved.length + ' block(s) from page ' + (i + 1) + ' [' + tag + ']: ' + moved.map(m => m.tagName + ' ' + (m.textContent||'').trim().slice(0,30)).join(' | '));
    }
  }
  };
  safety('a');
  // images can settle into their final size a moment after layout: check again
  await new Promise(r => requestAnimationFrame(() => setTimeout(r, 1000)));
  await Promise.all([...book.querySelectorAll('img')].map(i => i.decode().catch(() => {})));
  safety('b');
  // page numbers come from the finished layout
  [...book.children].forEach((pg, i) => {
    pg.querySelectorAll('[data-first]').forEach(e => { pageOf[e.dataset.first] = i + 1; });
    const sec = pg.querySelector('section[data-id]'); if (sec) pageOf[sec.dataset.id] = i + 1;
  });
  // renumber footers (pages may have been rebuilt) and fill the contents page
  [...book.children].forEach((pg, i) => { const f = pg.querySelector('.foot span:nth-child(2)'); if (f) f.textContent = i + 1; });
  document.querySelectorAll('[data-pg]').forEach(e => e.textContent = pageOf[e.dataset.pg] || '?');
  const fills = [...book.children].map((pg, i) => ({ page: i + 1, fill: Math.round(fill(pg.querySelector('.content')) * 100) })).filter(p => p.fill && p.fill < 40);
  window.__result = { pages: book.children.length, pageOf, warn, lowFill: fills };
})();
