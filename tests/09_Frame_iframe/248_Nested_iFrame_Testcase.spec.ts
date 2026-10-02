import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
  await page.goto('https://selectorshub.com/iframe-scenario/');
  let frame1: FrameLocator = page.frameLocator('#pact1');
  let frame2: FrameLocator = frame1.frameLocator('#pact2');
  let frame3: FrameLocator = frame2.frameLocator('#pact3');

 // await page.waitForLoadState('networkidle');

  await frame1.locator('//input[@id="inp_val"]').nth(1).fill("Rithan");//filter({ has: frame1.locator('[title="Enter your first crush name"]') }).fill('Rithan');
  await frame2.locator('#jex').fill('Mathu');
  await frame3.locator('#glaf').fill('Family');

  const headerText = await frame1.locator('h3').innerText();
  console.log(headerText);
  await page.waitForTimeout(5000);
  page.keyboard


  await page.pause();
});