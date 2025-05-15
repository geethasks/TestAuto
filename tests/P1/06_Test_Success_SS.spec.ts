//import
import { test, expect} from '@playwright/test'

//test tc
test('capture the SS when test pass', {tag: ['@SmokeTest', '@RegressionTest']}, async({ page }) =>{

//launch the url
    await page.goto('https://search.yahoo.com');

// Find the element
    await page.locator('#yschsp').fill('Playwright by testers talk');
    await page.locator('#yschsp').press('Enter');

    await expect(page.locator('#web li:nth-child(2) .compTitle')).toContainText('Playwright by Testers Talk☑️ - YouTube')
    await page.locator('#web li:nth-child(2) .compTitle').click();
    console.log("test");
    
});


