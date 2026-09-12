# Learning Playwright Fundamentals

A starter project for learning **Playwright Test** — browser automation and end‑to‑end testing with [Microsoft Playwright](https://playwright.dev/). The project is pre‑configured for running tests across Chromium, Firefox, and WebKit, and includes a quick way to record tests automatically using **Codegen**.

## Prerequisites

- [Node.js](https://nodejs.org/) **18 or newer** (Playwright requires Node 18+)
- **[npm](https://www.npmjs.com/)** (bundled with Node.js)
- A **GitHub account** if you want to push your own copy of the repository

## Install and Set Up

### 1. Clone the repository

```bash
git clone https://github.com/Dhanalakshmi232398/LearningPlaywrightFundamental3X.git
cd LearningPlaywrightFundamental3X
```

### 2. Install the project dependencies

```bash
npm install
```

### 3. Install the Playwright browsers

```bash
npx playwright install
```

On **Linux CI** environments, also install the required operating‑system dependencies:

```bash
npx playwright install --with-deps
```

### 4. Verify the installation

Run the example tests to confirm everything works:

```bash
npm test
```

You should see the test results and an HTML report. If any browser fails to launch, re‑run the browser install step above.

## Run Tests

The project includes ready‑made npm scripts:

| Command                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `npm test`              | Run all tests in headless mode (no visible browser) |
| `npm run test:headed`   | Run tests with a visible browser window             |
| `npm run test:ui`       | Open the interactive Playwright UI Mode              |
| `npm run report`        | Open the HTML test report after a run                |

You can also run a single test file:

```bash
npx playwright test tests/01_Basics/216_example.spec.ts
```

Or run tests in a specific browser only:

```bash
npx playwright test --project=chromium
```

## Record Tests With Codegen

**Codegen** lets you record your interactions in a real browser and automatically generates working test code with stable locators.

### Start Codegen

```bash
npm run codegen
```

This is equivalent to:

```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter
```

### How to use it

1. A **browser window** opens with the target URL and the **Playwright Inspector** panel appears alongside.
2. **Interact with the page** — click buttons, fill forms, navigate. Playwright records every action.
3. The Inspector **generates the test code live**, with proper locators and assertions.
4. Use the **Record / Stop / Step** buttons to control recording, and the copy button to grab the generated script.
5. **Paste the generated code** into a new file under the relevant topic folder, for example `tests/03_Locator_Commands/my-test.spec.ts`.

For any other page, pass the URL directly:

```bash
npx playwright codegen https://example.com
```

> **Tip:** Use **Pick locator** in the Inspector to hover over elements and capture robust, resilient locators for handwritten tests.

## Project Structure

Tests are grouped into numbered topic folders so they read in learning order:

```text
.
├── tests/
│   ├── 01_Basics/                  # Core concepts: browser, context, page, options
│   │   ├── 216_example.spec.ts         # Example end-to-end test
│   │   ├── 217_Multiple_Context.ts     # Multiple isolated browser contexts
│   │   ├── 218_Normal_Playwright.ts    # Browser → context → page flow with the raw API
│   │   ├── 219_tta_sample.spec.ts      # Sample login flow (The Testing Academy)
│   │   ├── 220_BCP.spec.ts             # Browser / Context / Page levels explained
│   │   ├── 221_TA.spec.ts              # Navigation and multi-context test
│   │   └── 222.Test_Options.spec.ts    # Context options (locale, viewport, mobile…)
│   ├── 02_TestAnnotations/         # Test-level annotations and grouping
│   │   ├── 223_TestAnnotations.spec.ts # skip, only, fail, fixme, slow
│   │   └── 224_TestDescribe.spec.ts    # Grouping tests with test.describe
│   └── 03_Locator_Commands/        # Locators and element interactions
│       └── 225_LocatorComand.spec.ts   # Locator commands
├── ResearchTopics/
│   └── Playwright_Architecture.html # Visual reference on Playwright's architecture
├── playwright.config.ts            # Test runner configuration
├── package.json                    # Dependencies and npm scripts
├── package-lock.json
└── README.md
```

The browser projects (Chromium, Firefox, WebKit) and the `headless` option are configured in `playwright.config.ts`.

## Test Credentials

`tests/01_Basics/219_tta_sample.spec.ts` uses placeholder credentials by default. Set credentials only in your local shell when testing the login flow — never hard‑code real passwords in the repository.

PowerShell:

```powershell
$env:TEST_EMAIL = "your-email"
$env:TEST_PASSWORD = "your-password"
npm test -- tests/01_Basics/219_tta_sample.spec.ts
```

That's it — you are ready to explore Playwright. Happy testing! 🚀