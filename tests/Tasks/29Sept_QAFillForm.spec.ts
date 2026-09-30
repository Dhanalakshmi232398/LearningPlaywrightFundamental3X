import { test, expect } from '@playwright/test';

test('QA Profile Form', async ({ page }) => {

    page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");

    //Personal information
    await page.locator("#first-name").fill('DhanaMathu');
    await page.locator("#last-name").fill('Rithan');
    await page.getByTestId('gender-female').click();

    //Professional details
    await page.getByTestId('years-experience').selectOption('5');
    await page.locator('#profile-date').fill('2026-09-29');
    await page.getByTestId('profession-manual').click();

    //Technical skills
    await page.getByRole('checkbox', { name: "Selenium Webdriver" }).check();
    await page.getByRole('checkbox', { name: "Protractor" }).click();
    await page.getByTestId('continent-asia').click();
    await page.getByTestId('tab-webelement').click();

    await expect(page.locator('#selenium-tab-panel')).toContainText("element.click(); element.sendKeys('hello'); element.getAttribute('value');");
    await page.locator('#profile-submit').click();

     const result_json = JSON.parse(await page.locator('#submission-output').innerText());
     console.log(result_json);


    //Just explored myself
    let submittedProfile = page.locator('#submission-output');
    await expect(submittedProfile).toContainText(`{
  "firstName": "DhanaMathu",
  "lastName": "Rithan",
  "gender": "Female",
  "yearsExperience": "5",
  "date": "2026-09-29",
  "profession": "Manual Tester",
  "tools": [
    "Protractor",
    "Selenium Webdriver"
  ],
  "continents": "Asia",
  "upload": {}
}`);


    await page.pause();
});
