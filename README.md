# Oleksandr Nesterenko — CV

Frontend Developer CV site, restyled to the dark **Desktop-2** Figma and rebuilt as a Vite + TypeScript static project.

Live: [stan0men.github.io/CV_Oleksandr_Nesterenko](https://stan0men.github.io/CV_Oleksandr_Nesterenko/)

## Stack

- Vite 7 + TypeScript (strict)
- Semantic HTML, vanilla TS for menu / JSON-LD / back-to-top
- Static `npm run build` output in `dist/`

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
npm run preview  # serve dist/
```

GitHub Pages deploys from `dist/` via `.github/workflows/pages.yml` (set the repo Pages source to **GitHub Actions**).
