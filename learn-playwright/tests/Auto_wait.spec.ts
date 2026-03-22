import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => {
  console.log('Test finished');
  await page.close();
});

test.beforeEach(async ({ page }) => {
  console.log('Starting a test...');
  await page.goto('http://uitestingplayground.com/ajax');
});

test('auto wait triggers', async ({ page }) => {

  await page.getByRole('button', { name: 'Button Triggering AJAX Request' }).click();

  const successMessage = page.getByText('Data loaded with AJAX get request.');

  await expect(successMessage).toHaveText('Data loaded with AJAX get request.');

});
