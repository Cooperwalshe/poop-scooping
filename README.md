# Coronado Poop Scooping

Marketing site for Coronado Poop Scooping, a dog waste removal service in Coronado, CA.
Built with Vite + React + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Quote form (Formspree)

The quote request form posts to Formspree, configured in
`src/components/QuoteForm.jsx`:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgnlkjj'
```

To point it at a different Formspree form, create one at
[formspree.io](https://formspree.io) and swap in the new endpoint.

## Deployment (Hostinger via GitHub Actions)

Hostinger's Git integration deploys a branch's files as-is — it does not run
a build step. `.github/workflows/deploy.yml` handles the build for you:

1. On every push to `main`, GitHub Actions installs dependencies, runs
   `npm run build`, and pushes the contents of `dist/` to the `deploy`
   branch (creating it on first run).
2. In Hostinger, point the Git integration at this repository's `deploy`
   branch instead of `main`.

No manual build step is needed on your end — just push to `main`.
