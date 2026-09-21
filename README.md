# Lumière Jewels — React App + CI/CD

A handcrafted jewellery e-commerce site built with **React + Vite**, deployed to **Netlify** via **GitHub Actions**.

---

## Project Structure

```
testing_CI_CD/
├── .github/
│   └── workflows/
│       ├── ci.yml        ← CI: lint + build on every push / PR
│       └── deploy.yml    ← CD: deploy to Netlify when CI passes on main
├── jewellery-website/    ← React app (Vite)
│   ├── src/
│   ├── netlify.toml      ← Netlify build config + SPA redirect
│   └── package.json
└── README.md
```

---

## CI/CD Pipeline

```
Push to main
     │
     ▼
┌─────────────────────────────┐
│  CI Workflow (ci.yml)       │
│  1. npm ci                  │
│  2. npm run lint            │
│  3. npm test                │
│  4. npm run build           │
│  5. Upload dist/ artefact   │
└────────────┬────────────────┘
             │ success only
             ▼
┌─────────────────────────────┐
│  CD Workflow (deploy.yml)   │
│  1. Download dist/ artefact │
│  2. netlify deploy --prod   │
└─────────────────────────────┘
             │
             ▼
      🌐 Live on Netlify
```

- **CI** runs on every push and pull request to `main`/`master`.
- **CD** only runs after CI passes — it never deploys broken code.

---

## One-Time Setup

### 1. Push this repo to GitHub

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git add .
git commit -m "Initial commit — jewellery website + CI/CD"
git push -u origin main
```

### 2. Create a Netlify site

1. Go to [netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**  
   *(Or create a blank site if you prefer to deploy only via CI.)*
2. On **Site configuration → General**, copy the **Site ID** — you'll need it next.

### 3. Get a Netlify personal access token

1. In Netlify go to **User settings → OAuth → Personal access tokens**
2. Click **New access token**, name it `github-actions`, copy the value.

### 4. Add secrets to GitHub

Go to your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret** and add both:

| Secret name            | Value                              |
|------------------------|------------------------------------|
| `NETLIFY_AUTH_TOKEN`   | The personal access token you just created |
| `NETLIFY_SITE_ID`      | The Site ID from Netlify           |

That's it. Every push to `main` will now:
1. Lint and build the app in GitHub Actions
2. Deploy the production build to Netlify automatically

---

## Local Development

```bash
cd jewellery-website
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run lint       # ESLint check
npm run preview    # preview the production build locally
```

---

## Adding Real Tests (Vitest)

The CI pipeline already runs `npm test`. To hook up real tests:

```bash
cd jewellery-website
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Add to `vite.config.js`:
```js
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/test/setup.js',
}
```

Then replace the placeholder in `package.json`:
```json
"test": "vitest run"
```
