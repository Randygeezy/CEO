/* AnyVideo library file: sea life. Example of how the library grows: when a video needs something the engine
   does not have, Claude draws it here (same ink style: INK outline, flat colours, origin = bottom centre),
   renders one test frame, and keeps the file so every later video can use it.
   Added: props "shark", "turtle", "jellyfish". Use: {"kind":"prop","prop":"shark","x":900,"y":700,"s":1,"z":"under"} */
Object.assign(PROPS, {
  shark(l, t) {
    const c = l.color || '#7a8fa6', w = 10 * Math.sin(t * 4), open = l.open ? 16 : 0;
    return `<g transform="translate(0 -90)">` +
      pFill(`M-230 0 L${-330} ${-80 + w} L${-300} 0 L${-330} ${80 + w} Z`, shd(c, .1), 6) +
      pFill('M-40 -70 L10 -170 L60 -70 Z', shd(c, .1), 6) +
      `<path d="M-250 0 Q-120 -100 120 -60 Q240 -30 260 10 Q200 60 40 70 Q-140 70 -250 0 Z" fill="${c}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>` +
      `<path d="M-200 20 Q-40 76 200 30 Q180 56 40 66 Q-120 66 -200 20 Z" fill="#eef2f4"/>` +
      pFill('M20 40 L-30 110 L80 50 Z', shd(c, .1), 5) +
      [0, 1, 2].map(i => `<path d="M${70 + i * 18} -20 q-8 20 0 40" fill="none" stroke="${INK}" stroke-width="4"/>`).join('') +
      crEye(170, -18, 12, 'open', 0, 4, l.angry ? -1 : 0) +
      `<path d="M150 ${30 + open * .2} Q200 ${40 + open} 250 ${14}" fill="${open ? '#7a1a22' : 'none'}" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>` +
      (open ? [0, 1, 2, 3].map(i => `<path d="M${160 + i * 22} ${28} l8 12 l8 -12 z" fill="#fff" stroke="${INK}" stroke-width="2"/>`).join('') : '') +
      `</g>`;
  },
  turtle(l, t) {
    const c = l.color || '#4a9a5a', sw = 8 * Math.sin(t * 3);
    return `<g transform="translate(0 -70)">` +
      [[-90, 30], [90, 30]].map(([x, y], i) => `<ellipse cx="${x}" cy="${y + (i ? sw : -sw) * .5}" rx="46" ry="18" fill="#9ac07a" stroke="${INK}" stroke-width="5" transform="rotate(${i ? 20 : -20} ${x} ${y})"/>`).join('') +
      `<ellipse cx="150" cy="-6" rx="46" ry="36" fill="#9ac07a" stroke="${INK}" stroke-width="5"/>` + crEye(166, -16, 10, 'open', 0, 4, 0) +
      `<path d="M-140 10 Q-120 -110 0 -110 Q120 -110 140 10 Z" fill="${c}" stroke="${INK}" stroke-width="6"/>` +
      [[-60, -50], [0, -70], [60, -50], [-30, -10], [30, -10]].map(([x, y]) => `<path d="M${x - 24} ${y} l12 -20 l24 0 l12 20 l-12 20 l-24 0 z" fill="${shd(c, .15)}" stroke="${INK}" stroke-width="3"/>`).join('') +
      `<path d="M-150 10 L150 10" stroke="${INK}" stroke-width="6"/></g>`;
  },
  jellyfish(l, t) {
    const c = l.color || '#e88ad0', b = 6 * Math.sin(t * 2.5);
    let g = `<g transform="translate(0 ${-200 + b})">`;
    for (let i = 0; i < 5; i++) { const x = -48 + i * 24; g += `<path d="M${x} 0 q${12 * Math.sin(t * 3 + i)} 50 0 90 t0 90" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round" opacity=".85"/>`; }
    return g + `<path d="M-80 0 Q-80 -90 0 -90 Q80 -90 80 0 Q40 14 0 4 Q-40 14 -80 0 Z" fill="${c}" stroke="${INK}" stroke-width="6" opacity=".95"/>` + crEye(-22, -40, 9, 'open', 0, 4, 0) + crEye(22, -40, 9, 'open', 0, 4, 0) + `</g>`;
  }
});
