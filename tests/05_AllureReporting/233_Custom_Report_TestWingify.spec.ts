import { test, expect } from "@playwright/test";


// Load the saved session

test.use(
    {
        storageState : './user-session.json'
    });


test("go directly to dashboard — Test1", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281703");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard2 — Test2", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281703");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard3 — Test3", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281703");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});



//npm i allure-commandline -- after this use the below command for reports
//npx allure serve allure-results



//execution command using utils folder code: npx playwright test tests/05_AllureReporting/233_Custom_Report_TestWingify.spec.ts --reporter=./utils/CustomerReporter.ts