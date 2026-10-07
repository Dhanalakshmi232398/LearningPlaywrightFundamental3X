import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Automate Profile Picture Update in app.thetestingacademy.com site', () => {

    const URL = 'https://app.thetestingacademy.com/login';

    test.beforeEach('Profile Picture Upload', async ({ page }) => {
        await page.goto(URL);

      });

      test('locate Shadow DOM and assert visible', async ({ page }) => {

        await page.locator("#identifier-field").fill("dhanalakshmiabcd@gmail.com");
        await page.getByRole('button', { name: 'Continue', exact: true }).click();

        await page.locator("#password-field").fill("DhanaMathu@230420");
        await page.getByRole('button', { name: 'Continue', exact: true }).click();

        //Verification code entered manually in the browser, then resume the test in Playwright Inspector.
        console.log('Complete verification in the browser, then resume the test in Playwright Inspector.');
        await page.pause();

        const closeButton = page.getByRole('button', { name: 'Close' });
        await expect(closeButton).toBeVisible();
        await closeButton.click();
        await expect(closeButton).toBeHidden();

        await page.getByRole('link', { name: 'Settings' }).click();

        const imgFilePath = path.join(__dirname, 'imgFile1.jpg');
        console.log(imgFilePath);

        const uploadInput = page.locator('#avatar-upload');
        await uploadInput.setInputFiles([imgFilePath]);

        await page.pause();
    });

});





