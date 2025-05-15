//import playwright module
import { test, expect } from '@playwright/test'

//TC 
test('Search and veryfy', async ({ page }) => {

	//open the url
	await page.goto('https://search.yahoo.com/')
	// enter the search query
	await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk')
	await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

	//click on the first link
	await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click()

	// await to open a new tab and validate the title

	const [newPage] = await Promise.all([
		page.waitForEvent('popup'),
	])
	await expect(newPage).toHaveTitle('Playwright by Testers Talk☑️ - YouTube')
	await newPage.waitForLoadState('domcontentloaded');
	await expect(newPage.getByRole('link', { name: 'Playwright Tutorial Full' })).toBeVisible();
	//const countEle = await newPage.locator('#meta h3').count();
	//console.log('asdfsf'+ countEle)
	await expect(newPage.getByLabel('Testing Microsoft D365 CRM App. with Playwright').locator('#video-title')).toContainText('Testing Microsoft D365 CRM App. with Playwright')


});

