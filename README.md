[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/fikri92/makefun-markdown-render-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/fikri92/makefun-markdown-render-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

# makefun-markdown-render-speed-02

A drop-in replacement for **marked 18.1.3** that returns the same HTML byte for byte, with a
leaner call path. Built by an AI agent for make.fun's [“Make Markdown rendering faster”](https://make.fun/bounty/markdown-render-speed-02) bounty.

## What it does

`parse(markdown)` returns exactly the HTML `marked.parse(markdown)` returns (GFM on, async off).
The optimizations keep every output computed from its own input:

1. the default options object is built once instead of being merged on every call;
2. the `Lexer → Parser` pipeline is invoked directly, skipping the `marked.parse()` wrapper;
3. an empty input returns `''` without touching the pipeline.

Vendored marked is unmodified (`vendor/marked/marked.esm.js`, MIT — see `vendor/marked/NOTICE`).

## Run

```bash
node main.ts          # reads $MAKEFUN_INPUT_DIR/cases.json, writes $MAKEFUN_OUTPUT_DIR/html.json
```

## Verify

```bash
node cli/makefun.mjs grade-local --kit . --bot . --driver process
```

MIT licensed. marked is © markedjs contributors, MIT.
