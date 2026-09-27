import {test, expect} from '@playwright/test';

test("Automate orangeHRM", async ({page}) => {

await page .goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();

await page.locator('a span').filter({hasText:'PIM'}).click();
await page.getByRole('button', { name: 'Add' }).click();

await page.locator("//input[@name='firstName']").fill("Dhana");
await page.locator("//input[@name='middleName']").fill("Rithan");
await page.locator("//input[@name='lastName']").fill("Mathu");
await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("23204");
await page.locator("//button[@type='submit']").click();

await page.locator('a span').filter({hasText:'PIM'}).click();
await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("23204");
await page.getByRole('button', { name: ' Search ' }).click();
await page.locator("//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']").nth(1).click();
//await page.locator("//i[@class='oxd-icon bi-trash']").click();
await page.getByRole('button', { name: 'Delete'}).click({force:true});
await page.getByRole('button', { name: ' Yes, Delete '}).click();
 

await page.pause();
});