# my-playwright-framework

End-to-end test automation for [DirectBooks](https://www.directbooks.com) built with [Playwright](https://playwright.dev) and TypeScript.

---

## Project structure

```
my-playwright-framework/
├── config/
│   ├── dev.env.json        # Development environment variables
│   └── qa.env.json         # QA environment variables
├── support/
│   ├── data/
│   │   └── userPayloads.json     # Static test data and JSON mocks
│   ├── fixtures/
│   │   └── baseTest.ts           # Custom Playwright fixtures
│   ├── pages/                    # Page Object Models
│   │   ├── CareersPage.ts
│   │   ├── CommunityPortalPage.ts
│   │   ├── DemoRequestPage.ts
│   │   ├── DirectBooksPage.ts
│   │   ├── HistoryPage.ts
│   │   ├── HowPage.ts
│   │   ├── LegalPage.ts
│   │   ├── NewsroomPage.ts
│   │   ├── SeniorTeamPage.ts
│   │   ├── WhatPage.ts
│   │   ├── WhoPage.ts
│   │   └── WhyPage.ts
│   └── utils/
│       ├── apiHelpers.ts         # Reusable API orchestration utilities
│       └── cryptoUtils.ts        # Encryption/decryption helpers
├── tests/
│   ├── about/
│   ├── community/
│   ├── contact/
│   ├── faq/
│   ├── homepage/
│   ├── legal/
│   ├── newsroom/
│   └── solution/
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

---

## Prerequisites

- [Node.js](https://nodejs.org) v22+
- npm v10+

---

## Getting started

```bash
# Navigate into the framework directory
cd my-playwright-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps
```

---

## Running tests

| Command | Description |
|---|---|
| `npm test` | Run all tests (all browsers) |
| `npm run test:chromium` | Run tests on Chromium only |
| `npm run test:firefox` | Run tests on Firefox only |
| `npm run test:webkit` | Run tests on WebKit only |
| `npm run test:headed` | Run tests in headed mode |
| `npm run test:report` | Open the last HTML report |
| `npm run typecheck` | TypeScript type check (no emit) |

---

## Configuration

Browser projects, timeouts, retries, and reporters are defined in `playwright.config.ts`.

Environment-specific variables (base URLs, credentials) live in `config/dev.env.json` and `config/qa.env.json`.

---

## CI/CD

Tests run automatically via GitHub Actions on a nightly schedule across all three browsers (Chromium, Firefox, WebKit). Playwright HTML reports are uploaded as artifacts and retained for 7 days.
