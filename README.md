# DirectBooks Playwright + Cucumber

End-to-end tests for the DirectBooks public website using Playwright, Cucumber, and TypeScript.

## Install

```bash
npm install
npx playwright install --with-deps chromium
```

## Run Locally

Typecheck:

```bash
npm run typecheck
```

Run E2E tests:

```bash
npm run test:e2e
```

## GitHub Actions

This project includes:

- CI workflow on pull requests and pushes to `main`
- Nightly regression workflow at 02:00 America/Sao_Paulo
- Manual regression trigger from GitHub Actions

To run regression tests manually in GitHub:

1. Open the repository in GitHub
2. Go to **Actions**
3. Select **Nightly Regression**
4. Click **Run workflow**
