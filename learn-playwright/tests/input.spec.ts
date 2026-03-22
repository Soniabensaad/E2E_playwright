import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => {
  console.log('Test finished');
  await page.close();
});

test.beforeEach(async ({ page }) => {
  console.log('Starting a test...');
  await page.goto('https://practice-automation.com/form-fields/');
});

test('input fields', async ({ page }) => {

  const inputUsername = page.getByLabel('Name', { exact: true });

  await inputUsername.fill('Ben');

  await inputUsername.fill('');

  await inputUsername.pressSequentially('Jerem', { delay: 400 });

  // locator assertion
  await expect(inputUsername).toHaveValue('Jerem');

  // generic assertion
  const input = await inputUsername.inputValue();

  await expect(input).toEqual("Jerem");

});
