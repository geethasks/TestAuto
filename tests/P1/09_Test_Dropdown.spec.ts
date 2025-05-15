import {test, expect } from '@playwright/test'


test('test dropdown', async( {page}) =>{

    await page.goto("https://www.facebook.com");
    await page.getByRole('button', {name: 'Create new account'}).click();


    await page.getByLabel('Month').selectOption('3');
    
    
});
