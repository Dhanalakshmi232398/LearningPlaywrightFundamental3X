import {test, expect} from '@playwright/test';

test('Verify Hover Menu', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').click();


    const result_json = JSON.parse(await page.getByTestId('hover-output').innerText());
    console.log(result_json);

    await expect(page.getByTestId('hover-output')).toContainText("Wi-Fi");



    await page.pause();
});