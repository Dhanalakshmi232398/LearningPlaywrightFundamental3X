import { test, expect, FrameLocator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
  await page.goto('https://selectorshub.com/iframe-scenario/');

  const frame1: FrameLocator = page.frameLocator('#pact1').first();
  const frame2: FrameLocator = frame1.frameLocator('#pact2');
  const frame3: FrameLocator = frame2.frameLocator('#pact3');

  await frame1.locator('#inp_val').fill('Rithan');
  await frame2.locator('#jex').fill('Mathu');
  await frame3.locator('#glaf').fill('Family');

  const headerText = await frame1.locator('h3').innerText();
  console.log(headerText);


  await page.pause();

  //await expect(frame1.locator('h3')).toContainText('SelectorsHub');
});