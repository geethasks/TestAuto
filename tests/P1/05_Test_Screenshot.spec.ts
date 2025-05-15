//import
import { test, expect} from '@playwright/test'

//test tc
test('capture the SS' , async({ page }) =>{

//launch the url
    await page.goto('https://search.yahoo.com');

// Find the element
    await page.locator('#yschsp').fill('Playwright by testers talk');
    await page.locator('#yschsp').press('Enter');

    await expect(page.locator('#web li:nth-child(2) .compTitle')).toContainText('Playwright by Testers Talk☑️ - YouTube')
    await page.locator('#web li:nth-child(2) .compTitle').click();

    // open in a new window
    const newTab = page.waitForEvent('popup')
    const page1 = await newTab;

// Take the element SS
    await page1.locator('.page-header-view-model-wiz__scroll-container').screenshot({path : './screenshots/ElementScreenshot.png'})


// Page SS
    await page1.screenshot({ path : './screenshots/CurrentPageSS.jpeg'});

// Full page SS
    await page1.waitForLoadState('domcontentloaded')
    await page1.screenshot({ path : './screenshots/FullPageSS.jpeg', fullPage:true})



});






