import { test } from '@playwright/test';

test('asdsf', async ({ page }) => {
    // Launch browser
    

    // Navigate to the YouTube playlist page
    await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

    // Wait for videos to load
    await page.waitForSelector('h3 a');

    // Extract all video titles
    const titles = await page.$$eval('h3 a', elements => elements.map(el => el.textContent?.trim()));

    // Print the extracted titles
    console.log('Playwright YouTube Video Titles:');
    console.log(titles);

    // Close browser
    //await browser.close();
});

