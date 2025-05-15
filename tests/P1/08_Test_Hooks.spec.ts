//import
import { test, expect} from '@playwright/test'

test.beforeAll(async() => {
    console.log('Running before all the tests')
});

test.beforeEach(async({ page}) =>{
    console.log('Running before each test')
    //launch the url
    await page.goto('https://search.yahoo.com');

});

test.afterEach(async() => {
    console.log('Running after each test')
    
});

test.afterAll(async() => {
    console.log('Running after all the tests')
});


//test tc
test('Test1' , async({ page }) =>{

//launch the url
  //  await page.goto('https://search.yahoo.com');

// Find the element
    await page.locator('#yschsp').fill('Playwright by testers talk');
    await page.locator('#yschsp').press('Enter');

    await expect(page.locator('#web li:nth-child(2) .compTitle')).toContainText('Playwright by Testers Talk☑️ - YouTube')
    await page.locator('#web li:nth-child(2) .compTitle').click();
})



test('Test2' , async({ page }) =>{

    //launch the url
      //  await page.goto('https://search.yahoo.com');
    
    // Find the element
        await page.locator('#yschsp').fill('Playwright by testers talk');
        await page.locator('#yschsp').press('Enter');
    
        await expect(page.locator('#web li:nth-child(2) .compTitle')).toContainText('Playwright by Testers Talk☑️ - YouTube')
        await page.locator('#web li:nth-child(2) .compTitle').click();
        
    });


