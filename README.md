# Tipi NaturSein

Jekyll site for Tipi NaturSein. Uses Minima theme, Decap CMS, and GitHub Pages.

## Prerequisites

- Ruby 3.x
- Bundler (`gem install bundler`)
- Node.js (for carousel build)

## Local Development

```bash
# Install dependencies
bundle install
npm install

# Serve locally (builds carousel assets and starts Jekyll)
npm run serve

# Or manually: build carousel first, then Jekyll
npm run build:carousel
bundle exec jekyll serve --drafts
bundle exec jekyll serve --port 4001
```

**Note:** The home carousel (Swiper) is bundled from `scripts/home-carousel.js`. Run `npm run build:carousel` before `bundle exec jekyll serve` if you use Jekyll directly, otherwise the carousel will not work.

## Commands

| Command | Description |
|---------|-------------|
| `npm run serve` | Build carousel assets and serve Jekyll (recommended) |
| `npm run build:carousel` | Bundle Swiper + init to `assets/home-carousel.js` |
| `bundle exec jekyll serve` | Serve Jekyll (run `build:carousel` first for carousel) |
| `bundle exec jekyll build` | Build site to `_site/` |
| `bundle exec jekyll clean` | Remove `_site/` and cache |
| `bundle exec jekyll doctor` | Check for configuration issues |

## Deploy Setup

### Branches

- **`main`** – Development. Decap CMS commits content edits here.
- **`deploy`** – Production. Merge from `main` to trigger deployment.

### GitHub Pages

- Deploys via GitHub Actions on push to `deploy`
- Workflow: `.github/workflows/jekyll.yml`

### Netlify

- Provides Git Gateway for Decap CMS (Identity + GitHub OAuth)
- **Production branch** must be set to `deploy` in Netlify:
  - Site settings → Build & deploy → Continuous deployment
  - Production branch: `deploy`

### Deploy Workflow

```bash
# 1. Merge main into deploy (e.g. via PR or locally)
git checkout deploy
git merge main
git push origin deploy

# 2. GitHub Actions builds and deploys to GitHub Pages
```

## Admin (Decap CMS)

- CMS URL: `https://<your-site>/tipi/admin/`
- Content edits are committed to `main`
- Auth: Netlify Identity + Git Gateway (see Decap CMS docs)
