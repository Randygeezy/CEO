// Splits the prompt text into appendix blocks: one per paragraph, long paragraphs cut at line breaks,
// and a heading or a line ending in ":" kept with the block after it, so the appendix flows page to page.
module.exports = function promptBlocks(text, max = 900) {
  const pieces = [];
  for (const para of text.split(/\n\n+/)) {
    let buf = '';
    for (const line of para.split('\n')) {
      if (buf && (buf + line).length > max) { pieces.push(buf); buf = ''; }
      buf += (buf ? '\n' : '') + line;
    }
    if (buf) pieces.push(buf);
  }
  return pieces.reduce((acc, p) => {
    const last = acc[acc.length - 1];
    if (last && (/:\s*$/.test(last) || /^#[^\n]*$/.test(last))) acc[acc.length - 1] = last + '\n\n' + p; else acc.push(p);
    return acc;
  }, []);
};
