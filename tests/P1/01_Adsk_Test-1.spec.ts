import { test, expect } from '@playwright/test';

test('load AA', async ({ page }) => {
  await page.goto('https://www.autodesk.com');

  // Locate iframe
  const frame = page.frameLocator('#uhm-iframe-container iframe');

  // Wait for the element inside the iframe
  await frame.locator('.ua-fab-icon').waitFor({ timeout: 10000 });
  await expect(frame.locator('.ua-fab-icon')).toBeVisible();

  // Perform actions inside iframe
  await frame.locator('.ua-fab-icon').click();
  await frame.locator('.privacy-close').waitFor(); // Added explicit wait
  await frame.locator('.privacy-close').click();
  
  await frame.locator('#ha-inline-input-box').waitFor(); // Added wait for input box
  await frame.locator('#ha-inline-input-box').fill('what can revit do');
  await frame.locator('#ha-inline-input-box-submit').click();
});
