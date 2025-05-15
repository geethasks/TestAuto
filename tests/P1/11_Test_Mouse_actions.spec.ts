//import playwright module
import {test, expect} from '@playwright/test'

//TC 
test('mouse actions', async({ page }) =>{

//open the url
await page.goto('https://search.yahoo.com/')
// enter the search query
await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk')
await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

//click on the mouse left
//await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click({ button: 'left'});


// click on the middle button
// await page.getByRole('link', {name: "Playwright by Testers Talk☑️" }).click({ button:'middle'});


 // click on the right button
 //await page.getByRole('link', {name: "Playwright by Testers Talk☑️" }).click({ button:'right'});

 // mouse hover
  await expect(page.locator('[id="voice-btn"]').hover())



});

