import { test, expect } from '@playwright/test';

test('Practicing Assertions in Student Login Form', async ({ page }) => {

    // URL Assertions
    const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
    await page.goto(URL);
    await expect(page).toHaveURL(URL);

    //MainHeading Assertions
    const heading = page.getByText('multiple element filters', { exact: true });
    await expect(heading).toBeVisible();

    //Login Frame Assertions
    const LoginFrame = page.locator('#login');
    await expect(LoginFrame).toContainText('Student Login', { timeout: 10000 });
    await expect(page.getByText('Practice page for Playwright selectors')).toBeVisible();
    await expect(page.getByText('SECURE PRACTICE')).toBeVisible();

    //Email Textbox Assertions
    const emailTextbox = page.locator('#email');
    await emailTextbox.fill("student@example.com");
    await expect(emailTextbox).toBeVisible();
    await expect(emailTextbox).toBeEnabled();
    await expect(emailTextbox).toBeEditable();
    await expect(emailTextbox).toHaveValue('student@example.com');
    await expect(emailTextbox).toHaveAttribute('type', 'email');

    //Password Textbox Assertions
    const pwdTextbox = page.locator('#password');
    await pwdTextbox.fill("student@123");
    await expect(pwdTextbox).toBeVisible();
    await expect(pwdTextbox).toBeEnabled();
    await expect(pwdTextbox).toBeEditable();
    await expect(pwdTextbox).toHaveValue('student@123');
    await expect(pwdTextbox).toHaveAttribute('type', 'password');

    //Remember Me Checkbox Assertions
    const rememberMeCheckbox = page.locator('input[type="checkbox"]');
    await rememberMeCheckbox.check();
    await expect(rememberMeCheckbox).toBeVisible();
    await expect(rememberMeCheckbox).toBeEnabled();
    await expect(rememberMeCheckbox).toBeChecked();
    //await expect(rememberMe).not.toBeChecked();


    //Forgot Password Link Assertion
    const forgotPasswordLink = page.getByRole('link', { name: 'Forget password?' });
    await expect(forgotPasswordLink).toBeVisible();
    await expect(forgotPasswordLink).toHaveAttribute('href', '#forgotten-password');

    //Login Button Assertion
    const loginButton = page.getByRole('button', { name: 'Login to Practice Account' });
    await loginButton.click();
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toHaveText('Login to Practice Account');

    //After login url check 
    const page_url = page.url();
    await expect(page_url).toContain("login-success");

    //GitHub Link Assertions
    const GithubLink = page.getByRole('link', { name: 'Continue with GitHub' });
    await expect(GithubLink).toBeVisible();

    //Google Link Assertions
    const GoogleLink = page.getByRole('link', { name: 'Continue with Google' });
    await expect(GoogleLink).toBeVisible();
 
    await page.pause();
});