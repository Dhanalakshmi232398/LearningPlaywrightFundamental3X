import {test, expect} from '@playwright/test';

test("Verify the Testcase using Pagination", async({page})  => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name : string = "Luca Greco";
    let row;
    while(true){
        row = await page.locator("#employees-tbody tr").filter({hasText:name});
        if (await row.count()){
            break;
        }

        const next= await page.getByTestId("next-page");
        if(await next.isDisabled()){
            throw new Error(`Row not found!`);
        }
        await next.click();
    }

    const email = await row.locator("td[data-col='email']").innerText();
    const country = await row.locator("td[data-col='country']").innerText();

    await page.pause();

});