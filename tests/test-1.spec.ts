import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.autodesk.com/');
  page.waitForTimeout(30000);
  await expect(page.locator('#uhm-iframe-container iframe').contentFrame().getByTestId('styled-chat-bubble')).toContainText('👋 Hi, I’m Autodesk Assistant!');
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByTestId('styled-chat-bubble').getByRole('img').click();
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByTestId('avatar-path').click();
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByTestId('avatar-path').click();
  await expect(page.locator('#uhm-iframe-container iframe').contentFrame().locator('#ua-root')).toContainText('Privacy Statement');
  await page.locator('#uhm-iframe-container iframe').contentFrame().locator('span').filter({ hasText: 'Privacy StatementBy' }).getByRole('img').click();
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByRole('textbox', { name: 'Describe your question in' }).click();
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByRole('textbox', { name: 'Describe your question in' }).fill('what can revit do');
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByRole('link', { name: 'Product details' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByRole('button', { name: 'Close' }).click();
  await page.locator('#uhm-iframe-container iframe').contentFrame().getByTestId('confirm-button').click();
});