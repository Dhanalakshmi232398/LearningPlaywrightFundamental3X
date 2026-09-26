import {test, expect} from '@playwright/test';

test("Verify the Testcase", async({page})  => {

  await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter"); 
  
  const forgottenPasswordLink = page.locator('a.list-group-item').filter({hasText:'Forgotten Password'});
  await forgottenPasswordLink.click();

  const privacyPolicyLink = page.locator('footer a').filter({hasText:'Privacy Policy'});
  await expect(privacyPolicyLink).toHaveAttribute('href', "#privacy-policy");


  await page.pause();
});