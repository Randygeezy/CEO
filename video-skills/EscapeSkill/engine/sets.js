/* RobbiSkill v2: code-drawn sets (backgrounds) with their own light sources.
   Shot field:  "set":{"kind":"office","time":"night","calendar":"NOV 17","sign":"CAFE"}   (replaces "bg")
   Each set returns {svg, lights:[{x,y,r,a}], glows:[{x,y,r,c,a}], cones:[{x,y,w0,w1,len,lean,a}]}; the engine darkens the picture and cuts the lights out of it. */
const SINK = '#18161B';
function sR(x, y, w, h, f, o) { o = o || {}; return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 0}" fill="${f}" ${o.sw === 0 ? '' : `stroke="${SINK}" stroke-width="${o.sw || 5}"`} ${o.op ? `opacity="${o.op}"` : ''}/>`; }
function sC(x, y, r, f, o) { o = o || {}; return `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${o.sw === 0 ? '' : `stroke="${SINK}" stroke-width="${o.sw || 5}"`}/>`; }
function sP(d, f, o) { o = o || {}; return `<path d="${d}" fill="${f}" ${o.sw === 0 ? '' : `stroke="${SINK}" stroke-width="${o.sw || 5}" stroke-linejoin="round"`}/>`; }
function sL(x1, y1, x2, y2, w, c) { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c || SINK}" stroke-width="${w || 5}" stroke-linecap="round"/>`; }
function sT(x, y, s, size, f, o) { o = o || {}; return `<text x="${x}" y="${y}" font-size="${size}" class="${o.cls || 'brush'}" fill="${f}" text-anchor="${o.a || 'middle'}" ${o.rot ? `transform="rotate(${o.rot} ${x} ${y})"` : ''} ${o.st ? `stroke="${SINK}" stroke-width="${o.st}" paint-order="stroke"` : ''}>${s}</text>`; }
function sRng(seed) { let s = (seed >>> 0) || 1; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 } }
function sky(time, h) {
  const c = { night: ['#0d1230', '#2b3573'], dusk: ['#3b2a6b', '#e8806a'], day: ['#7ec4ee', '#cfeaf7'], red: ['#2a0a12', '#8a1f2b'] }[time] || ['#0d1230', '#2b3573'];
  return `<defs><linearGradient id="sky${time}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><rect width="1920" height="${h}" fill="url(#sky${time})"/>`;
}
function stars(seed, n, h) { const r = sRng(seed); let s = ''; for (let i = 0; i < n; i++) s += `<circle cx="${(r() * 1920).toFixed(0)}" cy="${(r() * h).toFixed(0)}" r="${(0.8 + r() * 1.8).toFixed(1)}" fill="#fff" opacity="${(0.4 + r() * .5).toFixed(2)}"/>`; return s; }
function moon(x, y, r) { return `<circle cx="${x}" cy="${y}" r="${r * 2.2}" fill="#dfe6ff" opacity=".10"/><circle cx="${x}" cy="${y}" r="${r * 1.5}" fill="#dfe6ff" opacity=".16"/>${sC(x, y, r, '#F4F0D6', { sw: 4 })}<circle cx="${x - r * .3}" cy="${y - r * .2}" r="${r * .18}" fill="#E0DBB8"/><circle cx="${x + r * .35}" cy="${y + r * .3}" r="${r * .12}" fill="#E0DBB8"/>`; }
/* a row of buildings with lit windows; returns svg + the lit window centres (for glow) */
function skyline(x0, x1, base, hmin, hmax, seed, o) {
  o = o || {}; const r = sRng(seed); let s = '', x = x0; const cols = o.cols || ['#1d2548', '#232c55', '#19203f', '#2a3260'], wins = [];
  while (x < x1) {
    const w = 90 + r() * 120, h = hmin + r() * (hmax - hmin), c = cols[Math.floor(r() * cols.length)];
    s += sR(x, base - h, w, h, c, { sw: o.sw == null ? 4 : o.sw });
    const nx = Math.floor((w - 20) / 34), ny = Math.floor((h - 30) / 46);
    for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) {
      if (r() < (o.lit == null ? .45 : o.lit)) { const wx = x + 14 + i * 34, wy = base - h + 22 + j * 46; s += `<rect x="${wx}" y="${wy}" width="20" height="28" fill="${r() < .75 ? '#F6C65A' : '#9FD6F5'}" opacity=".95"/>`; if (wins.length < 40 && r() < .2) wins.push([wx + 10, wy + 14]) }
    }
    x += w + (o.gap == null ? 6 : o.gap);
  }
  return { svg: s, wins };
}
function winGlow(w, c, a, r) { return w.map(p => ({ x: p[0], y: p[1], r: r || 52, c: c || '#FFC85A', a: a || .16 })) }

/* ---------------- sets ---------------- */
const SETS = {
  office(o) {
    const night = (o.time || 'night') !== 'day', cal = (o.calendar || 'MAY 1925').split(' ');
    let s = sR(0, 0, 1920, 1080, '#2d5a52', { sw: 0 });
    for (let i = 0; i < 24; i++) s += `<rect x="${i * 80}" y="0" width="40" height="760" fill="#356a60" opacity=".55"/>`;
    s += sR(0, 640, 1920, 120, '#6b4a30', { sw: 0 }) + sL(0, 640, 1920, 640, 6) + sR(0, 760, 1920, 320, '#4a3424', { sw: 0 }) + sL(0, 760, 1920, 760, 6);
    for (let i = 0; i < 13; i++) s += sL(i * 160, 760, i * 160 - 120 + i * 20, 1080, 3, '#2c1f16');
    // window
    s += sR(1220, 150, 460, 470, '#0d1230', { sw: 8 });
    const cityW = skyline(1226, 1676, 616, 90, 300, 11, { lit: .5 }); s += `<clipPath id="ow"><rect x="1224" y="154" width="452" height="462"/></clipPath><g clip-path="url(#ow)">${sky(night ? 'night' : 'day', 616)}${night ? stars(3, 24, 260) : ''}${night ? moon(1590, 230, 32) : ''}${cityW.svg}</g>`;
    s += sL(1450, 150, 1450, 620, 8) + sL(1220, 385, 1680, 385, 8) + sR(1208, 614, 484, 22, '#6b4a30');
    s += sP('M1180 120 L1260 120 L1230 640 L1170 640 Z', '#8a1f26') + sP('M1740 120 L1660 120 L1690 640 L1750 640 Z', '#8a1f26') + sL(1150, 120, 1780, 120, 10, '#6b4a30');
    // clock, calendar, picture
    s += sC(560, 290, 70, '#F4EFE2', { sw: 7 }) + sL(560, 290, 560, 240, 6) + sL(560, 290, 598, 304, 6) + sC(560, 290, 6, SINK, { sw: 0 });
    s += sR(900, 190, 150, 190, '#F4EFE2', { r: 6 }) + sR(900, 190, 150, 50, '#B3283A', { r: 6 }) + sT(975, 228, cal[0], 36, '#fff', { cls: 'sans' }) + sT(975, 330, cal[1] || '', 64, SINK, { cls: 'brush' });
    s += sR(230, 200, 190, 150, '#d9b66a', { sw: 8 }) + sR(246, 216, 158, 118, '#6ea6b8', { sw: 4 }) + sP('M246 334 L300 270 L340 310 L372 280 L404 334 Z', '#4f7f62', { sw: 4 });
    // desk
    s += sR(120, 640, 700, 60, '#7c5233', { r: 8, sw: 6 }) + sR(150, 700, 640, 190, '#6b4627', { r: 6, sw: 6 });
    [0, 1, 2].forEach(i => s += sR(170 + i * 205, 720, 185, 70, '#7f5836', { r: 4 }) + sC(262 + i * 205, 755, 8, '#d9b66a'));
    s += sR(180, 640, 260, 36, '#e8e2cc', { sw: 4 }) + sR(480, 610, 120, 30, '#2b2b33', { r: 6 }) + sC(560, 600, 12, '#2b2b33', { sw: 0 });
    // banker lamp
    s += sR(650, 600, 60, 40, '#b8962e', { r: 6 }) + sL(680, 600, 680, 520, 10) + sP('M590 530 Q680 470 770 530 L750 560 L610 560 Z', '#2F7A52', { sw: 6 });
    // extras: plant, filing cabinet, phone, paper stack, waste bin
    s += sR(1010, 640, 70, 140, '#8a6a4a', { r: 6 }) + sC(1045, 600, 58, '#2f7a52') + sC(1010, 640, 38, '#3a9a62') + sC(1082, 644, 36, '#3a9a62');
    s += sR(40, 560, 150, 280, '#5a6270', { r: 6 }) + [0, 1, 2].map(i => sR(52, 576 + i * 88, 126, 70, '#6c7482', { r: 4 }) + sR(100, 602 + i * 88, 30, 8, '#c9c9d6', { r: 3, sw: 3 })).join('');
    s += sR(470, 626, 110, 30, '#e8e2cc', { sw: 4 }) + sR(496, 604, 70, 26, '#cfc8ae', { sw: 4 }) + sR(240, 618, 90, 16, '#d8d2ba', { sw: 4 });
    s += sR(1700, 760, 60, 90, '#6b6b78', { r: 8 });
    // rug
    s += `<ellipse cx="960" cy="960" rx="640" ry="92" fill="#7E1C24" stroke="${SINK}" stroke-width="6"/><ellipse cx="960" cy="960" rx="560" ry="72" fill="none" stroke="#c9a04a" stroke-width="5"/>`;
    return { svg: s, floorY: 1010, lights: [{ x: 680, y: 640, r: 560, a: .95 }, { x: 1450, y: 400, r: 420, a: .55 }, { x: 960, y: 560, r: 760, a: .22 }], glows: [{ x: 680, y: 585, r: 260, c: '#FFD27A', a: .35 }, ...winGlow(cityW.wins, '#FFC85A', .12, 40)], cones: [{ x: 680, y: 560, w0: 120, w1: 520, len: 420, lean: 0, a: .16, c: '#FFD27A' }] };
  },
  street(o) {
    const t = o.time || 'night'; let s = sky(t === 'day' ? 'day' : 'night', 700) + (t === 'day' ? '' : stars(5, 40, 330) + moon(260, 170, 56));
    const far = skyline(-20, 1940, 700, 160, 360, 21, { cols: ['#161c3a', '#1a2142', '#131833'], lit: .35, sw: 0 }); s += `<g opacity=".7" style="filter:blur(3px)">${far.svg}</g>`;
    s += sR(0, 690, 1920, 110, '#2c2a40', { sw: 0 });
    const L = skyline(-30, 520, 790, 330, 620, 31, { cols: ['#3a2c4a', '#4a3a3a', '#2f3a52'], lit: .5 }), Rr = skyline(1500, 1950, 790, 300, 560, 41, { cols: ['#2f3a52', '#3a2c4a', '#42303a'], lit: .5 });
    s += L.svg + Rr.svg;
    s += sR(560, 560, 640, 230, '#6a3a2c', { sw: 6 }) + sP('M540 560 L1220 560 L1190 500 L570 500 Z', '#B3283A', { sw: 6 });
    for (let i = 0; i < 8; i++) s += `<rect x="${570 + i * 80}" y="502" width="40" height="56" fill="#F4EFE2" opacity=".9"/>`;
    s += sR(610, 600, 230, 170, '#F7D88A', { sw: 6 }) + sR(900, 600, 230, 170, '#F7D88A', { sw: 6 }) + sT(880, 548, o.sign || 'CAFE', 46, '#fff', { cls: 'brush', st: 8 });
    s += sR(0, 790, 1920, 290, '#34344a', { sw: 0 }) + sL(0, 790, 1920, 790, 6) + sR(0, 790, 1920, 70, '#5a5a70', { sw: 0 }) + sL(0, 860, 1920, 860, 5);
    for (let i = 0; i < 20; i++) s += sL(i * 110, 860, i * 110 - 60 + i * 8, 1080, 3, '#26263a');
    // extras: parked taxi, trash can, bus-stop sign, crosswalk stripes, pigeons
    s += sR(1320, 705, 300, 90, '#F2C230', { r: 18 }) + sR(1370, 660, 190, 60, '#F2C230', { r: 16 }) + sR(1388, 670, 70, 40, '#9fd6f5', { r: 6 }) + sR(1470, 670, 70, 40, '#9fd6f5', { r: 6 }) + sC(1380, 800, 28, '#1c1c24') + sC(1560, 800, 28, '#1c1c24') + sR(1425, 640, 70, 20, '#fff', { r: 4 });
    s += sR(40, 722, 54, 76, '#4f6a58', { r: 6 }) + sR(32, 712, 70, 16, '#3a5043', { r: 4 });
    s += sR(300, 600, 12, 200, '#2a2a33') + sR(250, 580, 112, 54, '#2b5aa8', { r: 6 }) + sT(306, 618, 'BUS', 36, '#fff', { cls: 'sans' });
    for (let i = 0; i < 9; i++) s += `<rect x="${200 + i * 160}" y="930" width="90" height="24" fill="#c9c9d6" opacity=".35"/>`;
    [[980, 886], [1034, 902], [1010, 940]].forEach(([x, y]) => s += `<ellipse cx="${x}" cy="${y}" rx="17" ry="11" fill="#8a8a99" stroke="${SINK}" stroke-width="3"/><circle cx="${x + 12}" cy="${y - 8}" r="7" fill="#8a8a99" stroke="${SINK}" stroke-width="3"/><path d="M${x + 19} ${y - 8} l9 3 l-9 2 z" fill="#e8a23a"/>`);
    // street lamp
    s += sR(1318, 280, 16, 520, '#2a2a33', { sw: 5 }) + sP('M1326 280 Q1326 250 1250 250', 'none', { sw: 9 }) + sP('M1210 250 L1290 250 L1272 286 L1228 286 Z', '#F7D88A', { sw: 5 });
    return { svg: s, floorY: 1000, lights: [{ x: 1250, y: 560, r: 560, a: .95 }, { x: 880, y: 700, r: 420, a: .8 }, { x: 960, y: 700, r: 1100, a: .2 }], glows: [{ x: 1250, y: 270, r: 200, c: '#FFD27A', a: .5 }, { x: 880, y: 700, r: 280, c: '#FFD27A', a: .25 }, ...winGlow(L.wins.concat(Rr.wins), '#FFC85A', .12, 40)], cones: [{ x: 1250, y: 288, w0: 60, w1: 560, len: 560, lean: 0, a: .22, c: '#FFD27A' }] };
  },
  city(o) {
    const t = o.time || 'night'; let s = sky(t === 'day' ? 'day' : t === 'dusk' ? 'dusk' : 'night', 800) + (t === 'night' ? stars(9, 70, 380) : '') + (t === 'day' ? '' : moon(1480, 190, 62));
    const far = skyline(-20, 1940, 760, 120, 330, 5, { cols: ['#1a2145', '#1f2850'], lit: .35, sw: 0 }); s += `<g opacity=".8">${far.svg}</g>`;
    if (o.landmark === 'tower') s += sP('M960 140 L992 330 L1030 560 L1096 780 L824 780 L890 560 L928 330 Z', '#7a5a3a', { sw: 6 }) + sP('M900 520 Q960 470 1020 520', 'none', { sw: 8 }) + sP('M850 700 Q960 640 1070 700', 'none', { sw: 8 }) + sL(960, 140, 960, 90, 6) + sC(960, 84, 8, '#F7D88A', { sw: 0 });
    else if (o.landmark === 'skyscraper') s += sR(840, 150, 240, 640, '#2a3568', { sw: 6 }) + sR(900, 100, 120, 60, '#2a3568', { sw: 6 }) + sL(960, 100, 960, 50, 6);
    const near = skyline(-20, 1940, 800, 200, 460, 17, { cols: ['#222a52', '#2a3260', '#1c2346'], lit: .5 }); s += near.svg;
    s += sR(0, 800, 1920, 280, '#101a3a', { sw: 0 }) + sL(0, 800, 1920, 800, 5);
    for (let i = 0; i < 30; i++) s += `<rect x="${i * 70}" y="${820 + (i % 4) * 40}" width="${40 + (i % 3) * 20}" height="6" fill="#F7D88A" opacity=".28"/>`;
    return { svg: s, floorY: 1010, lights: [{ x: 960, y: 700, r: 900, a: .5 }, { x: 1480, y: 190, r: 380, a: .5 }], glows: [{ x: 1480, y: 190, r: 300, c: '#CFD8FF', a: .25 }, ...winGlow(near.wins, '#FFC85A', .14, 44)], cones: [] };
  },
  boardroom(o) {
    let s = sR(0, 0, 1920, 1080, '#262a3a', { sw: 0 }); for (let i = 0; i < 12; i++) s += `<rect x="${i * 170}" y="0" width="12" height="640" fill="#2f3446"/>`;
    s += sR(0, 640, 1920, 440, '#3a2a22', { sw: 0 }) + sL(0, 640, 1920, 640, 6);
    s += sR(260, 120, 1400, 440, '#0d1230', { sw: 8 }); const w = skyline(266, 1654, 556, 120, 330, 8, { lit: .5 }); s += `<clipPath id="bw"><rect x="264" y="124" width="1392" height="432"/></clipPath><g clip-path="url(#bw)">${sky('night', 556)}${stars(4, 30, 200)}${w.svg}</g>`;
    for (let i = 1; i < 4; i++) s += sL(260 + i * 350, 120, 260 + i * 350, 560, 8);
    s += sP('M180 860 L1740 860 L1560 700 L360 700 Z', '#5a3a28', { sw: 7 }) + sR(180, 860, 1560, 50, '#43291b', { sw: 7 });
    for (let i = 0; i < 6; i++) { const x = 440 + i * 210; s += sR(x - 55, 640, 110, 90, '#1b1d28', { r: 22 }) + sR(x - 55, 690, 110, 20, '#2a2d3c', { sw: 4 }) }
    [520, 960, 1400].forEach(x => s += sL(x, 0, x, 60, 4) + sP(`M${x - 70} 130 L${x + 70} 130 L${x + 40} 60 L${x - 40} 60 Z`, '#d9b66a', { sw: 5 }));
    return { svg: s, floorY: 1010, lights: [{ x: 520, y: 400, r: 420, a: .7 }, { x: 960, y: 400, r: 480, a: .75 }, { x: 1400, y: 400, r: 420, a: .7 }, { x: 960, y: 840, r: 900, a: .3 }], glows: [{ x: 960, y: 130, r: 400, c: '#FFD27A', a: .3 }, ...winGlow(w.wins, '#FFC85A', .12, 40)], cones: [520, 960, 1400].map(x => ({ x, y: 128, w0: 120, w1: 520, len: 560, lean: 0, a: .14, c: '#FFD27A' })) };
  },
  stage(o) {
    const sc = o.spot || '#FFD27A'; let s = sR(0, 0, 1920, 1080, '#2a1f4a', { sw: 0 });
    s += sP('M0 0 L330 0 Q260 400 330 760 L0 760 Z', '#6a1f3a', { sw: 6 }) + sP('M1920 0 L1590 0 Q1660 400 1590 760 L1920 760 Z', '#6a1f3a', { sw: 6 });
    for (let i = 0; i < 6; i++) s += sL(i * 56, 0, i * 52 + 20, 760, 3, '#4a132a');
    s += sR(470, 150, 980, 520, '#14173a', { r: 8, sw: 8 }) + `<rect x="486" y="166" width="948" height="488" fill="${o.screen || '#1f2a66'}" opacity=".9"/>`;
    s += sR(0, 760, 1920, 320, '#3a2a66', { sw: 0 }) + sL(0, 760, 1920, 760, 6);
    for (let i = 0; i < 10; i++) s += sL(i * 210, 760, i * 210 - 160, 1080, 3, '#2b1f4e');
    for (let i = 0; i < 9; i++) s += sC(120 + i * 210, 60 + (i % 2) * 14, 12, '#fff', { sw: 3 });
    return { svg: s, floorY: 1000, lights: [{ x: o.spotX || 960, y: 880, r: 520, a: .95 }, { x: 960, y: 400, r: 520, a: .5 }, { x: 960, y: 600, r: 1100, a: .2 }], glows: [{ x: 960, y: 400, r: 460, c: '#5878ff', a: .22 }], cones: [{ x: o.spotX || 960, y: 0, w0: 80, w1: 560, len: 900, lean: 0, a: .24, c: sc }] };
  },
  trading(o) {
    const red = (o.mood || 'red') === 'red'; let s = sR(0, 0, 1920, 1080, '#14182e', { sw: 0 }); const r = sRng(12), gl = [];
    for (let j = 0; j < 4; j++) for (let i = 0; i < 9; i++) {
      const x = 90 + i * 200, y = 80 + j * 150, up = r() < (red ? .12 : .8); s += sR(x, y, 176, 124, '#0b0e1c', { r: 6, sw: 5 }) + `<rect x="${x + 8}" y="${y + 8}" width="160" height="108" fill="${up ? '#123d2a' : '#4a1018'}"/>`;
      let d = `M${x + 14} ${y + 90}`; for (let k = 1; k <= 8; k++) d += ` L${x + 14 + k * 18} ${y + 90 - (up ? k * 8 : -k * 2) + (r() * 20 - 10)}`; s += `<path d="${d}" fill="none" stroke="${up ? '#3dff9a' : '#ff4a5a'}" stroke-width="5"/>`; gl.push({ x: x + 88, y: y + 62, r: 120, c: up ? '#3dff9a' : '#ff4a5a', a: .10 });
    }
    s += sR(0, 700, 1920, 380, '#1e2236', { sw: 0 }) + sL(0, 700, 1920, 700, 6);
    for (let i = 0; i < 5; i++) { const x = 100 + i * 380; s += sR(x, 780, 330, 40, '#3a3f58', { r: 6 }) + sR(x + 40, 740, 120, 40, '#0b0e1c', { r: 4 }) + sR(x + 180, 750, 90, 30, '#0b0e1c', { r: 4 }) }
    return { svg: s, floorY: 1030, lights: [{ x: 960, y: 300, r: 900, a: .8 }, { x: 960, y: 800, r: 700, a: .45 }], glows: gl, cones: [] };
  },
  map(o) {
    let s = sR(0, 0, 1920, 1080, o.sea || '#16294e', { sw: 0 }); for (let i = 1; i < 12; i++) s += sL(0, i * 90, 1920, i * 90, 1.5, '#2c4678') + sL(i * 160, 0, i * 160, 1080, 1.5, '#2c4678');
    const land = '#C9A878', ls = (d) => sP(d, land, { sw: 5 });
    s += ls('M120 190 L330 140 L540 170 L600 280 L520 420 L440 520 L330 460 L250 360 L150 300 Z');            // north america
    s += ls('M470 580 L580 560 L650 650 L620 800 L550 940 L500 800 L460 680 Z');                                // south america
    s += ls('M900 210 L1010 170 L1120 190 L1090 280 L1000 320 L920 300 Z');                                   // europe
    s += ls('M920 350 L1060 340 L1130 420 L1120 600 L1040 740 L960 680 L920 520 Z');                           // africa
    s += ls('M1130 180 L1400 140 L1700 200 L1790 330 L1650 440 L1500 500 L1360 440 L1230 350 L1140 290 Z');   // asia
    s += ls('M1560 640 L1740 620 L1790 720 L1680 800 L1560 760 Z');                                            // australia
    s += ls('M560 70 L680 60 L720 110 L640 150 L580 120 Z');                                                   // greenland
    (o.cities || []).forEach(c => s += `<circle cx="${c[0]}" cy="${c[1]}" r="9" fill="#FFD27A"/><circle cx="${c[0]}" cy="${c[1]}" r="26" fill="#FFD27A" opacity=".25"/>`);
    return { svg: s, floorY: 1010, lights: [{ x: 960, y: 540, r: 1200, a: .6 }], glows: [], cones: [] };
  },
  vault(o) {
    let s = sR(0, 0, 1920, 1080, '#2a2d3a', { sw: 0 }); for (let i = 0; i < 16; i++) s += sR(i * 130, 0, 126, 700, i % 2 ? '#32364a' : '#2d3144', { sw: 3 });
    s += sR(0, 740, 1920, 340, '#1b1d28', { sw: 0 }) + sL(0, 740, 1920, 740, 6);
    s += sC(960, 420, 330, '#6a7080') + sC(960, 420, 290, '#8b93a6') + sC(960, 420, 210, '#6a7080') + sC(960, 420, 60, '#d9b66a');
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; s += sC(960 + 250 * Math.cos(a), 420 + 250 * Math.sin(a), 14, '#d9b66a', { sw: 4 }) }
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + .4; s += sL(960, 420, 960 + 170 * Math.cos(a), 420 + 170 * Math.sin(a), 16, '#d9b66a') + sC(960 + 170 * Math.cos(a), 420 + 170 * Math.sin(a), 24, '#d9b66a') }
    return { svg: s, floorY: 1020, lights: [{ x: 960, y: 420, r: 620, a: .9 }, { x: 960, y: 900, r: 700, a: .4 }], glows: [{ x: 960, y: 420, r: 420, c: '#FFD27A', a: .25 }], cones: [] };
  },
  server(o) {
    let s = sR(0, 0, 1920, 1080, '#08202b', { sw: 0 }); const r = sRng(6), gl = [];
    s += sP('M0 1080 L760 560 L1160 560 L1920 1080 Z', '#10333f', { sw: 0 });
    for (let k = 0; k < 6; k++) {
      const x = 80 + k * 110, w = 90; s += sP(`M${x} ${1000 - k * 60} L${x + w} ${960 - k * 60} L${x + w} ${340 + k * 30} L${x} ${250 + k * 40} Z`, '#1a4a5a', { sw: 4 });
      const x2 = 1840 - k * 110; s += sP(`M${x2} ${1000 - k * 60} L${x2 - w} ${960 - k * 60} L${x2 - w} ${340 + k * 30} L${x2} ${250 + k * 40} Z`, '#1a4a5a', { sw: 4 });
      for (let j = 0; j < 10; j++) { const on = r() < .6; s += `<rect x="${x + 14}" y="${300 + k * 36 + j * 56}" width="${w - 28}" height="10" fill="${on ? '#3dffe0' : '#124a52'}"/>`; if (on && gl.length < 24) gl.push({ x: x + 40, y: 305 + k * 36 + j * 56, r: 70, c: '#3dffe0', a: .12 }) }
    }
    s += sR(760, 560, 400, 20, '#0b2a33', { sw: 0 });
    return { svg: s, floorY: 1030, lights: [{ x: 960, y: 700, r: 800, a: .85 }], glows: gl, cones: [] };
  },
  capitol(o) {
    const t = o.time || 'dusk'; let s = sky(t, 760);
    s += sR(0, 760, 1920, 320, '#3b3350', { sw: 0 }) + sL(0, 760, 1920, 760, 5);
    s += sR(380, 520, 1160, 240, '#EDE6D4', { sw: 6 }) + sP('M380 520 L960 400 L1540 520 Z', '#E2DAC4', { sw: 6 });
    for (let i = 0; i < 12; i++) s += sR(420 + i * 94, 540, 40, 210, '#F8F3E4', { sw: 4 });
    s += sR(800, 330, 320, 70, '#EDE6D4', { sw: 6 }) + sP('M820 330 Q960 130 1100 330 Z', '#F8F3E4', { sw: 6 }) + sL(960, 150, 960, 100, 6) + sP('M960 100 L992 108 L960 118 Z', '#B3283A', { sw: 3 });
    for (let i = 0; i < 6; i++) s += sR(360 - i * 12, 760 + i * 26, 1200 + i * 24, 26, i % 2 ? '#d8d0bc' : '#e4dcc6', { sw: 4 });
    [[200, 800], [1720, 800]].forEach(([x, y]) => s += sR(x - 12, y - 60, 24, 160, '#6a4a30', { sw: 5 }) + sC(x, y - 90, 70, '#2d6a4a'));
    return { svg: s, floorY: 1030, lights: [{ x: 960, y: 560, r: 700, a: .5 }, { x: 960, y: 900, r: 900, a: .25 }], glows: [{ x: 960, y: 520, r: 500, c: '#FFB38A', a: .22 }], cones: [] };
  },
  living(o) {
    let s = sR(0, 0, 1920, 1080, '#4a3a5a', { sw: 0 }) + sR(0, 700, 1920, 380, '#5a3f2e', { sw: 0 }) + sL(0, 700, 1920, 700, 6);
    s += sR(560, 180, 800, 450, '#12121c', { r: 14, sw: 8 }) + `<rect x="580" y="200" width="760" height="410" fill="${o.screen || '#2a4a9a'}"/>` + sR(840, 630, 240, 24, '#12121c', { sw: 5 });
    s += sR(120, 520, 480, 220, '#8a3a4a', { r: 40, sw: 6 }) + sR(100, 450, 120, 290, '#7a2f3f', { r: 40, sw: 6 }) + sR(1300, 520, 480, 220, '#3a5a8a', { r: 40, sw: 6 });
    s += sR(1500, 300, 60, 220, '#6a4a30', { sw: 5 }) + sP('M1470 300 L1590 300 L1560 220 L1500 220 Z', '#F7D88A', { sw: 5 });
    return { svg: s, floorY: 1020, lights: [{ x: 960, y: 400, r: 620, a: .8 }, { x: 1530, y: 280, r: 380, a: .7 }, { x: 960, y: 800, r: 900, a: .3 }], glows: [{ x: 960, y: 400, r: 500, c: o.screen || '#5a8aff', a: .3 }], cones: [] };
  }
};

/* ---------------- prison sets (EscapeSkill) ---------------- */
function bricks(x0, y0, x1, y1, bw, bh, col, w) { let s = ''; for (let y = y0, r = 0; y < y1; y += bh, r++) { s += sL(x0, y, x1, y, w || 3, col); for (let x = x0 + (r % 2 ? bw / 2 : 0); x < x1; x += bw) s += sL(x, y, x, Math.min(y + bh, y1), w || 3, col); } return s; }
function razor(x0, x1, y, n) { let s = ''; const st = (x1 - x0) / n; for (let i = 0; i < n; i++) { const x = x0 + i * st + st / 2; s += `<ellipse cx="${x.toFixed(0)}" cy="${y}" rx="${(st * .62).toFixed(0)}" ry="22" fill="none" stroke="#B9BEC8" stroke-width="4"/><ellipse cx="${x.toFixed(0)}" cy="${y}" rx="${(st * .62).toFixed(0)}" ry="22" fill="none" stroke="${SINK}" stroke-width="1.5" opacity=".7"/>` } return s; }
function cellBars(x0, x1, y0, y1, gap, w) { let s = ''; for (let x = x0; x <= x1; x += gap) s += sL(x, y0, x, y1, w || 10, '#3a3f4a') + sL(x - 2, y0, x - 2, y1, 2.5, '#8a92a3'); return s; }
function guardTower(x, base, top) { // guard tower: legs, cabin with lit windows, roof; returns svg + searchlight head
  let s = sL(x - 70, base, x - 50, top + 130, 10) + sL(x + 70, base, x + 50, top + 130, 10) + sL(x - 64, base - 60, x + 64, top + 160, 5) + sL(x + 64, base - 60, x - 64, top + 160, 5);
  s += sR(x - 95, top + 50, 190, 90, '#55606e', { sw: 6 }) + sR(x - 80, top + 64, 70, 42, '#F7D88A', { sw: 4 }) + sR(x + 10, top + 64, 70, 42, '#F7D88A', { sw: 4 });
  s += sP(`M${x - 120} ${top + 52} L${x} ${top} L${x + 120} ${top + 52} Z`, '#3a414e', { sw: 6 }) + sR(x - 105, top + 136, 210, 14, '#3a414e', { sw: 5 });
  s += sC(x - 112, top + 98, 18, '#F4F0D6', { sw: 5 });
  return { svg: s, head: [x - 112, top + 98] };
}
Object.assign(SETS, {
  cell(o) {
    let s = sR(0, 0, 1920, 1080, '#5d6b78', { sw: 0 }) + bricks(0, 0, 1920, 760, 160, 64, '#4c5864', 3);
    s += sR(0, 760, 1920, 320, '#4a4f58', { sw: 0 }) + sL(0, 760, 1920, 760, 6);
    for (let i = 0; i < 12; i++) s += sL(i * 170, 760, i * 170 - 140 + i * 24, 1080, 3, '#3c4048');
    s += `<ellipse cx="1180" cy="900" rx="120" ry="18" fill="#3e434c"/><ellipse cx="560" cy="1010" rx="90" ry="14" fill="#3e434c"/>`;
    // high barred window with the night sky
    s += sR(1140, 120, 300, 200, '#0d1230', { sw: 8 }) + `<clipPath id="cellw"><rect x="1144" y="124" width="292" height="192"/></clipPath><g clip-path="url(#cellw)">${sky(o.time === 'day' ? 'day' : 'night', 320)}${o.time === 'day' ? '' : stars(14, 12, 300) + moon(1360, 190, 34)}</g>`;
    s += cellBars(1180, 1400, 120, 320, 55, 9) + sL(1140, 220, 1440, 220, 8, '#3a3f4a') + sR(1126, 316, 328, 18, '#6c7684');
    // bunk bed (left)
    s += sR(170, 330, 22, 520, '#6c7482', { sw: 5 }) + sR(740, 330, 22, 520, '#6c7482', { sw: 5 });
    s += sR(180, 430, 570, 26, '#7c8492') + sR(186, 396, 556, 36, '#5f7a5c', { r: 10 }) + sR(200, 372, 120, 34, '#e8e2cc', { r: 12 });
    s += sR(180, 700, 570, 26, '#7c8492') + sR(186, 664, 556, 38, '#6b5a7a', { r: 10 }) + sR(200, 640, 120, 34, '#e8e2cc', { r: 12 });
    for (let i = 0; i < 5; i++) s += sL(700, 460 + i * 48, 740, 460 + i * 48, 5);
    // steel toilet + sink (right of centre)
    s += sR(1520, 560, 160, 120, '#a9b0bc', { r: 10 }) + sR(1556, 572, 88, 30, '#6c7482', { r: 8 }) + sL(1600, 560, 1600, 534, 7) + sL(1600, 534, 1624, 534, 7);
    s += sR(1540, 680, 120, 120, '#a9b0bc', { r: 12 }) + `<ellipse cx="1600" cy="680" rx="72" ry="20" fill="#c9ced8" stroke="${SINK}" stroke-width="5"/>`;
    // cell door bars (right edge) with the lit corridor behind
    s += sR(1760, 0, 160, 860, '#8a95a2', { sw: 0 }) + `<rect x="1760" y="0" width="160" height="860" fill="#F7D88A" opacity=".18"/>` + cellBars(1770, 1910, 0, 860, 34, 10) + sL(1760, 120, 1920, 120, 10, '#3a3f4a') + sL(1760, 640, 1920, 640, 10, '#3a3f4a') + sL(1760, 0, 1760, 860, 8);
    if (o.tally !== false) for (let g = 0; g < 3; g++) { const gx = 860 + g * 70; for (let i = 0; i < 4; i++) s += sL(gx + i * 11, 420, gx + i * 11, 470, 3, '#2a2f38'); s += sL(gx - 6, 462, gx + 42, 428, 3, '#2a2f38'); }
    if (o.hole) s += `<path d="M1180 760 L1186 660 L1214 618 L1262 602 L1312 622 L1338 668 L1342 760 Z" fill="#0b0b10" stroke="${SINK}" stroke-width="6" stroke-linejoin="round"/>` + [[1170, 772, 16], [1200, 786, 12], [1354, 776, 14], [1384, 790, 10], [1330, 796, 9]].map(([x, y, r]) => sC(x, y, r, '#77808c', { sw: 4 })).join('') + sR(1376, 744, 60, 10, '#c9ced8', { r: 4, sw: 3 }) + sC(1440, 749, 11, '#c9ced8', { sw: 3 });
    if (o.lamp) s += sL(960, 0, 960, 70, 5) + sP('M920 70 L1000 70 L990 110 L930 110 Z', '#6c7482', { sw: 5 }) + sC(960, 118, 16, '#F7D88A', { sw: 4 });
    const L = [{ x: 1290, y: 620, r: 520, a: .75 }, { x: 1850, y: 560, r: 400, a: .75 }, { x: 960, y: 720, r: 1000, a: .2 }];
    if (o.lamp) L.push({ x: 960, y: 500, r: 620, a: .85 });
    return { svg: s, floorY: 1000, lights: L, glows: [{ x: 1290, y: 220, r: 260, c: '#CFD8FF', a: .3 }, { x: 1840, y: 400, r: 300, c: '#FFD27A', a: .22 }].concat(o.lamp ? [{ x: 960, y: 118, r: 220, c: '#FFD27A', a: .45 }] : []), cones: [{ x: 1290, y: 320, w0: 260, w1: 560, len: 640, lean: -300, a: .16, c: '#CFD8FF' }] };
  },
  cellblock(o) {
    let s = sR(0, 0, 1920, 1080, '#56606c', { sw: 0 }); const r = sRng(77), gl = [];
    const tierCells = (y0, y1) => { let q = ''; for (let i = 0; i < 7; i++) { const x = 30 + i * 270, lit = r() < .35; q += sR(x, y0, 230, y1 - y0, lit ? '#3a3524' : '#1b1f28', { sw: 6 }); if (lit) { q += `<rect x="${x + 6}" y="${y0 + 6}" width="218" height="${y1 - y0 - 12}" fill="#F7D88A" opacity=".22"/>`; gl.push({ x: x + 115, y: (y0 + y1) / 2, r: 160, c: '#FFD27A', a: .12 }) } q += cellBars(x + 18, x + 212, y0, y1, 32, 8) + sL(x, y0 + 30, x + 230, y0 + 30, 7, '#3a3f4a'); } return q; };
    s += tierCells(110, 370) + tierCells(450, 760);
    // walkway + railing (upper tier)
    s += sR(0, 370, 1920, 44, '#6a7380', { sw: 6 }) + sT(960, 404, o.block || 'C BLOCK', 30, '#F4EFE2', { cls: 'sans' });
    s += sL(0, 300, 1920, 300, 7, '#3a3f4a'); for (let i = 0; i < 25; i++) s += sL(i * 80, 300, i * 80, 370, 4, '#3a3f4a');
    // stairs (right) up to the walkway
    s += sP('M1460 760 L1760 414 L1800 414 L1500 760 Z', '#6a7380', { sw: 5 }); for (let i = 1; i < 9; i++) { const k = i / 9; s += sL(1460 + 300 * k, 760 - 346 * k, 1500 + 300 * k, 760 - 346 * k, 5); }
    s += sL(1440, 700, 1740, 354, 5, '#3a3f4a');
    // floor
    s += sR(0, 760, 1920, 320, '#5a616e', { sw: 0 }) + sL(0, 760, 1920, 760, 6); for (let i = 0; i < 8; i++) s += `<rect x="${i * 260}" y="${800 + (i % 3) * 70}" width="140" height="8" fill="#fff" opacity=".07"/>`;
    s += sL(0, 880, 1920, 880, 4, '#c9a24a');
    // hanging lamps
    [480, 960, 1440].forEach(x => s += sL(x, 0, x, 40, 4) + sP(`M${x - 60} 70 L${x + 60} 70 L${x + 30} 40 L${x - 30} 40 Z`, '#6c7482', { sw: 5 }) + sC(x, 74, 10, '#F7D88A', { sw: 3 }));
    return { svg: s, floorY: 1010, lights: [480, 960, 1440].map(x => ({ x, y: 560, r: 480, a: .8 })).concat([{ x: 960, y: 900, r: 1000, a: .3 }]), glows: [480, 960, 1440].map(x => ({ x, y: 80, r: 220, c: '#FFD27A', a: .35 })).concat(gl), cones: [480, 960, 1440].map(x => ({ x, y: 72, w0: 110, w1: 520, len: 800, lean: 0, a: .12, c: '#FFD27A' })) };
  },
  yard(o) {
    const t = o.time || 'day'; let s = sky(t === 'red' ? 'red' : t, 700) + (t === 'night' ? stars(23, 50, 300) + moon(260, 150, 48) : '');
    // main building behind the fence
    s += sR(-20, 380, 1300, 300, '#8a8f99', { sw: 6 }); for (let j = 0; j < 3; j++) for (let i = 0; i < 16; i++) s += sR(30 + i * 78, 410 + j * 80, 30, 46, t === 'day' ? '#2a2f38' : (sRng(i * 7 + j)() < .4 ? '#F7D88A' : '#2a2f38'), { sw: 3 });
    const tw = guardTower(1580, 700, 150); s += tw.svg;
    s += sR(0, 680, 1920, 400, t === 'day' ? '#a89878' : '#5a5040', { sw: 0 }) + sL(0, 680, 1920, 680, 5);
    // chain-link fence + razor wire
    let mesh = ''; for (let x = -400; x < 2000; x += 34) mesh += `<line x1="${x}" y1="470" x2="${x + 290}" y2="760" stroke="#c9ced8" stroke-width="2" opacity=".55"/><line x1="${x + 290}" y1="470" x2="${x}" y2="760" stroke="#c9ced8" stroke-width="2" opacity=".55"/>`;
    s += `<clipPath id="yardf"><rect x="0" y="470" width="1920" height="290"/></clipPath><g clip-path="url(#yardf)">${mesh}</g>` + sL(0, 470, 1920, 470, 6, '#6c7482') + sL(0, 760, 1920, 760, 6, '#6c7482');
    for (let i = 0; i <= 8; i++) s += sR(i * 240 - 8, 440, 16, 330, '#6c7482', { sw: 4 });
    s += razor(0, 1920, 450, 26);
    // court lines, hoop, bench + weights
    s += `<path d="M120 1080 L360 800 L1000 800" fill="none" stroke="#fff" stroke-width="6" opacity=".45"/>`;
    s += sR(250, 520, 16, 300, '#3a3f4a', { sw: 4 }) + sR(180, 470, 150, 96, '#F4EFE2', { sw: 5 }) + sR(226, 506, 58, 40, 'none', { sw: 4 }) + `<ellipse cx="258" cy="572" rx="40" ry="9" fill="none" stroke="#d9572e" stroke-width="6"/>`;
    s += sR(1180, 860, 300, 26, '#7a5236', { sw: 5 }) + sR(1200, 886, 16, 60, '#3a3f4a', { sw: 4 }) + sR(1444, 886, 16, 60, '#3a3f4a', { sw: 4 });
    s += sL(1140, 830, 1520, 830, 8) + sC(1150, 830, 30, '#2a2f38') + sC(1510, 830, 30, '#2a2f38');
    // floodlight poles
    [[100, 'r'], [1860, 'l']].forEach(([x]) => s += sR(x - 8, 220, 16, 480, '#3a3f4a', { sw: 4 }) + sR(x - 50, 196, 100, 40, '#6c7482', { sw: 5 }) + sC(x - 24, 216, 12, '#F7D88A', { sw: 3 }) + sC(x + 24, 216, 12, '#F7D88A', { sw: 3 }));
    const night = t !== 'day';
    return { svg: s, floorY: 1010, lights: night ? [{ x: 300, y: 820, r: 700, a: .85 }, { x: 1660, y: 820, r: 700, a: .85 }, { x: 960, y: 900, r: 1100, a: .25 }, { x: tw.head[0], y: tw.head[1], r: 120, a: .9 }] : [], glows: night ? [{ x: 100, y: 216, r: 220, c: '#FFF2C0', a: .4 }, { x: 1860, y: 216, r: 220, c: '#FFF2C0', a: .4 }, { x: 1580, y: 235, r: 200, c: '#FFD27A', a: .3 }] : [], cones: night ? [{ x: 100, y: 230, w0: 80, w1: 700, len: 780, lean: 300, a: .16, c: '#FFF2C0' }, { x: 1860, y: 230, w0: 80, w1: 700, len: 780, lean: -300, a: .16, c: '#FFF2C0' }] : [] };
  },
  wall(o) {
    const t = o.time || 'night'; let s = sky(t === 'day' ? 'day' : t === 'red' ? 'red' : 'night', 360) + (t === 'day' ? '' : stars(31, 60, 300) + moon(300, 130, 50));
    s += sR(-10, 300, 1940, 540, '#7a7468', { sw: 6 }) + bricks(-10, 300, 1930, 840, 220, 90, '#5e594f', 4);
    for (let i = 0; i < 9; i++) s += `<path d="M${120 + i * 210} ${330 + (i % 3) * 120} q14 40 0 80" fill="none" stroke="#4c4a3f" stroke-width="5" opacity=".6"/>`;
    s += sR(-10, 290, 1940, 24, '#8e887a', { sw: 5 }) + razor(0, 1920, 272, 30);
    const tw = guardTower(1560, 300, 40); s += tw.svg;
    if (o.rope) s += `<path d="M${o.rope} 300 q16 120 -4 240 q-18 120 6 270" fill="none" stroke="#c9a46a" stroke-width="9" stroke-linecap="round"/>` + sC(o.rope, 300, 12, '#6c7482', { sw: 4 });
    s += sR(0, 840, 1920, 240, '#2e3a2c', { sw: 0 }) + sL(0, 840, 1920, 840, 6);
    for (let i = 0; i < 40; i++) s += sL(i * 50 + 10, 846, i * 50 + 18, 822 + (i % 3) * 6, 4, '#3f5a3a');
    const sw = o.sweep == null ? 360 : o.sweep, sp = o.sweepSpeed || .6, gx = o.spotX || 820;
    return { svg: s, floorY: 1010, lights: [{ x: gx, y: 920, r: 300, a: .95, sweep: sw, speed: sp }, { x: tw.head[0], y: tw.head[1], r: 140, a: .9 }, { x: 1560, y: 140, r: 260, a: .6 }, { x: 960, y: 800, r: 1200, a: .15 }], glows: [{ x: tw.head[0], y: tw.head[1], r: 160, c: '#FFF8D8', a: .5 }, { x: 1560, y: 120, r: 200, c: '#FFD27A', a: .25 }], cones: [{ x: tw.head[0], y: tw.head[1], w0: 30, w1: 420, len: 920 - tw.head[1], lean: gx - tw.head[0], a: .26, c: '#FFF8D8', sweep: sw, speed: sp }] };
  },
  tunnel(o) {
    if (!o.ambient) o.ambient = '#3b2b30';
    let s = sR(0, 0, 1920, 1080, '#6b4a32', { sw: 0 }); const r = sRng(91);
    for (let i = 0; i < 4; i++) s += `<path d="M0 ${60 + i * 80} Q480 ${40 + i * 80 + (i % 2) * 30} 960 ${70 + i * 80} T1920 ${60 + i * 80}" fill="none" stroke="#5a3e28" stroke-width="10" opacity=".7"/>`;
    for (let i = 0; i < 26; i++) s += `<ellipse cx="${(r() * 1920).toFixed(0)}" cy="${(r() * 320).toFixed(0)}" rx="${(14 + r() * 30).toFixed(0)}" ry="${(10 + r() * 16).toFixed(0)}" fill="#8a7a6a" stroke="${SINK}" stroke-width="4"/>`;
    s += `<path d="M-20 380 Q300 352 620 376 T1240 368 T1940 380 L1940 960 L-20 960 Z" fill="#4a3322" stroke="${SINK}" stroke-width="7"/>`;
    for (let i = 0; i < 14; i++) s += sL(i * 140, 420 + (i % 3) * 140, i * 140 + 60, 440 + (i % 3) * 140, 4, '#3a2618');
    for (let i = 0; i < 9; i++) { const x = 80 + r() * 1760; s += `<path d="M${x.toFixed(0)} 370 q-8 40 4 70 q10 30 -4 60" fill="none" stroke="#3a2618" stroke-width="5" stroke-linecap="round"/>`; }
    s += sR(0, 960, 1920, 120, '#3a2818', { sw: 0 }) + sL(0, 960, 1920, 960, 6);
    [180, 820, 1460].forEach(x => s += sR(x, 380, 34, 580, '#9a6a3c', { sw: 6 }) + sR(x + 300, 380, 34, 580, '#9a6a3c', { sw: 6 }) + sR(x - 20, 370, 374, 36, '#8a5a30', { sw: 6 }));
    if (o.rails !== false) s += sL(0, 1000, 1920, 1000, 7, '#8a92a3') + sL(0, 1040, 1920, 1040, 7, '#8a92a3');
    const lx = o.lampX || 1000; s += sL(lx, 406, lx, 456, 4) + sR(lx - 22, 456, 44, 60, '#d9b66a', { r: 8, sw: 5 }) + sC(lx, 486, 14, '#FFE9A8', { sw: 3 });
    if (o.end) s += `<path d="M1700 380 Q1820 520 1760 700 Q1700 880 1800 960 L1940 960 L1940 380 Z" fill="#6b4a32" stroke="${SINK}" stroke-width="7"/>` + sL(1600, 940, 1690, 820, 8, '#9a6a3c') + sP('M1660 800 L1730 830 L1700 850 Z', '#a9b0bc', { sw: 4 });
    return { svg: s, floorY: 990, lights: [{ x: lx, y: 600, r: 620, a: .95 }, { x: lx, y: 900, r: 420, a: .5 }], glows: [{ x: lx, y: 486, r: 280, c: '#FFC060', a: .45 }], cones: [] };
  },
  sewer(o) {
    if (!o.ambient) o.ambient = '#24403c';
    let s = sR(0, 0, 1920, 1080, '#5a4038', { sw: 0 }) + bricks(0, 0, 1920, 860, 120, 50, '#46302a', 3);
    [[760, '#3a2a26'], [600, '#2c201e'], [440, '#1e1614'], [280, '#120c0c']].forEach(([w, c]) => s += sP(`M${960 - w} 860 L${960 - w} ${560 - w * .35} Q960 ${80 + (760 - w) * .5} ${960 + w} ${560 - w * .35} L${960 + w} 860 Z`, c, { sw: 6 }));
    s += sR(0, 800, 1920, 60, '#6a5048', { sw: 5 }) + sR(0, 860, 1920, 220, '#2f4a48', { sw: 0 }) + sL(0, 860, 1920, 860, 6);
    for (let i = 0; i < 14; i++) s += `<path d="M${i * 140 + 20} ${900 + (i % 4) * 40} q30 -10 60 0" fill="none" stroke="#9fd6c8" stroke-width="4" opacity=".4"/>`;
    [[220, 560], [1700, 600]].forEach(([x, y]) => s += sC(x, y, 46, '#3a3f4a') + sC(x, y, 30, '#120c0c', { sw: 4 }) + `<path d="M${x} ${y + 30} L${x} 800" stroke="#7aa89a" stroke-width="10" opacity=".5"/>`);
    // grate overhead with moonlight shaft
    const gx = o.grateX || 620; s += sR(gx - 70, 0, 140, 40, '#3a3f4a', { sw: 5 }); for (let i = 0; i < 5; i++) s += sL(gx - 56 + i * 28, 0, gx - 56 + i * 28, 40, 5, '#8a92a3');
    return { svg: s, floorY: 1020, lights: [{ x: gx, y: 700, r: 460, a: .85 }, { x: 960, y: 500, r: 520, a: .35 }, { x: 960, y: 900, r: 900, a: .25 }], glows: [{ x: gx, y: 30, r: 180, c: '#CFE0FF', a: .35 }], cones: [{ x: gx, y: 40, w0: 130, w1: 360, len: 820, lean: 60, a: .2, c: '#CFE0FF' }] };
  },
  shore(o) {
    const t = o.time || 'night'; let s = sky(t === 'day' ? 'day' : t === 'dusk' ? 'dusk' : 'night', 640) + (t === 'night' ? stars(41, 70, 360) + moon(1500, 150, 54) : '');
    // the island prison far away
    s += sP('M380 600 Q520 520 700 530 Q900 520 1040 600 Z', '#1d2440', { sw: 4 }) + sR(520, 470, 300, 80, '#2a3150', { sw: 4 }) + sR(600, 430, 120, 44, '#2a3150', { sw: 4 }) + sR(880, 380, 26, 190, '#2a3150', { sw: 4 }) + sC(893, 376, 14, '#F7D88A', { sw: 3 });
    for (let i = 0; i < 8; i++) s += `<rect x="${540 + i * 34}" y="496" width="14" height="18" fill="#F7D88A" opacity="${i % 3 ? .9 : .2}"/>`;
    s += sR(0, 600, 1920, 300, t === 'day' ? '#3a6a8a' : '#13203a', { sw: 0 }) + sL(0, 600, 1920, 600, 4);
    for (let i = 0; i < 24; i++) s += `<rect x="${(i * 83) % 1900}" y="${620 + (i % 6) * 44}" width="${50 + (i % 4) * 30}" height="5" fill="#CFD8FF" opacity=".25"/>`;
    if (t === 'night') for (let i = 0; i < 6; i++) s += `<rect x="${1450 + (i % 2) * 20}" y="${630 + i * 40}" width="${120 - i * 12}" height="6" fill="#F4F0D6" opacity="${.5 - i * .06}"/>`;
    if (o.raft) s += sP('M1100 860 L1420 850 L1440 890 L1110 900 Z', '#9a6a3c', { sw: 5 }) + [0, 1, 2, 3, 4].map(i => sL(1130 + i * 64, 856, 1136 + i * 64, 896, 3, '#5a3e28')).join('') + sL(1300, 860, 1290, 720, 6, '#7a5236') + sP('M1290 724 L1380 790 L1294 820 Z', '#d8d0bc', { sw: 4 });
    s += sP('M0 900 Q300 870 640 890 T1300 880 T1920 900 L1920 1080 L0 1080 Z', '#2a2620', { sw: 6 });
    [[160, 920, 70], [420, 960, 50], [1600, 940, 80], [1820, 980, 60]].forEach(([x, y, r]) => s += `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .55}" fill="#4a4640" stroke="${SINK}" stroke-width="5"/>`);
    for (let i = 0; i < 18; i++) { const x = 40 + i * 52; s += sL(x, 910, x + (i % 2 ? 8 : -8), 830 + (i % 3) * 20, 4, '#3f5a3a'); }
    return { svg: s, floorY: 1010, lights: [{ x: 1500, y: 300, r: 600, a: .55 }, { x: 960, y: 900, r: 1000, a: .55 }, { x: 893, y: 376, r: 120, a: .6 }], glows: [{ x: 1500, y: 150, r: 300, c: '#CFD8FF', a: .25 }, { x: 893, y: 376, r: 160, c: '#FFD27A', a: .4 }], cones: [] };
  }
});

function setSVG(o, t) { const f = SETS[o.kind]; return f ? f(o, t) : { svg: sR(0, 0, 1920, 1080, '#333', { sw: 0 }), floorY: 1000, lights: [], glows: [], cones: [] } }
/* darkness with soft holes at the light sources + additive glow + cones: one mood for the whole picture */
const NIGHT = { night: '#34407f', dusk: '#7a5a8a', day: null, red: '#7a2030' };
function nightSVG(o, S, t) {
  const time = o.time || 'night', amb = o.ambient || NIGHT[time]; if (!amb || o.lighting === false) return '';
  const fl = 1 + (o.flicker ? .06 * Math.sin(t * 17) : 0); let defs = '', holes = '', gl = '', cn = '';
  (S.lights || []).concat(o.lights || []).forEach((L, i) => {
    const a = Math.min(1, L.a * fl), sx = L.sweep ? L.sweep * Math.sin(t * (L.speed || .6)) : 0; L = Object.assign({}, L, { x: L.x + sx });
    defs += `<radialGradient id="hl${i}"><stop offset="0" stop-color="#000" stop-opacity="${a}"/><stop offset=".55" stop-color="#000" stop-opacity="${(a * .72).toFixed(3)}"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>`;
    holes += `<circle cx="${L.x}" cy="${L.y}" r="${L.r}" fill="url(#hl${i})"/>`;
  });
  (S.glows || []).concat(o.glows || []).forEach((G, i) => {
    defs += `<radialGradient id="gw${i}"><stop offset="0" stop-color="${G.c}" stop-opacity="${G.a}"/><stop offset=".5" stop-color="${G.c}" stop-opacity="${(G.a * .4).toFixed(3)}"/><stop offset="1" stop-color="${G.c}" stop-opacity="0"/></radialGradient>`;
    gl += `<circle cx="${G.x}" cy="${G.y}" r="${G.r}" fill="url(#gw${i})"/>`;
  });
  (S.cones || []).concat(o.cones || []).forEach((C, i) => {
    if (C.sweep) C = Object.assign({}, C, { lean: (C.lean || 0) + C.sweep * Math.sin(t * (C.speed || .6)) });
    defs += `<linearGradient id="cn${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.c || '#FFD27A'}" stop-opacity="${C.a}"/><stop offset="1" stop-color="${C.c || '#FFD27A'}" stop-opacity="0"/></linearGradient>`;
    cn += `<path d="M${C.x - C.w0 / 2} ${C.y} L${C.x + C.w0 / 2} ${C.y} L${C.x + (C.lean || 0) + C.w1 / 2} ${C.y + C.len} L${C.x + (C.lean || 0) - C.w1 / 2} ${C.y + C.len} Z" fill="url(#cn${i})"/>`;
  });
  return `<defs>${defs}<mask id="nmask" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080"><rect width="1920" height="1080" fill="#fff"/>${holes}</mask></defs><rect width="1920" height="1080" fill="${amb}" mask="url(#nmask)" style="mix-blend-mode:multiply"/><g style="mix-blend-mode:screen">${cn}${gl}</g>`;
}
