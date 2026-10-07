import { test, expect, Locator } from '@playwright/test';

test.describe('Shadow handling with closed shadow DOM', () => {

   const URL = 'https://selectorshub.com/xpath-practice-page/'; // replace with target page

   test.beforeEach(async ({ page }) => {
      await page.goto(URL);
   });

   test('locate Shadow DOM and assert visible', async ({ page }) => {

    await page.locator("#kils").fill("Dominos");
    await page.locator("#pizza").fill("Margherita and Garlic Bread");

    await page.keyboard.press("Tab");
    await page.keyboard.type("Playwright+AI");

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab"); // password field its in shadow DOM closed. 
    await page.keyboard.type("DMRithan04");
    await page.locator("//a[@class='elementor-button elementor-button-link elementor-size-sm btn-hover']").nth(2).click();




    await page.pause();

   });

});