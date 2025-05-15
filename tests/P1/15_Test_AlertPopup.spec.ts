import { test, expect } from '@playwright/test'



test('popup alert', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        console.log(`Dialog type : ${dialog.type()}`);
        console.log(`Alert message is : ${dialog.message()}`);
        dialog.accept();
        

    })
    await page.getByText('See an example alert', { exact: true }).click();
})

test('popup confirm 2', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        console.log(`Dialog type : ${dialog.type()}`);
        console.log(`Alert message is : ${dialog.message()}`);
        await dialog.accept('playwright');
    })

    await page.getByText('See a sample confirm', { exact: true }).click();
})


test('prompt confirm', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');


    page.once('dialog', async (dialog) => {
        console.log(`Dialog type : ${dialog.type()}`);
        console.log(`Alert message is : ${dialog.message()}`);
        await dialog.accept('playwright');


    })

    await page.getByText('See a sample prompt', { exact: true }).click();

})
