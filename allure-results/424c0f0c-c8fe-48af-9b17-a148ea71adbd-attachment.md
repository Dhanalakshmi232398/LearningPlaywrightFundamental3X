# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\1Oct_Task2_Automate Applitools.spec.ts >> Verify the Automation of Applitools.com
- Location: tests\Tasks\1Oct_Task2_Automate Applitools.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://demo.applitools.com/app.html/"
Received: "https://demo.applitools.com/app.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "https://demo.applitools.com/app.html"

```

```yaml
- link "ACME":
  - /url: "#"
- text: 
- textbox "Start typing to search..."
- text:  7  Jack Gomez Customer 
- list:
  - listitem: Card types
  - listitem:
    - link "  Credit cards":
      - /url: ""
  - listitem:
    - link "  Debit cards":
      - /url: ""
  - listitem: Lending
  - listitem:
    - link "  Loans":
      - /url: ""
  - listitem:
    - link "  Mortgages":
      - /url: ""
- link " Add Account":
  - /url: "#"
- link " Make Payment":
  - /url: "#"
- 'heading "Your nearest branch closes in: 30m 5s" [level=6]'
- heading "Financial Overview" [level=6]
- text: Total Balance $350 %7 
- link "View Statement ":
  - /url: "#"
- text: Credit Available $17,800
- link "Request Increase ":
  - /url: "#"
- text: Due Today $180
- link "Pay Now ":
  - /url: "#"
- heading "Recent Transactions" [level=6]
- table:
  - rowgroup:
    - row "Status Date Description Category Amount":
      - columnheader "Status"
      - columnheader "Date"
      - columnheader "Description"
      - columnheader "Category"
      - columnheader "Amount"
  - rowgroup:
    - row "Complete Today1:52am Starbucks coffee Restaurant / Cafe + 1,250 USD":
      - cell "Complete"
      - cell "Today1:52am"
      - cell "Starbucks coffee"
      - cell "Restaurant / Cafe":
        - link "Restaurant / Cafe":
          - /url: ""
      - cell "+ 1,250 USD"
    - row "Declined Jan 19th3:22pm Stripe Payment Processing Finance + 952.23 USD":
      - cell "Declined"
      - cell "Jan 19th3:22pm"
      - cell "Stripe Payment Processing"
      - cell "Finance":
        - link "Finance":
          - /url: ""
      - cell "+ 952.23 USD"
    - row "Pending Yesterday7:45am MailChimp Services Software - 320 USD":
      - cell "Pending"
      - cell "Yesterday7:45am"
      - cell "MailChimp Services"
      - cell "Software":
        - link "Software":
          - /url: ""
      - cell "- 320 USD"
    - row "Pending Jan 23rd2:7pm Shopify product Shopping + 17.99 USD":
      - cell "Pending"
      - cell "Jan 23rd2:7pm"
      - cell "Shopify product"
      - cell "Shopping":
        - link "Shopping":
          - /url: ""
      - cell "+ 17.99 USD"
    - row "Complete Jan 7th9:51am Ebay Marketplace Ecommerce - 244 USD":
      - cell "Complete"
      - cell "Jan 7th9:51am"
      - cell "Ebay Marketplace"
      - cell "Ecommerce":
        - link "Ecommerce":
          - /url: ""
      - cell "- 244 USD"
    - row "Pending Jan 9th7:45pm Templates Inc Business + 340 USD":
      - cell "Pending"
      - cell "Jan 9th7:45pm"
      - cell "Templates Inc"
      - cell "Business":
        - link "Business":
          - /url: ""
      - cell "+ 340 USD"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('Verify the Automation of Applitools.com', async ({ page }) => {
  4  | 
  5  | 
  6  |     await page.goto('https://demo.applitools.com/');
  7  | 
  8  |     await page.locator('input#username').fill('Admin');
  9  |     await page.locator('input#password').fill('Password@123');
  10 |     await page.locator('a#log-in').click();
  11 | 
> 12 |      await expect(page).toHaveURL('https://demo.applitools.com/app.html/');
     |                         ^ Error: expect(page).toHaveURL(expected) failed
  13 | 
  14 | 
  15 | 
  16 |     
  17 | 
  18 |     await page.pause();
  19 | });
```