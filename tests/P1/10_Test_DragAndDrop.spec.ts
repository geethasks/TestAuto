import {test } from '@playwright/test'


test('test drag drop',  async({ page }) => {

    await page.goto('https://jqueryui.com/droppable/');
    const iframe= page.frameLocator('[class="demo-frame"]');


    const dragelement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');

    
    await dragelement.dragTo(dropElement);




    await page.goto('https://autodesk.com');
    const iframe1 = page.frameLocator('[class="uhm-iframe"]');
    await iframe1.locator('[class="ua-fab-icon"]').click();
    await iframe1.locator('[class="privacy-close"]').click();

    


});
