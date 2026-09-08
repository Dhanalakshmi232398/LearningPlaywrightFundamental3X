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
npx playwright test tests/example.spec.ts
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
5. **Paste the generated code** into a new file under `tests/`, for example `tests/my-test.spec.ts`.

For any other page, pass the URL directly:

```bash
npx playwright codegen https://example.com
```

> **Tip:** Use **Pick locator** in the Inspector to hover over elements and capture robust, resilient locators for handwritten tests.

## Project Structure

```text
.
├── tests/
│   ├── example.spec.ts     # Example end-to-end test
│   └── sample.spec.ts      # Sample test with login flow
├── playwright.config.ts    # Test runner configuration
├── package.json            # Dependencies and npm scripts
├── package-lock.json
└── README.md
```

The browser projects (Chromium, Firefox, WebKit) and the `headless` option are configured in `playwright.config.ts`.

## Test Credentials

`tests/sample.spec.ts` uses placeholder credentials by default. Set credentials only in your local shell when testing the login flow — never hard‑code real passwords in the repository.

PowerShell:

```powershell
$env:TEST_EMAIL = "your-email"
$env:TEST_PASSWORD = "your-password"
npm test -- tests/sample.spec.ts
```

That's it — you are ready to explore Playwright. Happy testing! 🚀