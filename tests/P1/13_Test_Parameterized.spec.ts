//import
import { test, expect } from '@playwright/test'


const searchList = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'Playwright API Testing by Testers Talk']

// for loop to search for each word from the list

for (const eachSearchItem of searchList) {

    //test tc
    test(`Parameterized Test ${eachSearchItem}`, { tag: ['@SmokeTest', '@RegressionTest'] }, async ({ page }) => {

        //launch the url
        await page.goto('https://search.yahoo.com');

        // Find the element
        await page.locator('#yschsp').fill(eachSearchItem);
        await page.locator('#yschsp').press('Enter');

        await page.getByRole( 'link', { name: eachSearchItem}).first().click();

        await expect(page).toHaveTitle(eachSearchItem + ' - Yahoo Search Results')
       
    })

}
