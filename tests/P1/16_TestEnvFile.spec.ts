import { test } from '@playwright/test'



test('Read ENV file config', { tag: '@SmokeTest' }, async ({ page }) => {

    await page.goto(`${process.env.YAHOO_URL}`);

    // enter the search query
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    //click on the mouse left
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click({ button: 'left' });


})