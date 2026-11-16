# makefun-markdown-render-speed-02

Entry untuk kompetisi make.fun "Make Markdown rendering faster".

`parse(markdown)` mengembalikan HTML yang identik byte-per-byte dengan **marked 18.1.3**
(default: GFM on, async off). Fork ini memakai marked yang di-vendor (MIT, lihat
`vendor/marked/LICENSE` dan `NOTICE`) dengan optimisasi:

- opsi default dihitung sekali dan dibekukan (tidak ada merge opsi per panggilan),
- pipeline `Lexer → Parser` dipanggil langsung, melewati pembungkus `marked.parse()`,
- tidak ada cache antar-kasus dan tidak ada tabel output: setiap HTML dihitung dari markdown-nya.

Kredit penuh untuk marked: https://github.com/markedjs/marked (MIT).
