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

- **`main`** – Production. Decap CMS commits content edits here, and every push deploys.
- **`deploy`** – Obsolete. Left over from an earlier setup and far behind `main`; not used for deployment. Do not merge into it.

### GitHub Pages

- Workflow: `.github/workflows/jekyll.yml`
- Deploys on every push to `main`, or manually via *workflow_dispatch*
- The copy of the workflow on the stale `deploy` branch still triggers on `deploy` – ignore it

### Netlify

- Provides Git Gateway for Decap CMS only (Identity + GitHub OAuth). The public site is served by GitHub Pages.

### Deploy Workflow

```bash
# Push to main – that is the whole deploy
git push origin main
```

Rebuild without a content change (e.g. after an event date has passed):

- GitHub → Actions → "Deploy Jekyll site to Pages" → *Run workflow* (branch `main`)
- or: `git commit --allow-empty -m "rebuild" && git push`

### Date-dependent content

The home page splits events into "Kommende Events" and "Vergangene Events" at **build time**,
using `site.time` (see `_layouts/home.html` and the `where_future` / `where_past` filters in
`_plugins/date_filters.rb`). Since the site is static, the cutoff date freezes at the last build:
a past event keeps showing up as upcoming until the site is rebuilt. Trigger a manual rebuild
whenever an event date has passed.

## Admin (Decap CMS)

- CMS URL: `https://tipi-natursein.de/admin/`
- Content edits are committed to `main` (see `admin/config.yml`) and deploy automatically
- Auth: Netlify Identity + Git Gateway (see Decap CMS docs)
