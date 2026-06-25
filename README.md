# Duiker Properties CMA Tool

A two-part Comparative Market Analysis tool built for Kyle Duiker, Broker Delegate — Royal LePage Solutions.

## Structure

```
cma-tool/
├── builder/        # Back-end: enter comps, build the evaluation
│   └── index.html
├── present/        # Front-end: client-facing presenter (iPad optimized)
│   └── index.html
└── shared/
    ├── css/
    │   └── tokens.css   # Brand tokens (navy, gold, red, typography)
    └── js/
        └── storage.js   # LocalStorage helpers for saving evaluations
```

## Usage

- **Builder** — Open `builder/index.html` locally or on GitHub Pages. Enter subject property details and sold comps. Adjust for condition. Export to present mode.
- **Presenter** — Open `present/index.html` on your iPad with a client. Clean, print-ready view with no editing controls visible.

## Brand

- Colors: Navy `#1B2B4B`, Gold `#C9A84C`, Red `#C8102E`
- Fonts: Cormorant Garamond (headings), DM Sans (body)
- Hosting: GitHub Pages
