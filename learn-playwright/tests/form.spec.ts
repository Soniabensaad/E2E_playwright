import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

test.afterEach(async ({ page }) => {
  console.log('Test finished');
  await page.close();
});

test.beforeEach(async ({ page }) => {
  console.log('Starting a test...');
  await page.goto('https://practice-automation.com/');
});

test('Pom form', async ({ page }) => {

   const formlogin = new FormPage(page)
   await formlogin.site()
   await formlogin.loginSite('test', 'test')
   await formlogin.chooseDrink()
   await formlogin.differentFromMilk()
   

});
