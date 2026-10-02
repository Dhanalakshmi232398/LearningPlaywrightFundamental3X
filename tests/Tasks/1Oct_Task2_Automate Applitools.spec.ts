import {test, expect} from '@playwright/test';

test('Verify the Automation of Applitools.com', async ({ page }) => {


    await page.goto('https://demo.applitools.com/');

    await page.locator('input#username').fill('Admin');
    await page.locator('input#password').fill('Password@123');
    await page.locator('a#log-in').click();

     await expect(page).toHaveURL('https://demo.applitools.com/app.html');


     //picking the last column of the table and accumalating the total of the last column
     const allValues: string[] = await page.locator('table tbody tr td:last-child').allInnerTexts();
     console.log(allValues);

        let totalValue: number = 0;

        for (const value of allValues) {
            const numericValue: string = value.replace(/[^0-9.-]+/g, '');
            const parsedValue: number = parseFloat(numericValue) || 0 ;
            totalValue += parsedValue;
        }

        console.log('Total:', totalValue);

       await expect(totalValue).toBeCloseTo(1996.22);
       

       // Earned and Spent value calculation
       let earnedvalue = 0;
       let spentvalue = 0;

          allValues.forEach((amount: string) => {
            const money = Number(amount.replace(/[^0-9.-]+/g, ''));
            if (money > 0) {
                earnedvalue += money;
            }else {
                spentvalue += Math.abs(money);
            }
        });

        console.log('Earned Value:', earnedvalue);
        console.log('Spent Value:', spentvalue);

    await page.pause();
});