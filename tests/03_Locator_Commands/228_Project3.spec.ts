import {test, expect} from '@playwright/test';

test("Verify the error msg in the Wingify free trial", async ({page}) => {

await page.goto("https://wingify.com/free-trial/");

let inputBox = page.locator("//input[@id='free-trial-step1-email']");
await inputBox.fill("dhanaMathuRithan");

await page.locator("//input[@id='free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox']").click();
await page.locator("//input[@id='free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox']").click();

let trialBtn = page.locator("//button[@data-qa='page-su-submit']");
await trialBtn.first().click();

let errorMsg = page.locator("//div[contains(@class, 'invalid-reason')]").first();
let errorMsgText = await errorMsg.textContent();

expect(errorMsgText).toContain("The email address you entered is incorrect.");
await page.pause();
});