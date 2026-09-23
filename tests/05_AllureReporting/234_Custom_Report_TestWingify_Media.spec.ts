import { test, expect } from "@playwright/test";

/**
 * Same three dashboard checks as 233, but this file also captures
 * screenshot + video + trace for every test so the custom reporter
 * has media to render.
 *
 * Run it with:
 *   npx playwright test tests/05_Allure_Reporting/234_Media_Custom_Report.spec.ts \
 *       --reporter=./utils/CustomReporter.ts
 */
test.use({
    storageState: './user-session.json',
    screenshot: 'on',   // attach a PNG for every test, pass or fail
    video: 'on',        // record a .webm for every test
    trace: 'on',        // attach a trace.zip for every test
});

const DASHBOARD = "https://app.wingify.com/#/dashboard?accountId=1281703";

for (const n of [1, 2, 3]) {
    test(`dashboard loads with media captured — Test${n}`, async ({ page }, testInfo) => {

        await test.step('open the dashboard', async () => {
            await page.goto(DASHBOARD);
            await expect(page).toHaveURL(/dashboard/);
        });

        await test.step('confirm we are not on the login screen', async () => {
            await expect(page.locator('#login-username')).toBeHidden();
        });

        await test.step('attach a named screenshot', async () => {
            await testInfo.attach(`dashboard-test${n}`, {
                body: await page.screenshot({ fullPage: true }),
                contentType: 'image/png',
            });
        });
    });
}

/* import { test, expect, type Page, type TestInfo } from '@playwright/test';

test.use({
    storageState: './user-session.json',
      screenshot: 'on',
    video: 'on',
    trace: 'on',
});

async function verifyDashboard(page: Page, testInfo: TestInfo): Promise<void> {
    await page.goto('https://app.wingify.com/#/dashboard?accountId=1281703');
    await expect(page).toHaveURL(/dashboard/);

    const screenshotPath = testInfo.outputPath('dashboard.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await testInfo.attach('dashboard-screenshot', {
        path: screenshotPath,
        contentType: 'image/png',
    });

    console.log('Dashboard loaded with screenshot, video, and trace enabled');
    await page.waitForTimeout(3000);
}

test('dashboard media - Test1', async ({ page }, testInfo) => {
    await verifyDashboard(page, testInfo);
});

test('dashboard media - Test2', async ({ page }, testInfo) => {
    await verifyDashboard(page, testInfo);
});

test('dashboard media - Test3', async ({ page }, testInfo) => {
    await verifyDashboard(page, testInfo);
});





////execution command using utils folder code: npx playwright test tests/05_AllureReporting/233_Custom_Report_TestWingify.spec.ts --reporter=./utils/CustomerReporter.ts
//npx playwright test tests/05_AllureReporting/234_Custom_Report_TestWingify_Media.spec.ts --reporter=./utils/CustomerReporter.ts --project=chromium */



