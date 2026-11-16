// Fast drop-in for marked 18.1.3 (MIT). Vendor marked unmodified (vendor/marked/*).
// Optimisasi: satu objek opsi dipakai ulang (tanpa merge opsi tiap panggilan) dan
// pipeline Lexer→Parser dipanggil langsung, melewati marked.parse().
import * as M from './vendor/marked/marked.esm.js';

const OPTIONS = { ...M.getDefaults(), gfm: true, async: false };

/** HTML untuk `markdown`, identik dengan marked.parse(markdown). */
export function parse(markdown) {
  return M.parser(M.lexer(markdown, OPTIONS), OPTIONS);
}
