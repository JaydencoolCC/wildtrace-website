# WildTrace research project website

Static research website for **WildTrace: Evaluating Training Data Detection in Realistic Large-Scale LLM Post-Training**.

Authors: Hengxiang Zhang, Junxian Liu, Hongxin Wei.

## Preview locally

From this repository's root, run:

```sh
python3 -m http.server 8000 --directory dist
```

Then open http://localhost:8000.

## Files

- `dist/index.html`: page content and section navigation
- `dist/styles.css`: responsive layout and styling
- `dist/script.js`: figure enlargement, citation copying, and placeholder-link messages
- `dist/assets/scaling.png`: high-resolution chart rendered from the paper
- `dist/assets/wildtrace-paper.pdf`: provided manuscript

No build step or package installation is required. Any static host can serve `dist/`.

The main Model, Dataset, and Code links remain placeholders. More Research contains only Paper links.
