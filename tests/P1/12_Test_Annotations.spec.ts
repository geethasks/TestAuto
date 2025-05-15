import { test } from '@playwright/test'


test.skip('annotations', { tag: '@SmokeTest' }, async ({ page }) => {


    await page.goto('https://search.yahoo.com/')
    // enter the search query
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    //click on the mouse left
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click({ button: 'left' });


})


test('annotations 2', { tag: '@RegressionTest' }, async ({ page }) => {


    await page.goto('https://search.yahoo.com/')
    // enter the search query
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    //click on the mouse left
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click({ button: 'right' });


})


test('annotations 3', { tag: ['@SmokeTest', '@RegressionTest'] }, async ({ page }) => {


    await page.goto('https://search.yahoo.com/')
    // enter the search query
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    //click on the mouse left
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click({ button: 'right' });


})


test('annotations 4', { tag: ['@SmokeTest', '@RegressionTest'] }, async ({ page }) => {


    await page.goto('https://search.yahoo.com/')
    // enter the search query
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    //click on the mouse left
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click({ button: 'right' });


})