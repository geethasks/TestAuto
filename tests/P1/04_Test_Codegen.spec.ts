import { test, expect } from '@playwright/test';

test('codegen test', async ({ page }) => {
  await page.goto('https://search.yahoo.com/');
  await page.getByRole('combobox', { name: 'Search query' }).click();
  await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search query' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ - YouTube' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'Playwright by Testers Talk☑️' }).locator('span').click();
  await expect(page1.getByRole('heading', { name: 'Playwright by Testers Talk☑️' }).locator('span')).toBeVisible();
  await expect(page1.getByRole('link', { name: 'Playwright Tutorial Full' })).toBeVisible();
  await page1.getByRole('link', { name: 'Playwright Tutorial Full' }).click();
  await expect(page1.getByRole('link', { name: 'Playwright by Testers Talk☑️' })).toBeVisible();
  await page1.locator('video').click();
});