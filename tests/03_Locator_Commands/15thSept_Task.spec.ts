import { test, expect } from "@playwright/test"

test("TC-001: Verify that Katalon-demo-cura page is loaded", async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/",{
        waitUntil: 'commit',
        timeout:5000,
        referer:"https://thetestingacademy.com"
    });

    let makeAppoinmentBtn = page.locator("#btn-make-appointment");
    await makeAppoinmentBtn.click();

    let usernameField = page.locator("#txt-username");
    await usernameField.fill("John Doe");

    let passwordField = page.locator("#txt-password");
    await passwordField.fill("ThisIsNotAPassword");

    let loginBtn = page.locator("#btn-login");
    await loginBtn.click();

    const ensure_msg = page.locator("h2");
    await expect(ensure_msg).toContainText("Make Appointment");

    const page_url = page.url();
    await expect(page_url).toContain("https://katalon-demo-cura.herokuapp.com/#appointment");
});