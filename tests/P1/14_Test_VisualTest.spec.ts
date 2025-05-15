import { test, expect } from '@playwright/test'

test('Visual Test', async ({ page }) => {

    await page.goto('https://github.com/login')

    await expect(page).toHaveScreenshot('ExpectedSS.png');

    await page.locator('[id="login_field"]').fill('asdsd');
    await page.locator('[id="password"]').fill('asdf')
    await page.getByRole('button', {name: "Sign in", exact: true }).click();


    await expect(page).toHaveScreenshot('ExpectedSS.png');

})
