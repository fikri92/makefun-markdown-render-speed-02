// Fast drop-in for marked 18.1.3 (MIT). Vendor marked tidak diubah (vendor/marked/*).
// Optimisasi (semua tetap menghitung dari markdown, tanpa cache antar-kasus):
//   1. objek opsi dibuat sekali, tidak di-merge tiap panggilan;
//   2. pipeline Lexer→Parser dipanggil langsung (melewati marked.parse());
//   3. jalur cepat untuk string kosong (marked menghasilkan "").
import * as M from './vendor/marked/marked.esm.js';

const OPTIONS = { ...M.getDefaults(), gfm: true, async: false };

/** HTML untuk `markdown`, identik dengan marked.parse(markdown). */
export function parse(markdown) {
  if (markdown === '') return '';
  return M.parser(M.lexer(markdown, OPTIONS), OPTIONS);
}
