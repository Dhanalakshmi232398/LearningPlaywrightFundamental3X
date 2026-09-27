import {test, expect, Page, Locator} from '@playwright/test';


async function dslrNamePrice(page: Page, name: string): Promise<void> {

  let pageCount = 1;

  while (pageCount <= 7) {
    const items = page.locator("//div[@class='RG5Slk']");
    const price = page.locator("//div[@class='hZ3P6w DeU9vF']");

    const count = await items.count();

    //console.log("Number of products:", await items.count());

    for (let i = 0; i<await items.count(); i++){
      const naming = await items.nth(i).innerText();
      const amount = await price.nth(i).innerText();
      console.log(naming, amount);
    }

    if(pageCount === 7){
      break;
    }

      const next = page.locator('a:has(span)').filter({ hasText: 'Next' });
      if (await next.count() === 0 || await next.isDisabled()) {
        break;
      }

      await next.click();
      await page.waitForLoadState('networkidle');
      //await page.waitForTimeout(5000);


      pageCount++;

    }

  }

  
test ("Verifying DSLR details in Flipkart", async ({page}) => {


    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[@class='b3wTlE']").click();
    await page.waitForTimeout(5000);

    const searchBar = page.locator("//input[@name='q']").nth(0);
    await searchBar.click();
    await searchBar.fill("DSLR Camera");
    await searchBar.press('Enter');
    await page.waitForLoadState('networkidle');

    await dslrNamePrice(page, "DSLR Camera");


    await page.pause();


});







































/* 

import {test, expect, Page, Locator} from '@playwright/test';


async function dslrNamePrice(page: Page, name: string): Promise<{ items: Locator; price: Locator }> {

  while (true) {
    const items = page.locator("//div[@class='RG5Slk']").filter({ hasText: 'DSLR Camera' });
    if (await items.count()) {
      return { items, price: page.locator("//div[@class='hZ3P6w DeU9vF']") };
    }
    
    for(let i=0; i<=6; i++){
    const next = page.locator('a:has(span)').filter({ hasText: 'Next' });
    if (await next.isDisabled()) {
      throw new Error('Row not found!: DSLR Camera');
    }
    await next.click();
    await page.waitForLoadState('networkidle');
  }

  }

}

test ("Verifying DSLR details in Flipkart", async ({page}) => {


    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[@class='b3wTlE']").click();
    await page.waitForTimeout(5000);

    const searchBar = page.locator("//input[@name='q']").nth(0);
    await searchBar.click();
    await searchBar.fill("DSLR Camera");
    await searchBar.press('Enter');

    const { items, price } = await dslrNamePrice(page, "DSLR Camera");

    const naming = await items.locator("//div[@class='RG5Slk']").innerText();
    const amount = await price.locator("//div[@class='hZ3P6w DeU9vF']").innerText();
    console.log(naming, amount);

    await page.pause();


});
 */