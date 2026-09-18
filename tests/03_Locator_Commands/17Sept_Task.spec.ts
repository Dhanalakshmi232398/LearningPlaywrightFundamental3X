import {test, expect} from '@playwright/test';

test("Verify the Invalid Login & URL Validation", async ({page}) => {

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")

let EmailidInputBox = page.locator("//input[@id='email']");
await EmailidInputBox.fill("dhanaMathuRithan@gmail.com");

let passwordInputBox = page.locator("//input[@id='password']");
await passwordInputBox.fill("family");

await page.locator("//input[@type='checkbox']").click();

let loginBtn = page.locator("//button[@data-testid='login-button']");
await loginBtn.click();

await expect(page).toHaveURL(url => url.toString().includes("https://app.thetestingacademy.com/playwright/multiple_element_filter"));
await page.pause();
});