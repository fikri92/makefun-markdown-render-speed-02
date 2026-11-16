// Fast drop-in for marked 18.1.3 (MIT). Fork: vendor/marked/marked.esm.js unmodified.
// Optimisasi: opsi dihitung sekali (tanpa merge per panggilan) dan pipeline
// Lexer→Parser dipanggil langsung, menghindari overhead marked.parse().
// Output harus identik byte-per-byte dengan marked dengan opsi default (GFM on, async off).
import * as M from './vendor/marked/marked.esm.js';

const OPTIONS = Object.freeze({ ...M.getDefaults(), gfm: true, async: false });

/** HTML untuk `markdown`, sama persis dengan marked.parse(markdown). */
export function parse(markdown) {
  return M.parser(M.lexer(markdown, OPTIONS), OPTIONS);
}
