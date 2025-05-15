//import playwright module
import { test, expect } from '@playwright/test'

//TC 
test('Search and veryfy', { tag: ['@RegressionTest'] }, async ({ page }) => {

    //open the url
    await page.goto('https://search.yahoo.com/')
    // enter the search query
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk')
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    //click on the first link
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click()
    // validate the title
    await expect(page).toHaveTitle('playwright by testers talk - Yahoo Search Results')


}); 