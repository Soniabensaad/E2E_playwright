import { test, expect } from '@playwright/test';
 test.afterEach(async ({ page }) => {
  console.log('Test finished');
  await page.close();
});
test.beforeEach(async ({ page }) => {
  console.log('Starting a test...');
  await page.goto('https://the-internet.herokuapp.com/');
});

test('visit the website', async ({ page }) => {

  await expect(page).toHaveTitle("The Internet");
  await page.getByText('Form Authentication').dblclick()
});

test.only('afterhook', async ({ page }) => {
 

  await expect(page).toHaveTitle("The Internet");
  await page.getByText('Forgot Password').dblclick()
});
