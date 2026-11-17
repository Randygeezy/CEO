/* AnyVideo: creatures (animals, dinosaurs, birds) and props, drawn in code in the same flat ink style as the puppets.
   Creatures:  "chars":[{"creature":"dog","x":900,"y":1000,"s":1,"mood":"happy","walk":true,"talk":true,"flip":true}]
               "creature" = a preset name (CREATURES below or a library file), a cast key, or a spec object {"base":"dog","color":"#333", ...}.
   Props:      "layers":[{"kind":"prop","prop":"car","x":900,"y":1000,"s":1,"color":"#c33","z":"under"}]  (origin = bottom centre)
   Library files (SKILL/library/*.js, project "library":[...]) add more with Object.assign(CREATURES,{...}), Object.assign(PROPS,{...}), Object.assign(SETS,{...}). */
const INK = '#18161B';
function wLine(x1, y1, x2, y2, w, c, lw) { return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${INK}" stroke-width="${(w + 2 * lw).toFixed(1)}" stroke-linecap="round"/><line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${c}" stroke-width="${w.toFixed(1)}" stroke-linecap="round"/>`; }
function wPath(d, w, c, lw) { return `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${(w + 2 * lw).toFixed(1)}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w.toFixed(1)}" stroke-linecap="round" stroke-linejoin="round"/>`; }
function eFill(cx, cy, rx, ry, f, lw, rot) { return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${f}" stroke="${INK}" stroke-width="${lw}" ${rot ? `transform="rotate(${rot} ${cx.toFixed(1)} ${cy.toFixed(1)})"` : ''}/>`; }
function pFill(d, f, lw) { return `<path d="${d}" fill="${f}" stroke="${INK}" stroke-width="${lw}" stroke-linejoin="round"/>`; }
function shd(c, k) { return typeof shade === 'function' ? shade(c, k) : c; }

/* ---------------- creature presets (sizes in px at s=1; feet on y=0; facing right) ---------------- */
const CREATURES = {
  dog: { plan: 'quad', color: '#c8873f', belly: '#f0d2a0', legH: 72, legW: 34, bodyL: 250, bodyH: 115, neckL: 50, neckA: 55, headW: 136, headH: 120, snoutL: 66, snoutH: 50, ears: 'floppy', tail: 'thin', foot: 'paw' },
  wolf: { plan: 'quad', color: '#8a8f99', belly: '#d8d8de', legH: 88, legW: 32, bodyL: 270, bodyH: 115, neckL: 55, neckA: 50, headW: 126, headH: 110, snoutL: 84, snoutH: 46, ears: 'pointy', tail: 'fluffy', foot: 'paw' },
  fox: { plan: 'quad', color: '#d9662a', belly: '#f6efe4', legH: 62, legW: 24, bodyL: 220, bodyH: 95, neckL: 40, neckA: 50, headW: 114, headH: 100, snoutL: 74, snoutH: 38, ears: 'pointy', tail: 'fluffy', tailTip: '#f6efe4', foot: 'paw', legCol: '#2a2228' },
  cat: { plan: 'quad', color: '#e0a050', belly: '#f6e2c0', legH: 60, legW: 26, bodyL: 210, bodyH: 92, neckL: 30, neckA: 60, headW: 128, headH: 114, snoutL: 26, snoutH: 34, ears: 'pointy', tail: 'up', foot: 'paw', whiskers: true, pattern: 'stripes', patCol: '#b8742a' },
  lion: { plan: 'quad', color: '#d9a050', belly: '#efd29a', legH: 100, legW: 40, bodyL: 340, bodyH: 140, neckL: 40, neckA: 40, headW: 150, headH: 138, snoutL: 54, snoutH: 56, ears: 'round', tail: 'tuft', tuftCol: '#8a4a1c', mane: '#8a4a1c', foot: 'paw' },
  tiger: { plan: 'quad', color: '#e8862a', belly: '#f6efe4', legH: 96, legW: 40, bodyL: 340, bodyH: 135, neckL: 40, neckA: 40, headW: 144, headH: 132, snoutL: 50, snoutH: 54, ears: 'round', tail: 'thin', foot: 'paw', pattern: 'stripes', patCol: '#2a2228', whiskers: true },
  cow: { plan: 'quad', color: '#f4efe2', belly: '#f4efe2', legH: 115, legW: 42, bodyL: 390, bodyH: 190, neckL: 40, neckA: 25, headW: 146, headH: 134, snoutL: 64, snoutH: 70, muzzle: '#eaa6a6', ears: 'side', horns: 'cow', tail: 'tuft', tuftCol: '#2a2622', foot: 'hoof', pattern: 'patches', patCol: '#2a2622' },
  pig: { plan: 'quad', color: '#f2a6b2', belly: '#f6c2ca', legH: 70, legW: 34, bodyL: 300, bodyH: 170, neckL: 0, neckA: 20, headW: 156, headH: 140, snoutL: 30, snoutH: 52, snout: 'disk', ears: 'pointy', tail: 'curly', foot: 'hoof' },
  goat: { plan: 'quad', color: '#e8e2d4', belly: '#f4f0e6', legH: 100, legW: 26, bodyL: 260, bodyH: 125, neckL: 70, neckA: 58, headW: 112, headH: 106, snoutL: 70, snoutH: 44, ears: 'side', horns: 'goat', beard: '#b8b0a0', tail: 'stub', foot: 'hoof' },
  sheep: { plan: 'quad', color: '#f4f1ea', head: '#3a3438', legCol: '#3a3438', legH: 72, legW: 24, bodyL: 280, bodyH: 170, neckL: 20, neckA: 30, headW: 110, headH: 114, snoutL: 50, snoutH: 50, ears: 'side', tail: 'stub', foot: 'hoof', wool: true },
  horse: { plan: 'quad', color: '#8a5a34', belly: '#8a5a34', legH: 180, legW: 36, bodyL: 400, bodyH: 165, neckL: 150, neckA: 62, neckW: 74, headW: 116, headH: 96, snoutL: 120, snoutH: 66, ears: 'pointy', mane: 'neck', maneCol: '#3a2418', tail: 'hair', tailCol: '#3a2418', foot: 'hoof' },
  elephant: { plan: 'quad', color: '#9a9aa8', belly: '#9a9aa8', legH: 200, legW: 70, bodyL: 430, bodyH: 260, neckL: 0, neckA: 20, headW: 200, headH: 190, snoutL: 40, snoutH: 80, ears: 'fan', trunk: true, tusks: true, tail: 'thin', foot: 'round' },
  bear: { plan: 'quad', color: '#6a4a32', belly: '#8a6a4a', legH: 92, legW: 56, bodyL: 380, bodyH: 210, neckL: 20, neckA: 30, headW: 158, headH: 142, snoutL: 54, snoutH: 52, muzzle: '#b8946a', ears: 'round', tail: 'stub', foot: 'paw' },
  rabbit: { plan: 'quad', color: '#c9b8a6', belly: '#f4efe2', legH: 46, legW: 26, bodyL: 160, bodyH: 110, neckL: 0, neckA: 40, headW: 110, headH: 102, snoutL: 22, snoutH: 30, ears: 'long', tail: 'stub', tailCol: '#fff', foot: 'paw', whiskers: true },
  chicken: { plan: 'bird', color: '#f4efe2', legH: 70, bodyL: 170, bodyH: 140, headW: 70, headH: 70, beak: '#f2b830', comb: '#d9322e', legCol: '#f2b830', tail: 'fan' },
  rooster: { plan: 'bird', color: '#c8602a', wing: '#8a3a1c', legH: 80, bodyL: 180, bodyH: 150, headW: 72, headH: 72, beak: '#f2b830', comb: '#d9322e', legCol: '#f2b830', tail: 'fan', tailCol: '#2a5a3a' },
  duck: { plan: 'bird', color: '#f4efe2', legH: 40, bodyL: 190, bodyH: 120, headW: 76, headH: 72, beak: '#f29a30', beakL: 46, legCol: '#f29a30', tail: 'stub' },
  trex: { ears: 'none', plan: 'biped', color: '#5f8a4a', belly: '#c9c48a', legH: 260, legW: 60, bodyL: 380, bodyH: 210, headW: 230, headH: 150, snoutL: 120, teeth: true, arms: 'tiny', tail: 'long', tailL: 420, foot: 'claw', pattern: 'stripes', patCol: '#4a6e3a' },
  raptor: { ears: 'none', plan: 'biped', color: '#b0885a', belly: '#e8d6b0', legH: 180, legW: 34, bodyL: 250, bodyH: 110, headW: 120, headH: 74, snoutL: 70, teeth: true, arms: 'claws', tail: 'long', tailL: 320, foot: 'claw', pattern: 'stripes', patCol: '#7a5a3a' },
  stegosaurus: { plan: 'quad', color: '#7a8a4a', belly: '#b8c08a', legH: 150, legW: 54, bodyL: 420, bodyH: 210, neckL: 60, neckA: -10, headW: 90, headH: 66, snoutL: 40, snoutH: 40, ears: 'none', tail: 'long', tailL: 320, spikes: true, plates: '#c0603a', foot: 'round' },
  brachiosaurus: { plan: 'quad', color: '#6a8aa0', belly: '#b8c8d4', legH: 240, legW: 64, bodyL: 440, bodyH: 230, neckL: 420, neckA: 66, neckW: 70, headW: 100, headH: 70, snoutL: 50, snoutH: 46, ears: 'none', tail: 'long', tailL: 360, foot: 'round', pattern: 'spots', patCol: '#56768c' },
  triceratops: { plan: 'quad', color: '#a07a5a', belly: '#d8bc94', legH: 120, legW: 58, bodyL: 400, bodyH: 210, neckL: 20, neckA: 10, headW: 170, headH: 130, snoutL: 80, snoutH: 70, beakNose: true, frill: '#c86a3a', horns: 'tri', ears: 'none', tail: 'long', tailL: 200, foot: 'round' }
};
const CR_MOOD = { neutral: [0, 0], happy: [1, 0], grin: [2, 0], shock: [3, 0], scared: [3, 1], angry: [0, -1], roar: [4, -1], sad: [0, 1], sleep: [5, 0], laugh: [2, 0] }; // mouth: 0 shut 1 smile 2 open 3 small-o 4 wide; brow

function crSpec(c) {
  let s = c.creature;
  if (typeof s === 'string') s = (SH && SH.cast && SH.cast[s]) || CREATURES[s] || { base: s };
  s = Object.assign({}, s); let guard = 0;
  while (s.base && CREATURES[s.base] && guard++ < 5) { const b = s.base; delete s.base; s = Object.assign({}, CREATURES[b], s); }
  return Object.assign({ plan: 'quad', color: '#a08a6a', legH: 100, legW: 30, bodyL: 250, bodyH: 120, neckL: 40, neckA: 40, headW: 110, headH: 100, snoutL: 50, snoutH: 46, ears: s.plan === 'biped' ? 'none' : 'pointy', tail: 'thin', foot: 'paw' }, s);
}
function crEye(x, y, r, eyes, look, lw, brow) {
  if (eyes === 'closed') return `<path d="M${x - r} ${y} Q${x} ${y + r * .8} ${x + r} ${y}" fill="none" stroke="${INK}" stroke-width="${lw}" stroke-linecap="round"/>`;
  let g = eFill(x, y, r, r * 1.08, '#FBFBF7', lw * .8) + `<circle cx="${x + r * .32 + look * r * .2}" cy="${y + r * .05}" r="${r * .48}" fill="${INK}"/><circle cx="${x + r * .45}" cy="${y - r * .2}" r="${r * .16}" fill="#fff"/>`;
  if (brow) g += `<line x1="${x - r * 1.1}" y1="${y - r * 1.25 + brow * r * .45}" x2="${x + r * 1.1}" y2="${y - r * 1.25 - brow * r * .45}" stroke="${INK}" stroke-width="${lw * 1.2}" stroke-linecap="round"/>`;
  return g;
}
/* head drawn around (0,0), facing right */
function crHead(sp, mood, eyes, mouthOpen, lw, t) {
  const W = sp.headW, H = sp.headH, hc = sp.head || sp.color, mc = sp.muzzle || (sp.head ? sp.head : (sp.belly || sp.color));
  const md = CR_MOOD[mood] || CR_MOOD.neutral; let g = '';
  // things behind the skull
  if (sp.frill) g += pFill(`M${-W * .2} ${H * .3} A${W * .78} ${W * .78} 0 0 1 ${W * .05} ${-H * .95} Q${-W * .5} ${-H * 1.2} ${-W * .62} ${-H * .2} Z`, sp.frill, lw);
  if (sp.mane && sp.mane !== 'neck') { for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g += eFill(-W * .08 + Math.cos(a) * W * .58, Math.sin(a) * H * .58, W * .26, H * .26, sp.mane, lw); } }
  if (sp.ears === 'fan') g += eFill(-W * .3, H * .1, W * .42, H * .6, shd(hc, .08), lw);
  if (sp.ears === 'floppy') g += eFill(-W * .32, H * .12, W * .16, H * .42, shd(hc, .3), lw, 14);
  if (sp.ears === 'long') { g += eFill(-W * .2, -H * 1.0, W * .14, H * .62, hc, lw, -14) + eFill(-W * .2, -H * .96, W * .07, H * .46, '#f2b8c0', 0, -14); }
  // skull
  g += eFill(0, 0, W / 2, H / 2, hc, lw);
  // ears in front
  if (sp.ears === 'pointy') { g += pFill(`M${-W * .34} ${-H * .3} L${-W * .2} ${-H * .95} L${W * .02} ${-H * .42} Z`, hc, lw) + pFill(`M${-W * .26} ${-H * .38} L${-W * .2} ${-H * .78} L${-W * .06} ${-H * .44} Z`, sp.earIn || '#f2b8c0', 0); }
  if (sp.ears === 'round') g += eFill(-W * .2, -H * .44, W * .14, W * .14, hc, lw) + eFill(-W * .2, -H * .44, W * .07, W * .07, sp.earIn || shd(hc, .25), 0);
  if (sp.ears === 'side') g += eFill(-W * .42, -H * .14, W * .22, H * .1, hc, lw, -18) + eFill(-W * .42, -H * .14, W * .14, H * .05, sp.earIn || '#f2b8c0', 0, -18);
  // horns
  if (sp.horns === 'cow') g += wPath(`M${-W * .12} ${-H * .4} q${-W * .1} ${-H * .3} ${W * .1} ${-H * .5}`, W * .08, '#efe6cc', lw * .8);
  if (sp.horns === 'goat') g += wPath(`M${-W * .05} ${-H * .42} q${-W * .1} ${-H * .5} ${-W * .5} ${-H * .3}`, W * .1, '#b8a888', lw * .8);
  if (sp.horns === 'tri') g += wPath(`M${-W * .05} ${-H * .3} l${W * .38} ${-H * .55}`, W * .07, '#efe6cc', lw * .8);
  // snout / muzzle
  const sx = W * .36, sy = H * .12, SL = sp.snoutL || 0, SH_ = sp.snoutH || H * .4;
  if (sp.plan === 'biped') { // big dino jaws
    const jw = SL + W * .3, open = mouthOpen ? H * .32 * mouthOpen : 0;
    g += pFill(`M${-W * .1} ${H * .1} L${jw} ${H * .14 + open * .6} Q${jw + 10} ${H * .3 + open} ${jw - 20} ${H * .34 + open} L${-W * .1} ${H * .42} Z`, shd(hc, .1), lw);
    if (open > 2) g += pFill(`M${-W * .05} ${H * .16} L${jw - 10} ${H * .16 + open * .5} L${jw - 20} ${H * .3 + open * .5} L${-W * .05} ${H * .36} Z`, '#7a1a22', 0);
    if (sp.teeth) for (let i = 0; i < 7; i++) { const x = W * .02 + i * (jw - W * .05) / 7; g += `<path d="M${x} ${H * .12} l8 18 l8 -18 z" fill="#fff" stroke="${INK}" stroke-width="2"/>`; }
    g += pFill(`M${-W * .5} ${-H * .1} Q${-W * .2} ${-H * .55} ${W * .3} ${-H * .4} L${jw + 8} ${-H * .08} Q${jw + 14} ${H * .1} ${jw} ${H * .16} L${-W * .2} ${H * .2} Z`, hc, lw);
    g += `<circle cx="${jw - 14}" cy="${-H * .02}" r="${lw * .9}" fill="${INK}"/>`;
  } else if (sp.snout === 'disk') {
    g += eFill(sx + SL * .4, sy, SL * .45 + 8, SH_ / 2, mc === sp.color ? shd(sp.color, -.05) : mc, lw) + `<ellipse cx="${sx + SL * .4 + 6}" cy="${sy - 8}" rx="5" ry="9" fill="${shd(sp.color, .45)}"/><ellipse cx="${sx + SL * .4 + 6}" cy="${sy + 10}" rx="5" ry="9" fill="${shd(sp.color, .45)}"/>`;
  } else if (SL > 0) {
    g += eFill(sx + SL * .35, sy, SL * .55 + W * .12, SH_ / 2, mc, lw);
    if (!sp.trunk) g += eFill(sx + SL * .35 + SL * .5 + W * .08, sy - SH_ * .22, Math.max(8, W * .07), Math.max(6, W * .055), sp.nose || INK, 0);
  }
  if (sp.beakNose) g += pFill(`M${sx + SL * .6} ${sy - SH_ * .4} L${sx + SL + W * .25} ${sy + SH_ * .1} L${sx + SL * .6} ${sy + SH_ * .35} Z`, '#8a6a4a', lw);
  if (sp.horns === 'rhino' || sp.horns === 'tri') g += pFill(`M${sx + SL * .45} ${sy - SH_ * .45} L${sx + SL * .62} ${sy - SH_ * 1.3} L${sx + SL * .8} ${sy - SH_ * .4} Z`, '#efe6cc', lw * .8);
  if (sp.trunk) { const sw = 10 * Math.sin(t * 2); g += wPath(`M${sx} ${sy} Q${sx + W * .45} ${sy + H * .2} ${sx + W * .3 + sw} ${sy + H * .75} T${sx + W * .5 + sw} ${sy + H * 1.1}`, W * .16, hc, lw); }
  if (sp.tusks) g += wPath(`M${sx - W * .02} ${sy + H * .22} q${W * .25} ${H * .2} ${W * .32} ${-H * .02}`, W * .06, '#f4efe2', lw * .7);
  if (sp.beard) g += pFill(`M${sx} ${sy + SH_ * .4} l${-10} ${H * .45} l${22} ${-H * .3} Z`, sp.beard, lw * .8);
  // mouth
  if (sp.plan !== 'biped') {
    const mx = sx + SL * .45, my = sy + SH_ * .38;
    if (mouthOpen > .15 || md[0] === 2 || md[0] === 4) { const o = Math.max(mouthOpen, md[0] >= 2 ? .8 : 0); g += eFill(mx, my + 4, SL * .28 + 10, 6 + o * 14, '#7a1a22', lw * .7) + eFill(mx + 2, my + 8 + o * 6, SL * .16 + 5, 3 + o * 5, '#d05860', 0); }
    else if (md[0] === 1) g += `<path d="M${mx - 18} ${my - 2} Q${mx} ${my + 12} ${mx + 18} ${my - 2}" fill="none" stroke="${INK}" stroke-width="${lw * .8}" stroke-linecap="round"/>`;
    else if (md[0] === 3) g += eFill(mx, my + 2, 7, 9, '#7a1a22', lw * .7);
    else g += `<line x1="${mx - 14}" y1="${my}" x2="${mx + 14}" y2="${my}" stroke="${INK}" stroke-width="${lw * .8}" stroke-linecap="round"/>`;
  }
  if (sp.whiskers) [-1, 0, 1].forEach(k => g += `<line x1="${sx + SL * .5}" y1="${sy + k * 6}" x2="${sx + SL * .5 + 46}" y2="${sy + k * 14 - 4}" stroke="${INK}" stroke-width="2" opacity=".7"/>`);
  // eye + cheek
  const er = Math.max(9, Math.min(W, H) * .13), ex = sp.plan === 'biped' ? W * .12 : W * .12, ey = sp.plan === 'biped' ? -H * .2 : -H * .14;
  g += crEye(ex, ey, er, eyes, 0, lw * .8, md[1]);
  if (sp.plan !== 'biped' && !sp.trunk) g += `<ellipse cx="${W * .1}" cy="${H * .2}" rx="${W * .1}" ry="${H * .06}" fill="#E8727A" opacity=".3"/>`;
  return g;
}
function crLeg(x, y, len, w, ang, col, foot, lw) {
  const fx = x + Math.sin(ang) * len, fy = y + Math.cos(ang) * len; let g = wLine(x, y, fx, fy - w * .2, w, col, lw);
  if (foot === 'hoof') g += `<rect x="${(fx - w * .62).toFixed(1)}" y="${(fy - w * .5).toFixed(1)}" width="${(w * 1.24).toFixed(1)}" height="${(w * .5).toFixed(1)}" rx="${w * .12}" fill="#2a2228" stroke="${INK}" stroke-width="${lw * .8}"/>`;
  else if (foot === 'claw') g += eFill(fx + w * .3, fy - w * .22, w * .8, w * .3, col, lw * .8) + [0, 1, 2].map(i => `<path d="M${(fx + w * .5 + i * w * .28).toFixed(1)} ${(fy - w * .1).toFixed(1)} l${w * .22} ${w * .1} l${-w * .2} ${w * .06} z" fill="#efe6cc" stroke="${INK}" stroke-width="2"/>`).join('');
  else if (foot === 'round') g += eFill(fx, fy - w * .25, w * .62, w * .28, shd(col, .12), lw * .8);
  else g += eFill(fx + w * .18, fy - w * .22, w * .62, w * .3, col, lw * .8);
  return g;
}
function crTail(sp, x, y, t, lw, dir) {
  const c = sp.tailCol || sp.color, sw = Math.sin(t * 3) * 10; let g = '';
  switch (sp.tail) {
    case 'thin': g += wPath(`M${x} ${y} Q${x - 60} ${y - 30 + sw} ${x - 70} ${y - 90 + sw}`, 12, c, lw); break;
    case 'up': g += wPath(`M${x} ${y} Q${x - 70} ${y - 20} ${x - 60 + sw} ${y - 130}`, 14, c, lw); break;
    case 'tuft': g += wPath(`M${x} ${y} Q${x - 30} ${y + 60} ${x - 40 + sw} ${y + 120}`, 10, c, lw) + eFill(x - 40 + sw, y + 128, 16, 24, sp.tuftCol || shd(c, .3), lw); break;
    case 'fluffy': g += eFill(x - 62, y - 30 + sw * .3, 84, 32, c, lw, 32 + sw * .4) + (sp.tailTip ? eFill(x - 126, y - 68 + sw * .3, 26, 22, sp.tailTip, lw) : ''); break;
    case 'hair': g += pFill(`M${x} ${y - 10} Q${x - 50} ${y} ${x - 46 + sw} ${y + 150} L${x - 20 + sw} ${y + 160} Q${x - 20} ${y + 40} ${x + 4} ${y + 14} Z`, c, lw); break;
    case 'curly': g += `<path d="M${x} ${y} c-20 -6 -30 -30 -12 -36 c16 -4 16 18 2 18" fill="none" stroke="${INK}" stroke-width="${8 + 2 * lw}" stroke-linecap="round"/><path d="M${x} ${y} c-20 -6 -30 -30 -12 -36 c16 -4 16 18 2 18" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`; break;
    case 'stub': g += eFill(x - 8, y - 6, 22, 18, c, lw); break;
    case 'long': { const L = sp.tailL || 260, th = Math.max(28, sp.bodyH * .35); g += pFill(`M${x + 20} ${y - th} Q${x - L * .5} ${y - th * .3 + sw} ${x - L} ${y + th * .1 + sw * 2} Q${x - L * .5} ${y + th * .6 + sw} ${x + 20} ${y + th * .9} Z`, c, lw);
      if (sp.spikes) [.82, .92].forEach(k => g += pFill(`M${x - L * k} ${y + sw * 2 - 4} l-26 -44 l40 30 Z`, '#efe6cc', lw * .8)); break; }
    case 'fan': [-30, 0, 30].forEach(a => g += eFill(x - 30, y - 40, 22, 50, sp.tailCol || shd(sp.color, .08), lw, a - 20 + sw * .3)); break;
    default: break;
  }
  return g;
}
function creatureSVG(c, t) {
  const sp = crSpec(c), s = c.s || 1, fl = c.flip ? -1 : 1, lw = Math.max(5, 4.4 / s), tt = t + (c.phase || 0);
  const mood = c.mood || 'neutral', md = CR_MOOD[mood] || CR_MOOD.neutral;
  let eyes = md[0] === 5 ? 'closed' : 'open'; if (((tt * 1.0 + (c.phase || 0)) % 3.1) < .1) eyes = 'closed';
  let mouth = 0; if ((c.talk || c.speaking) && typeof speakEnv === 'function') { const tq = Math.floor((t + (T0 || 0)) * FPS / 3) * 3 / FPS - (T0 || 0); mouth = Math.min(1, speakEnv(tq) * 1.3); }
  if (mood === 'roar') mouth = Math.max(mouth, .7 + .3 * Math.sin(tt * 9));
  const walk = c.walk ? Math.sin(tt * (c.walkSpeed || 9)) : 0, bob = c.walk ? 5 * Math.abs(Math.sin(tt * (c.walkSpeed || 9))) : 2.5 * Math.sin(tt * 2.2);
  let ex = 0; if (c.enter) { const e = ease((t - (c.enterAt || 0)) / .8); ex = c.enter === 'left' ? -(1 - e) * 700 : (1 - e) * 700 }
  let g = `<ellipse cx="${(c.x + ex).toFixed(0)}" cy="${c.y + 3}" rx="${(sp.bodyL * .55 * s).toFixed(0)}" ry="${(16 * s).toFixed(0)}" fill="#000" opacity=".28" style="filter:blur(${(8 * s).toFixed(0)}px)"/>`;
  g += `<g transform="translate(${(c.x + ex).toFixed(1)} ${c.y}) scale(${(s * fl).toFixed(4)} ${s})">`;
  const L = sp.bodyL, BH = sp.bodyH, legH = sp.legH, lw2 = sp.legW || 30, col = sp.color, legC = sp.legCol || col, far = shd(legC, .22);
  const by = -legH - BH / 2 + BH * .18 - bob;               // body centre y
  const A = .38 * walk;
  if (sp.plan === 'bird') {
    const cy = -legH - BH / 2 + 6 - bob;
    g += crTail(sp, -L * .38, cy - BH * .05, tt, lw, 1);
    [[-14, A], [14, -A]].forEach(([x0, a]) => { const fx = x0 + Math.sin(a) * legH, fy = 0; g += wLine(x0, cy + BH * .38, fx, fy - 6, 7, sp.legCol || '#f2b830', lw * .8) + [-1, 0, 1].map(k => wLine(fx, fy - 4, fx + 16 + k * 2, fy - 4 + k * 8, 5, sp.legCol || '#f2b830', lw * .6)).join(''); });
    g += eFill(0, cy, L / 2, BH / 2, col, lw) + (sp.belly ? eFill(L * .14, cy + BH * .06, L * .3, BH * .36, sp.belly, 0) : '') + eFill(-L * .06, cy + BH * .04, L * .3, BH * .26, sp.wing || shd(col, .1), lw, -12 + 6 * Math.sin(tt * 3));
    const hx = L * .34, hy = cy - BH * .42, H = sp.headH, W = sp.headW;
    if (sp.comb) g += [0, 1, 2].map(i => eFill(hx - W * .2 + i * W * .2, hy - H * .5, W * .12, H * .2, sp.comb, lw * .8)).join('');
    g += eFill(hx, hy, W / 2, H / 2, sp.head || col, lw);
    const bl = sp.beakL || 30, op = mouth > .2 ? 12 * mouth : 0;
    g += pFill(`M${hx + W * .38} ${hy - 8} L${hx + W * .38 + bl} ${hy + 2 - op * .3} L${hx + W * .38} ${hy + 10} Z`, sp.beak || '#f2b830', lw * .8);
    if (op) g += pFill(`M${hx + W * .38} ${hy + 10} L${hx + W * .38 + bl * .85} ${hy + 12 + op} L${hx + W * .38} ${hy + 16} Z`, sp.beak || '#f2b830', lw * .8);
    if (sp.comb) g += eFill(hx + W * .4, hy + H * .4, W * .08, H * .16, sp.comb, lw * .7);
    g += crEye(hx + W * .1, hy - H * .1, Math.max(8, W * .13), eyes, 0, lw * .8, md[1]);
  } else if (sp.plan === 'biped') {
    const tilt = -8, hipX = -L * .12, hipY = by + BH * .2;
    g += `<g transform="rotate(${tilt} 0 ${by})">` + crTail(sp, -L * .4, by, tt, lw, 1) + `</g>`;
    g += crLeg(hipX + 20, hipY, legH + BH * .1, lw2 * .9, -A, far, sp.foot, lw);
    g += `<g transform="rotate(${tilt} 0 ${by})">` + eFill(0, by, L / 2, BH / 2, col, lw);
    if (sp.belly) g += `<clipPath id="cb${Math.round(c.x)}"><ellipse cx="0" cy="${by}" rx="${L / 2}" ry="${BH / 2}"/></clipPath><g clip-path="url(#cb${Math.round(c.x)})">${eFill(L * .1, by + BH * .42, L * .45, BH * .3, sp.belly, 0)}${sp.pattern === 'stripes' ? [0, 1, 2, 3].map(i => `<path d="M${-L * .3 + i * L * .18} ${by - BH / 2} l20 ${BH * .45} l18 ${-BH * .45} z" fill="${sp.patCol}" opacity=".85"/>`).join('') : ''}</g>`;
    g += `</g>` + `<ellipse cx="0" cy="${by}" rx="${L / 2}" ry="${BH / 2}" fill="none" stroke="${INK}" stroke-width="${lw}" transform="rotate(${tilt} 0 ${by})"/>`;
    g += crLeg(hipX, hipY, legH + BH * .1, lw2, A, legC, sp.foot, lw);
    const ax = L * .32, ay = by + BH * .1; g += sp.arms === 'claws' ? wPath(`M${ax} ${ay} l38 18 l18 -10`, 12, col, lw * .8) : wPath(`M${ax} ${ay} l26 22 l14 -6`, 11, col, lw * .8);
    const hx = L * .42 + sp.headW * .25, hy = by - BH * .52 - sp.headH * .2;
    g += wLine(L * .3, by - BH * .25, hx - sp.headW * .25, hy + sp.headH * .1, sp.headH * .5, col, lw);
    g += `<g transform="translate(${hx} ${hy}) rotate(${(c.headTilt || 0) + (mood === 'roar' ? -6 : 0)})">${crHead(sp, mood, eyes, mouth, lw, tt)}</g>`;
  } else { // quad
    const fxL = L * .3, bxL = -L * .3, legTop = by + BH * .22;
    g += crLeg(fxL - 14, legTop, legH + BH * .1, lw2 * .92, -A, far, sp.foot, lw) + crLeg(bxL - 14, legTop, legH + BH * .1, lw2 * .92, A, far, sp.foot, lw);
    g += crTail(sp, -L * .44, by - BH * .18, tt, lw, 1);
    if (sp.plates) for (let i = 0; i < 7; i++) { const x = -L * .36 + i * L * .12, h = 40 + 34 * Math.sin(Math.PI * (i + .5) / 7); g += pFill(`M${x - 24} ${by - BH * .38} L${x} ${by - BH * .4 - h} L${x + 24} ${by - BH * .38} Z`, sp.plates, lw * .8); }
    if (sp.wool) { for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; g += eFill(Math.cos(a) * L * .42, by + Math.sin(a) * BH * .4, BH * .22, BH * .22, col, lw); } g += eFill(0, by, L * .44, BH * .42, col, 0); }
    else {
      g += eFill(0, by, L / 2, BH / 2, col, lw);
      const cid = `cq${Math.round(c.x)}${Math.round(c.y)}`; let pat = '';
      if (sp.belly && sp.belly !== col) pat += eFill(0, by + BH * .44, L * .42, BH * .26, sp.belly, 0);
      if (sp.pattern === 'patches') pat += [[-.2, -.1, .22, .3], [.18, .15, .16, .22], [.05, -.35, .12, .14]].map(([x, y, rx, ry]) => `<path d="M${L * x - L * rx} ${by + BH * y} Q${L * x - L * rx * .4} ${by + BH * (y - ry * 1.4)} ${L * x + L * rx * .6} ${by + BH * (y - ry)} Q${L * x + L * rx * 1.2} ${by + BH * y} ${L * x + L * rx * .3} ${by + BH * (y + ry)} Q${L * x - L * rx * .6} ${by + BH * (y + ry * 1.2)} ${L * x - L * rx} ${by + BH * y} Z" fill="${sp.patCol}"/>`).join('');
      if (sp.pattern === 'stripes') for (let i = 0; i < 6; i++) pat += `<path d="M${-L * .4 + i * L * .15} ${by - BH / 2} l14 ${BH * .5} l14 ${-BH * .5} z" fill="${sp.patCol}"/>`;
      if (sp.pattern === 'spots') { const r = sRng(7); for (let i = 0; i < 9; i++) pat += `<circle cx="${(r() - .5) * L * .8}" cy="${by + (r() - .6) * BH * .6}" r="${8 + r() * 14}" fill="${sp.patCol}"/>`; }
      if (pat) g += `<clipPath id="${cid}"><ellipse cx="0" cy="${by}" rx="${L / 2}" ry="${BH / 2}"/></clipPath><g clip-path="url(#${cid})">${pat}</g><ellipse cx="0" cy="${by}" rx="${L / 2}" ry="${BH / 2}" fill="none" stroke="${INK}" stroke-width="${lw}"/>`;
    }
    g += crLeg(fxL, legTop, legH + BH * .1, lw2, A, legC, sp.foot, lw) + crLeg(bxL, legTop, legH + BH * .1, lw2, -A, legC, sp.foot, lw);
    // neck + head
    const na = (sp.neckA || 0) * Math.PI / 180, nx0 = L * .36, ny0 = by - BH * .12, nL = sp.neckL || 0;
    const hx = nx0 + Math.cos(na) * nL + sp.headW * .18, hy = ny0 - Math.sin(na) * nL - sp.headH * .12 + (c.walk ? 2 * Math.sin(tt * 9) : 0);
    if (nL > 0) { g += wLine(nx0, ny0, hx - sp.headW * .15, hy + sp.headH * .1, sp.neckW || Math.min(BH * .55, sp.headH * .7), col, lw);
      if (sp.mane === 'neck') g += wLine(nx0 - 10, ny0 - BH * .2, hx - sp.headW * .3, hy - sp.headH * .38, 22, sp.maneCol || shd(col, .4), lw * .7); }
    g += `<g transform="translate(${hx.toFixed(1)} ${hy.toFixed(1)}) rotate(${c.headTilt || 0})">${crHead(sp, mood, eyes, mouth, lw, tt)}</g>`;
  }
  g += '</g>';
  return g;
}

/* ---------------- props (origin = bottom centre, facing right) ---------------- */
function wheel(x, y, r, t, spin) { const a = (spin || 0) * t * 360; return `<g transform="translate(${x} ${y}) rotate(${a.toFixed(1)})"><circle r="${r}" fill="#1c1b22" stroke="${INK}" stroke-width="5"/><circle r="${r * .52}" fill="#b9bec8" stroke="${INK}" stroke-width="4"/>${[0, 1, 2, 3, 4].map(i => `<line x1="0" y1="0" x2="${(Math.cos(i * 1.2566) * r * .5).toFixed(1)}" y2="${(Math.sin(i * 1.2566) * r * .5).toFixed(1)}" stroke="${INK}" stroke-width="4"/>`).join('')}</g>`; }
const PROPS = {
  car(l, t) { const c = l.color || '#c8322e', sp = l.spin == null ? 0 : l.spin, ty = l.type || 'sedan'; let g = `<ellipse cx="0" cy="-2" rx="240" ry="16" fill="#000" opacity=".3" style="filter:blur(6px)"/>`;
    if (ty === 'sports') g += pFill('M-230 -40 L-232 -90 Q-200 -110 -90 -118 L-30 -160 Q60 -170 120 -130 L210 -110 Q240 -100 236 -46 L236 -40 Z', c, 6) + pFill('M-20 -152 Q50 -160 104 -128 L-60 -122 Z', '#9fd6f5', 4) + sR(200, -100, 30, 14, '#F7D88A', { r: 4, sw: 3 });
    else if (ty === 'truck') g += sR(-240, -200, 300, 160, c, { r: 10, sw: 6 }) + sR(70, -150, 160, 110, shd(c, .1), { r: 14, sw: 6 }) + sR(120, -136, 90, 50, '#9fd6f5', { r: 6, sw: 4 }) + sR(214, -86, 20, 16, '#F7D88A', { r: 4, sw: 3 });
    else if (ty === 'race') g += pFill('M-240 -40 L-236 -80 L-160 -96 L-40 -100 L20 -140 L90 -140 L120 -100 L230 -84 L250 -40 Z', c, 6) + sR(-250, -150, 60, 60, shd(c, .2), { r: 4, sw: 5 }) + sC(50, -122, 22, '#1c1b22', { sw: 4 }) + sT(-90, -56, l.number || '7', 54, '#fff', { cls: 'brush', st: 6 });
    else g += pFill('M-230 -40 L-232 -96 Q-224 -116 -170 -118 L-110 -186 Q-90 -200 20 -200 Q100 -200 130 -170 L180 -118 Q236 -110 236 -70 L236 -40 Z', c, 6) + pFill('M-96 -176 L-30 -176 L-30 -122 L-148 -122 Z', '#9fd6f5', 4) + pFill('M-10 -176 L94 -176 L140 -122 L-10 -122 Z', '#9fd6f5', 4) + sR(200, -104, 30, 16, '#F7D88A', { r: 4, sw: 3 });
    g += wheel(-140, -42, 44, t, sp) + wheel(150, -42, 44, t, sp); return g; },
  tree(l, t) { const c = l.color || '#3a8a52', sw = 3 * Math.sin(t * 1.5); return sR(-26, -260, 52, 260, '#7a5236', { r: 8, sw: 6 }) + [[0, -400, 150], [-110, -320, 110], [110, -320, 110], [-60, -470, 100], [70, -470, 100]].map(([x, y, r]) => sC(x + sw, y, r, c)).join('') + sC(sw - 30, -420, 50, shd(c, -.12), { sw: 0 }); },
  pine(l, t) { const c = l.color || '#2a6a46'; return sR(-18, -90, 36, 90, '#6a4628', { sw: 5 }) + [0, 1, 2, 3].map(i => pFill(`M${-170 + i * 30} ${-80 - i * 110} L0 ${-260 - i * 110} L${170 - i * 30} ${-80 - i * 110} Z`, c, 6)).join(''); },
  palm(l, t) { const sw = 6 * Math.sin(t * 1.4); let g = wPath(`M0 0 Q30 -200 ${-20 + sw} -420`, 34, '#9a7a4a', 6); [-150, -100, -40, 30, 90, 140].forEach(a => g += pFill(`M${-20 + sw} -420 q${a} -60 ${a * 1.6} ${40 + Math.abs(a) * .3} q${-a * .8} -20 ${-a * 1.6} ${-40 - Math.abs(a) * .3} Z`, l.color || '#3a9a52', 5)); return g + sC(-10 + sw, -404, 18, '#6a4a2a', { sw: 4 }); },
  bush(l) { const c = l.color || '#3a8a52'; return [[-80, -60, 70], [0, -90, 90], [80, -60, 70]].map(([x, y, r]) => sC(x, y, r, c)).join('') + (l.berries ? [[-40, -100], [30, -130], [90, -70]].map(([x, y]) => sC(x, y, 12, '#d9322e', { sw: 3 })).join('') : ''); },
  flower(l, t) { const c = l.color || '#e85a8a', sw = 4 * Math.sin(t * 2), h = l.h || 220; let g = wPath(`M0 0 Q${10 + sw} ${-h * .5} ${sw} ${-h}`, 10, '#3a8a52', 5) + pFill(`M0 ${-h * .4} q50 -30 70 -10 q-30 30 -70 10 Z`, '#4aa062', 5);
    for (let i = 0; i < 6; i++) { const a = i * 60; g += `<ellipse cx="${sw}" cy="${-h - 36}" rx="22" ry="36" fill="${c}" stroke="${INK}" stroke-width="5" transform="rotate(${a} ${sw} ${-h})"/>`; } return g + sC(sw, -h, 22, '#f2c230'); },
  plant(l, t) { const g0 = l.grow == null ? 1 : l.grow, gr = l.growAt != null ? Math.min(1, Math.max(0, (t - l.growAt) / (l.growDur || 2))) * g0 : g0, h = 40 + 260 * gr; let g = sR(-70, -70, 140, 80, '#b8643a', { r: 8, sw: 6 }) + sR(-80, -80, 160, 26, '#a8542a', { r: 6, sw: 6 });
    g += wPath(`M0 -76 L0 ${-76 - h}`, 10, '#3a8a52', 5); for (let i = 1; i <= Math.floor(gr * 4); i++) { const y = -76 - h * i / 5, s = i % 2 ? 1 : -1; g += pFill(`M0 ${y} q${s * 60} -40 ${s * 90} -10 q${-s * 40} 30 ${-s * 90} 10 Z`, '#4aa062', 5); }
    if (gr >= 1 && l.bloom) g += sC(0, -76 - h, 28, l.bloom, { sw: 5 }) + sC(0, -76 - h, 11, '#f2c230', { sw: 3 }); return g; },
  rock(l) { return pFill('M-120 0 L-110 -70 L-50 -120 L40 -110 L110 -60 L120 0 Z', l.color || '#8a8a92', 6) + pFill('M-50 -120 L-20 -60 L40 -110 Z', '#a0a0a8', 0); },
  ball(l, t) { const ty = l.type || 'soccer', r = l.r || 60, a = (l.spin || 0) * t * 360; let g = `<g transform="translate(0 ${-r}) rotate(${a})">`;
    if (ty === 'basket') g += sC(0, 0, r, '#e8742a') + sL(-r, 0, r, 0, 4) + sL(0, -r, 0, r, 4) + `<path d="M${-r * .7} ${-r * .7} Q0 0 ${-r * .7} ${r * .7} M${r * .7} ${-r * .7} Q0 0 ${r * .7} ${r * .7}" fill="none" stroke="${INK}" stroke-width="4"/>`;
    else if (ty === 'football') g += `<ellipse rx="${r * 1.3}" ry="${r * .8}" fill="#8a4a24" stroke="${INK}" stroke-width="5"/>` + sL(-r * .4, 0, r * .4, 0, 5, '#fff') + [-.2, 0, .2].map(k => sL(r * k, -10, r * k, 10, 4, '#fff')).join('');
    else if (ty === 'tennis') g += sC(0, 0, r, '#d8f03a') + `<path d="M${-r} ${-r * .3} Q0 ${r * .4} ${r} ${-r * .3}" fill="none" stroke="#fff" stroke-width="5"/>`;
    else g += sC(0, 0, r, '#fff') + `<path d="M0 ${-r * .35} l${r * .33} ${r * .24} l${-r * .13} ${r * .38} l${-r * .4} 0 l${-r * .13} ${-r * .38} z" fill="${INK}"/>` + [[0, -r * .88], [r * .82, -r * .2], [r * .5, r * .72], [-r * .5, r * .72], [-r * .82, -r * .2]].map(([x, y]) => sC(x, y, r * .2, INK, { sw: 0 })).join('');
    return g + '</g>'; },
  trophy(l) { const c = l.color || '#e8b923'; return sR(-70, -40, 140, 40, '#6a4a30', { r: 4, sw: 5 }) + sR(-16, -110, 32, 72, c, { sw: 5 }) + pFill('M-90 -260 L90 -260 Q86 -130 0 -110 Q-86 -130 -90 -260 Z', c, 6) + `<path d="M-88 -236 q-60 0 -40 50 q14 30 50 30 M88 -236 q60 0 40 50 q-14 30 -50 30" fill="none" stroke="${INK}" stroke-width="10"/>` + sT(0, -170, l.text || '1', 60, '#fff', { cls: 'brush', st: 6 }); },
  egg(l, t) { const cr = l.crack ? Math.min(1, Math.max(0, (t - (l.crackAt || 0)) / .6)) : 0; return `<ellipse cx="0" cy="-90" rx="68" ry="90" fill="${l.color || '#f4efe2'}" stroke="${INK}" stroke-width="6"/>` + (l.spots ? [[-20, -130, 12], [24, -70, 9], [-30, -50, 8]].map(([x, y, r]) => sC(x, y, r, l.spots, { sw: 0 })).join('') : '') + (cr > 0 ? `<path d="M-60 -100 l25 -15 l15 20 l20 -22 l18 18 l22 -12" fill="none" stroke="${INK}" stroke-width="5" stroke-dasharray="${200 * cr} 400"/>` : ''); },
  bone(l) { return `<g transform="rotate(${l.rot2 || -10}) translate(0 -40)">` + sR(-110, -16, 220, 32, l.color || '#efe6cc', { r: 16, sw: 5 }) + [[-110, -16], [-110, 16], [110, -16], [110, 16]].map(([x, y]) => sC(x, y, 24, l.color || '#efe6cc', { sw: 5 })).join('') + `</g>`; },
  fossil(l) { let g = `<ellipse cx="0" cy="-90" rx="200" ry="90" fill="#c9a878" stroke="${INK}" stroke-width="6"/>`; for (let i = 0; i < 8; i++) g += `<path d="M${-140 + i * 30} -110 q14 -30 0 -50" fill="none" stroke="#efe6cc" stroke-width="10" stroke-linecap="round"/>`; return g + `<path d="M-160 -90 Q0 -150 160 -80" fill="none" stroke="#efe6cc" stroke-width="12" stroke-linecap="round"/>` + sC(170, -84, 26, '#efe6cc', { sw: 4 }); },
  cloud(l, t) { const dx = 10 * Math.sin(t * .5); return [[-90, -60, 60], [0, -90, 80], [90, -60, 60], [0, -40, 70]].map(([x, y, r]) => sC(x + dx, y, r, l.color || '#ffffff', { sw: 5 })).join('') + `<rect x="${-150 + dx}" y="-40" width="300" height="40" fill="${l.color || '#fff'}"/>` + sL(-150 + dx, 0, 150 + dx, 0, 5); },
  sun(l, t) { const a = t * 20; let g = `<g transform="translate(0 -150) rotate(${a})">`; for (let i = 0; i < 12; i++) g += `<rect x="-8" y="-150" width="16" height="44" rx="6" fill="#f2c230" stroke="${INK}" stroke-width="4" transform="rotate(${i * 30})"/>`; return g + `</g>` + sC(0, -150, 90, '#f7d84a', { sw: 6 }); },
  planet(l, t) { const r = l.r || 120, c = l.color || '#d9823a'; return `<g transform="translate(0 ${-r})">${sC(0, 0, r, c, { sw: 6 })}<path d="M${-r} ${-r * .2} Q0 ${r * .1} ${r} ${-r * .3}" fill="none" stroke="${shd(c, .2)}" stroke-width="${r * .14}"/>${l.ring ? `<ellipse rx="${r * 1.7}" ry="${r * .35}" fill="none" stroke="${INK}" stroke-width="${r * .16}" transform="rotate(-14)"/><ellipse rx="${r * 1.7}" ry="${r * .35}" fill="none" stroke="#e8d6a0" stroke-width="${r * .1}" transform="rotate(-14)"/>` : ''}</g>`; },
  rocket(l, t) { const f = 1 + .2 * Math.sin(t * 30); return `<g transform="translate(0 -40)">` + pFill(`M-30 0 L0 ${60 * f} L30 0 Z`, '#f29a30', 4) + pFill('M-50 -20 L-80 30 L-40 10 Z', '#d9322e', 5) + pFill('M50 -20 L80 30 L40 10 Z', '#d9322e', 5) + pFill('M-50 10 L-50 -230 Q0 -330 50 -230 L50 10 Z', '#eef0f4', 6) + sC(0, -170, 26, '#9fd6f5', { sw: 5 }) + '</g>'; },
  globe(l, t) { const r = l.r || 140; return `<g transform="translate(0 ${-r - 40})">` + sC(0, 0, r, '#3a7ab8', { sw: 6 }) + `<clipPath id="glb"><circle r="${r}"/></clipPath><g clip-path="url(#glb)"><g transform="translate(${((t * 30) % (r * 2)) - r} 0)">` + [-r * 2, 0, r * 2].map(o => pFill(`M${o - 60} -70 Q${o} -110 ${o + 50} -60 Q${o + 70} 10 ${o + 10} 40 Q${o - 50} 60 ${o - 70} 0 Z`, '#5aa05a', 4)).join('') + `</g></g>` + sR(-10, r, 20, 40, '#6a4a30', { sw: 4 }) + '</g>' + sR(-80, -6, 160, 20, '#6a4a30', { r: 6, sw: 5 }); },
  microscope(l) { return sR(-90, -30, 180, 30, '#3a3f4a', { r: 6, sw: 5 }) + sR(-20, -210, 40, 180, '#6c7482', { sw: 5 }) + `<g transform="rotate(-24 0 -200)">` + sR(-22, -330, 44, 150, '#eef0f4', { r: 8, sw: 5 }) + sR(-30, -350, 60, 26, '#3a3f4a', { r: 4, sw: 4 }) + '</g>' + sR(-70, -110, 140, 16, '#3a3f4a', { sw: 4 }); },
  flask(l, t) { const c = l.color || '#5ad06a'; let g = pFill('M-24 -260 L24 -260 L24 -170 L90 -20 Q96 0 70 0 L-70 0 Q-96 0 -90 -20 L-24 -170 Z', '#e8f4f8', 6) + pFill('M-62 -70 L62 -70 L84 -20 Q88 -6 70 -6 L-70 -6 Q-88 -6 -84 -20 Z', c, 0); for (let i = 0; i < 3; i++) { const k = ((t * .8 + i / 3) % 1); g += sC(-20 + i * 20, -50 - k * 200, 6 + i * 2, c, { sw: 3 }); } return g; },
  sign(l) { return sR(-10, -220, 20, 220, '#7a5236', { sw: 5 }) + sR(-150, -300, 300, 110, l.color || '#e8d6a0', { r: 8, sw: 6 }) + sT(0, -230, l.text || 'SIGN', 52, INK, { cls: 'brush' }); },
  house(l) { const c = l.color || '#d8a46a'; return sR(-200, -260, 400, 260, c, { sw: 6 }) + pFill('M-230 -250 L0 -420 L230 -250 Z', l.roof || '#b3283a', 6) + sR(-50, -150, 100, 150, '#7a5236', { sw: 5 }) + sR(-170, -210, 80, 70, '#9fd6f5', { sw: 5 }) + sR(90, -210, 80, 70, '#9fd6f5', { sw: 5 }); },
  fish(l, t) { const c = l.color || '#f29a30', w = 8 * Math.sin(t * 6); return `<g transform="translate(0 -60)">` + pFill(`M-60 0 L${-110} ${-40 + w} L${-110} ${40 + w} Z`, shd(c, .1), 5) + `<ellipse rx="80" ry="46" fill="${c}" stroke="${INK}" stroke-width="5"/>` + crEye(40, -10, 11, 'open', 0, 4, 0) + `<path d="M-10 -40 q20 30 0 80" fill="none" stroke="${INK}" stroke-width="4" opacity=".5"/></g>`; }
};
function propSVG(l, t) { const f = PROPS[l.prop]; return f ? f(l, t || 0) : `<rect x="-60" y="-120" width="120" height="120" fill="#f0f" stroke="${INK}" stroke-width="5"/><text x="0" y="-50" font-size="22" text-anchor="middle" fill="#fff">${l.prop || '?'}</text>`; }

/* ---------------- world sets: nature, sport, science, space (AnyVideo) ---------------- */
function hills(base, amp, col, seed, sw) { const r = sRng(seed); let d = `M-20 ${base}`; for (let x = -20; x <= 1960; x += 160) d += ` Q${x + 80} ${base - amp * (.4 + r() * .8)} ${x + 160} ${base - amp * r() * .3}`; return sP(d + ` L1960 1080 L-20 1080 Z`, col, { sw: sw == null ? 5 : sw }); }
function grassTufts(y0, y1, n, col, seed) { const r = sRng(seed); let s = ''; for (let i = 0; i < n; i++) { const x = r() * 1920, y = y0 + r() * (y1 - y0); s += `<path d="M${x.toFixed(0)} ${y.toFixed(0)} l-8 -22 M${x.toFixed(0)} ${y.toFixed(0)} l2 -28 M${x.toFixed(0)} ${y.toFixed(0)} l10 -20" stroke="${col}" stroke-width="4" stroke-linecap="round"/>`; } return s; }
function skyT(o, def) { const t = o.time || def || 'day'; if (!o.time) o.time = t; return { t, svg: sky(t === 'red' ? 'red' : t, 1080) + (t === 'night' ? stars(51, 90, 600) + moon(1560, 160, 50) : t === 'day' ? PROPS.cloud({}, 0).replace(/^/, '<g transform="translate(400 260) scale(.8)">') + '</g>' + '<g transform="translate(1400 200) scale(.6)">' + PROPS.cloud({}, 0) + '</g>' : '') }; }
function dayLights(t, extra) { return t === 'day' ? [] : [{ x: 960, y: 700, r: 1200, a: .45 }].concat(extra || []); }
Object.assign(SETS, {
  plain(o) { if (!o.time) o.time = 'day'; const c = o.color || '#2b3a67'; return { svg: sR(0, 0, 1920, 1080, c, { sw: 0 }) + `<circle cx="960" cy="540" r="900" fill="#fff" opacity=".06"/>` + (o.floor === false ? '' : sR(0, 900, 1920, 180, shd(c, .25), { sw: 0 }) + sL(0, 900, 1920, 900, 6)), floorY: 1000, lights: [{ x: 960, y: 540, r: 1100, a: .7 }], glows: [], cones: [] }; },
  forest(o) { const S = skyT(o); let s = S.svg + hills(640, 120, '#3f6a4a', 3, 0) + hills(720, 90, '#4f7f52', 5);
    const r = sRng(8); for (let i = 0; i < 9; i++) { const x = 60 + i * 230 + r() * 60; s += `<g transform="translate(${x.toFixed(0)} ${760 + (i % 2) * 20}) scale(${(.7 + r() * .5).toFixed(2)})">${i % 3 ? PROPS.pine({ color: '#2f5f3e' }, 0) : PROPS.tree({ color: '#3a7a48' }, 0)}</g>`; }
    s += sR(0, 820, 1920, 260, '#5a8a4a', { sw: 0 }) + sL(0, 820, 1920, 820, 5) + grassTufts(840, 1060, 60, '#3f6a3a', 9) + `<g transform="translate(260 1000) scale(.7)">${PROPS.bush({ berries: true }, 0)}</g><g transform="translate(1680 990) scale(.8)">${PROPS.rock({}, 0)}</g>`;
    return { svg: s, floorY: 1000, lights: dayLights(S.t, [{ x: 1560, y: 300, r: 500, a: .5 }]), glows: S.t === 'night' ? [{ x: 1560, y: 160, r: 260, c: '#CFD8FF', a: .25 }] : [], cones: S.t === 'day' ? [] : [] }; },
  savanna(o) { const S = skyT(o, 'dusk'); let s = S.svg + (S.t !== 'night' ? `<circle cx="1300" cy="560" r="150" fill="#f7c84a" opacity=".85"/>` : '') + hills(700, 50, '#b8864a', 13, 0);
    [[300, 720, .9], [1600, 700, .7]].forEach(([x, y, k]) => s += `<g transform="translate(${x} ${y}) scale(${k})">` + sR(-18, -300, 36, 300, '#6a4a2a', { sw: 5 }) + sP('M-260 -300 Q0 -420 260 -300 Q120 -260 0 -270 Q-120 -260 -260 -300 Z', '#5a7a3a', { sw: 5 }) + '</g>');
    s += sR(0, 760, 1920, 320, '#d8a85a', { sw: 0 }) + sL(0, 760, 1920, 760, 5) + grassTufts(780, 1060, 90, '#a87a3a', 21);
    return { svg: s, floorY: 1000, lights: dayLights(S.t), glows: S.t === 'dusk' ? [{ x: 1300, y: 560, r: 500, c: '#FFC060', a: .3 }] : [], cones: [] }; },
  jungle(o) { const S = skyT(o); let s = S.svg + sR(0, 0, 1920, 1080, '#1f4a32', { sw: 0, op: .7 });
    const r = sRng(31); for (let i = 0; i < 7; i++) s += `<g transform="translate(${(i * 300 + r() * 80).toFixed(0)} 860) scale(${(1 + r() * .4).toFixed(2)})">${PROPS.palm({ color: i % 2 ? '#2f8a4a' : '#3aa05a' }, 0)}</g>`;
    for (let i = 0; i < 10; i++) s += `<path d="M${120 + i * 190} -10 q${30 - i * 4} 220 ${-10 + i} ${300 + (i % 3) * 120}" fill="none" stroke="#2a6a3a" stroke-width="10" stroke-linecap="round"/>`;
    s += sR(0, 860, 1920, 220, '#3a6a3a', { sw: 0 }) + sL(0, 860, 1920, 860, 5); for (let i = 0; i < 9; i++) s += `<g transform="translate(${i * 230 + 60} ${980 + (i % 2) * 40}) scale(.8)">${PROPS.bush({ color: i % 2 ? '#2f7a42' : '#4a9a52', berries: i % 4 === 0 }, 0)}</g>`;
    return { svg: s, floorY: 1010, lights: dayLights(S.t, [{ x: 960, y: 500, r: 600, a: .4 }]), glows: [{ x: 1200, y: 200, r: 500, c: '#FFE9A8', a: .15 }], cones: [{ x: 1200, y: 0, w0: 160, w1: 500, len: 1000, lean: -200, a: .1, c: '#FFE9A8' }] }; },
  desert(o) { const S = skyT(o); let s = S.svg + (S.t === 'day' ? `<g transform="translate(1500 420) scale(.8)">${PROPS.sun({}, 0)}</g>` : '') + hills(720, 140, '#d9a868', 41, 0) + hills(800, 90, '#e8b878', 43);
    [[340, 940], [1500, 900]].forEach(([x, y]) => s += `<g transform="translate(${x} ${y})">` + sR(-30, -300, 60, 300, '#4a8a4a', { r: 30, sw: 6 }) + sR(-110, -210, 50, 110, '#4a8a4a', { r: 25, sw: 6 }) + sR(60, -250, 50, 120, '#4a8a4a', { r: 25, sw: 6 }) + sR(-80, -130, 60, 30, '#4a8a4a', { sw: 6 }) + sR(28, -160, 50, 30, '#4a8a4a', { sw: 6 }) + '</g>');
    s += `<g transform="translate(980 1040) scale(.6)">${PROPS.rock({ color: '#b8865a' }, 0)}</g>`;
    return { svg: s, floorY: 1010, lights: dayLights(S.t), glows: [], cones: [] }; },
  ocean(o) { if (!o.time) o.time = 'day'; let s = `<defs><linearGradient id="ocg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a8ac0"/><stop offset="1" stop-color="#0d2a5a"/></linearGradient></defs><rect width="1920" height="1080" fill="url(#ocg)"/>`;
    for (let i = 0; i < 6; i++) s += `<path d="M${200 + i * 320} 0 L${120 + i * 320} 900 L${260 + i * 320} 900 Z" fill="#cfefff" opacity=".07"/>`;
    s += hills(940, 60, '#d8c08a', 61) + [[200, '#e85a6a'], [420, '#f29a30'], [1480, '#c86ad0'], [1700, '#e85a6a']].map(([x, c]) => `<g transform="translate(${x} 960)">` + [-40, 0, 40].map(a => `<path d="M0 0 q${a} -80 ${a * 1.4} -170" fill="none" stroke="${INK}" stroke-width="22" stroke-linecap="round"/><path d="M0 0 q${a} -80 ${a * 1.4} -170" fill="none" stroke="${c}" stroke-width="14" stroke-linecap="round"/>`).join('') + '</g>').join('');
    for (let i = 0; i < 6; i++) s += `<path d="M${700 + i * 90} 970 q-20 -120 10 -260" fill="none" stroke="#2f8a5a" stroke-width="12" stroke-linecap="round"/>`;
    const r = sRng(4); for (let i = 0; i < 18; i++) s += `<circle cx="${(r() * 1920).toFixed(0)}" cy="${(r() * 800).toFixed(0)}" r="${(4 + r() * 10).toFixed(0)}" fill="none" stroke="#cfefff" stroke-width="3" opacity=".6"/>`;
    return { svg: s, floorY: 1000, lights: [{ x: 960, y: 200, r: 1100, a: .6 }], glows: [{ x: 960, y: 0, r: 900, c: '#bfefff', a: .2 }], cones: [] }; },
  beach(o) { const S = skyT(o); let s = S.svg + (S.t === 'day' ? `<g transform="translate(1600 380) scale(.7)">${PROPS.sun({}, 0)}</g>` : '') + sR(0, 600, 1920, 240, '#2a8ac0', { sw: 0 }) + sL(0, 600, 1920, 600, 4);
    for (let i = 0; i < 14; i++) s += `<path d="M${(i * 150) % 1900} ${630 + (i % 5) * 40} q30 -12 60 0" fill="none" stroke="#fff" stroke-width="4" opacity=".6"/>`;
    s += sP('M0 820 Q480 780 960 810 T1920 800 L1920 1080 L0 1080 Z', '#f0d8a0', { sw: 6 }) + `<path d="M0 820 Q480 780 960 810 T1920 800" fill="none" stroke="#fff" stroke-width="10" opacity=".7"/>` + `<g transform="translate(260 980)">${PROPS.palm({}, 0)}</g>`;
    return { svg: s, floorY: 1010, lights: dayLights(S.t), glows: [], cones: [] }; },
  mountains(o) { const S = skyT(o); let s = S.svg;
    [[300, 260, '#6a7a9a'], [800, 160, '#5a6a8a'], [1400, 220, '#6a7a9a']].forEach(([x, y, c]) => s += sP(`M${x - 520} 800 L${x} ${y} L${x + 520} 800 Z`, c, { sw: 6 }) + sP(`M${x - 110} ${y + 130} L${x} ${y} L${x + 110} ${y + 130} L${x + 50} ${y + 100} L${x} ${y + 140} L${x - 60} ${y + 100} Z`, '#f4f6fa', { sw: 5 }));
    s += hills(820, 70, '#5a8a5a', 71) + grassTufts(860, 1060, 50, '#3f6a3a', 72) + `<g transform="translate(1650 960) scale(.7)">${PROPS.pine({}, 0)}</g><g transform="translate(1800 980) scale(.55)">${PROPS.pine({}, 0)}</g>`;
    return { svg: s, floorY: 1000, lights: dayLights(S.t), glows: [], cones: [] }; },
  farm(o) { const S = skyT(o); let s = S.svg + hills(700, 80, '#7aa85a', 81, 0);
    s += `<g transform="translate(1450 790)">` + sR(-220, -300, 440, 300, '#b3283a', { sw: 6 }) + sP('M-250 -290 L0 -460 L250 -290 Z', '#8a1f2a', { sw: 6 }) + sR(-80, -190, 160, 190, '#f4efe2', { sw: 6 }) + sL(-80, -190, 80, 0, 6) + sL(80, -190, -80, 0, 6) + sR(-50, -380, 100, 70, '#f4efe2', { sw: 5 }) + '</g>';
    s += sR(0, 790, 1920, 290, '#8ab85a', { sw: 0 }) + sL(0, 790, 1920, 790, 5);
    for (let i = 0; i < 10; i++) s += sR(60 + i * 110, 820, 14, 110, '#c9a46a', { sw: 4 }); s += sR(40, 840, 1100, 14, '#c9a46a', { sw: 4 }) + sR(40, 890, 1100, 14, '#c9a46a', { sw: 4 }) + grassTufts(940, 1060, 50, '#5a8a3a', 82);
    s += `<g transform="translate(980 690) scale(.7)">${PROPS.tree({}, 0)}</g>`;
    return { svg: s, floorY: 1010, lights: dayLights(S.t, [{ x: 1450, y: 600, r: 400, a: .5 }]), glows: [], cones: [] }; },
  prehistoric(o) { const S = skyT(o, 'dusk'); let s = S.svg + sP('M1180 760 L1420 300 L1520 300 L1760 760 Z', '#5a3a3a', { sw: 6 }) + sP('M1420 300 Q1470 340 1520 300 L1500 340 Q1470 360 1440 340 Z', '#f2602a', { sw: 4 });
    for (let i = 0; i < 4; i++) s += sC(1470 + i * 20, 230 - i * 60, 40 + i * 16, '#6a6a72', { sw: 4 });
    s += hills(780, 90, '#6a7a3a', 91, 0) + sR(0, 830, 1920, 250, '#7a8a4a', { sw: 0 }) + sL(0, 830, 1920, 830, 5);
    for (let i = 0; i < 6; i++) s += `<g transform="translate(${80 + i * 330} ${840 + (i % 2) * 30}) scale(${.8 + (i % 3) * .2})">` + [-70, -30, 10, 50].map(a => `<path d="M0 0 q${a} -120 ${a * 2} -160" fill="none" stroke="${INK}" stroke-width="16" stroke-linecap="round"/><path d="M0 0 q${a} -120 ${a * 2} -160" fill="none" stroke="#3a8a4a" stroke-width="10" stroke-linecap="round"/>`).join('') + '</g>';
    s += grassTufts(860, 1060, 40, '#4a5a2a', 92);
    return { svg: s, floorY: 1010, lights: dayLights(S.t, [{ x: 1470, y: 320, r: 300, a: .8 }]), glows: [{ x: 1470, y: 310, r: 300, c: '#ff6a2a', a: .35 }], cones: [] }; },
  space(o) { let s = sR(0, 0, 1920, 1080, '#0a0d24', { sw: 0 }) + stars(101, 220, 1080) + `<circle cx="400" cy="300" r="380" fill="#6a3aa0" opacity=".14"/><circle cx="1500" cy="700" r="420" fill="#2a6aa0" opacity=".14"/>`;
    if (o.planet !== false) s += `<g transform="translate(1500 560)">${PROPS.planet({ r: 160, color: o.planetColor || '#d9823a', ring: true }, 0)}</g>`;
    if (o.ground) s += sP('M-20 880 Q480 840 960 870 T1940 860 L1940 1080 L-20 1080 Z', '#9a9aa4', { sw: 6 }) + [[300, 950, 60], [1200, 990, 40], [1600, 930, 80]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .35}" fill="#7a7a84" stroke="${INK}" stroke-width="5"/>`).join('');
    return { svg: s, floorY: 1000, lights: [{ x: 960, y: 540, r: 1100, a: .55 }], glows: [{ x: 1500, y: 400, r: 400, c: '#ffb070', a: .15 }], cones: [] }; },
  racetrack(o) { const S = skyT(o); let s = S.svg + sR(0, 420, 1920, 260, '#5a6070', { sw: 6 });
    const r = sRng(111); for (let j = 0; j < 4; j++) for (let i = 0; i < 48; i++) s += `<circle cx="${20 + i * 40}" cy="${450 + j * 55}" r="14" fill="${['#e85a5a', '#5aa0e8', '#f2c230', '#f4efe2', '#6ad06a'][Math.floor(r() * 5)]}"/>`;
    s += sR(0, 680, 1920, 40, '#f4efe2', { sw: 5 }) + [...Array(24)].map((_, i) => `<rect x="${i * 80}" y="680" width="40" height="40" fill="#d9322e"/>`).join('');
    s += sR(0, 720, 1920, 360, '#3a3a44', { sw: 0 }) + sL(0, 720, 1920, 720, 6) + [...Array(12)].map((_, i) => `<rect x="${i * 170}" y="890" width="90" height="12" fill="#fff" opacity=".8"/>`).join('');
    if (o.finish !== false) for (let j = 0; j < 9; j++) for (let k = 0; k < 2; k++) s += `<rect x="${1500 + k * 40}" y="${720 + j * 40}" width="40" height="40" fill="${(j + k) % 2 ? '#fff' : '#111'}"/>`;
    return { svg: s, floorY: 1000, lights: dayLights(S.t, [{ x: 960, y: 900, r: 900, a: .6 }]), glows: [], cones: [] }; },
  stadium(o) { const S = skyT(o, 'night'), sport = o.sport || 'soccer'; let s = S.svg + sR(0, 260, 1920, 420, '#3a3f58', { sw: 6 });
    const r = sRng(121); for (let j = 0; j < 7; j++) for (let i = 0; i < 64; i++) s += `<circle cx="${15 + i * 30}" cy="${290 + j * 52}" r="11" fill="${['#e85a5a', '#5aa0e8', '#f2c230', '#f4efe2', o.team || '#d9322e'][Math.floor(r() * 5)]}" opacity=".9"/>`;
    [[160, 'l'], [1760, 'r']].forEach(([x]) => s += sR(x - 10, 60, 20, 220, '#3a3f4a', { sw: 4 }) + sR(x - 90, 30, 180, 60, '#6c7482', { sw: 5 }) + [0, 1, 2].map(k => sC(x - 50 + k * 50, 60, 14, '#FFF2C0', { sw: 3 })).join(''));
    const fc = sport === 'basketball' ? '#d9a868' : sport === 'track' ? '#c8503a' : '#3f9a4a'; s += sR(0, 680, 1920, 400, fc, { sw: 0 }) + sL(0, 680, 1920, 680, 6);
    if (sport === 'soccer' || sport === 'football') { for (let i = 0; i < 8; i++) s += `<rect x="${i * 240}" y="680" width="120" height="400" fill="#fff" opacity=".05"/>`; s += `<ellipse cx="960" cy="880" rx="300" ry="90" fill="none" stroke="#fff" stroke-width="6" opacity=".8"/>` + sL(960, 680, 960, 1080, 6, '#fff'); }
    if (sport === 'basketball') s += `<ellipse cx="960" cy="880" rx="200" ry="60" fill="none" stroke="#fff" stroke-width="6"/>` + sL(960, 680, 960, 1080, 6, '#fff') + sR(1760, 420, 16, 340, '#3a3f4a', { sw: 4 }) + sR(1660, 400, 160, 110, '#f4efe2', { sw: 5 }) + `<ellipse cx="1690" cy="520" rx="44" ry="10" fill="none" stroke="#e8742a" stroke-width="7"/>`;
    if (sport === 'track') for (let i = 0; i < 6; i++) s += sL(0, 720 + i * 60, 1920, 720 + i * 60, 5, '#fff');
    const nt = S.t !== 'day';
    return { svg: s, floorY: 1010, lights: nt ? [{ x: 960, y: 880, r: 1000, a: .85 }, { x: 160, y: 60, r: 300, a: .8 }, { x: 1760, y: 60, r: 300, a: .8 }] : [], glows: nt ? [{ x: 160, y: 60, r: 260, c: '#FFF2C0', a: .4 }, { x: 1760, y: 60, r: 260, c: '#FFF2C0', a: .4 }] : [], cones: nt ? [{ x: 160, y: 80, w0: 120, w1: 900, len: 900, lean: 400, a: .12, c: '#FFF2C0' }, { x: 1760, y: 80, w0: 120, w1: 900, len: 900, lean: -400, a: .12, c: '#FFF2C0' }] : [] }; },
  garage(o) { let s = sR(0, 0, 1920, 1080, '#4a505e', { sw: 0 }) + bricks(0, 0, 1920, 720, 200, 70, '#3e4350', 3);
    s += sR(120, 140, 560, 340, '#2a2e38', { sw: 6 }); for (let i = 0; i < 9; i++) s += sL(160 + i * 60, 180, 160 + i * 60, 440, 6, '#8a92a3') + sC(160 + i * 60, 220 + (i % 3) * 60, 10, '#c9ced8', { sw: 3 });
    s += sR(1300, 120, 480, 520, '#6c7482', { sw: 6 }); for (let i = 0; i < 6; i++) s += sL(1300, 200 + i * 80, 1780, 200 + i * 80, 5);
    s += sR(0, 720, 1920, 360, '#5a5f6a', { sw: 0 }) + sL(0, 720, 1920, 720, 6) + `<ellipse cx="900" cy="930" rx="200" ry="30" fill="#2a2a30" opacity=".5"/>` + sR(760, 520, 120, 200, '#d9322e', { r: 10, sw: 6 });
    [500, 1400].forEach(x => s += sL(x, 0, x, 40, 4) + sP(`M${x - 70} 70 L${x + 70} 70 L${x + 40} 40 L${x - 40} 40 Z`, '#6c7482', { sw: 5 }));
    return { svg: s, floorY: 1000, lights: [{ x: 500, y: 600, r: 600, a: .8 }, { x: 1400, y: 600, r: 600, a: .8 }], glows: [500, 1400].map(x => ({ x, y: 72, r: 200, c: '#FFF2C0', a: .35 })), cones: [500, 1400].map(x => ({ x, y: 72, w0: 120, w1: 600, len: 900, lean: 0, a: .12, c: '#FFF2C0' })) }; },
  lab(o) { if (!o.time) o.time = 'day'; let s = sR(0, 0, 1920, 1080, '#dfe8ee', { sw: 0 }) + [...Array(12)].map((_, i) => `<rect x="${i * 160}" y="0" width="80" height="700" fill="#d2dde4"/>`).join('');
    s += sR(140, 140, 520, 300, '#f4f8fa', { sw: 6 }) + `<path d="M180 400 L260 300 L340 340 L420 220 L500 260 L600 180" fill="none" stroke="#2a8ac0" stroke-width="8"/>` + sR(1240, 120, 560, 320, '#1f2a3a', { r: 10, sw: 6 }) + `<circle cx="1520" cy="280" r="90" fill="none" stroke="#5ad06a" stroke-width="6"/><circle cx="1520" cy="280" r="10" fill="#5ad06a"/>`;
    s += sR(0, 700, 1920, 380, '#b8c4cc', { sw: 0 }) + sL(0, 700, 1920, 700, 6) + sR(80, 620, 1760, 50, '#eef2f4', { sw: 6 }) + sR(100, 670, 1720, 120, '#9aa6ae', { sw: 6 });
    s += `<g transform="translate(400 620) scale(.7)">${PROPS.microscope({}, 0)}</g><g transform="translate(1500 620) scale(.6)">${PROPS.flask({}, 0)}</g><g transform="translate(1660 620) scale(.45)">${PROPS.flask({ color: '#e85a8a' }, 0)}</g>`;
    return { svg: s, floorY: 1030, lights: [], glows: [{ x: 1520, y: 280, r: 220, c: '#5ad06a', a: .2 }], cones: [] }; },
  classroom(o) { if (!o.time) o.time = 'day'; let s = sR(0, 0, 1920, 1080, '#e8d6b0', { sw: 0 }) + sR(0, 640, 1920, 50, '#c8a878', { sw: 0 });
    s += sR(420, 120, 1080, 460, '#2f5a46', { sw: 10 }) + sR(410, 570, 1100, 24, '#8a5a34', { sw: 5 }) + sT(960, 300, o.board || 'TODAY', 80, '#f4efe2', { cls: 'brush' }) + `<path d="M560 420 L760 420 M560 470 L900 470" stroke="#f4efe2" stroke-width="6" opacity=".7"/>`;
    s += `<g transform="translate(220 600) scale(.8)">${PROPS.globe({}, 0)}</g>` + sR(1620, 160, 180, 180, '#f4efe2', { sw: 6 }) + sL(1710, 250, 1710, 190, 6) + sL(1710, 250, 1750, 270, 6);
    s += sR(0, 690, 1920, 390, '#a8784a', { sw: 0 }) + sL(0, 690, 1920, 690, 6); for (let i = 0; i < 12; i++) s += sL(i * 170, 690, i * 170 - 120 + i * 20, 1080, 3, '#8a6038');
    return { svg: s, floorY: 1010, lights: [], glows: [], cones: [] }; }
});
