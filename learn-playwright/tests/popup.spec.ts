import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice-automation.com/form-fields/');
});

test('static dropdown', async ({ page }) => {
const dropdown = page.getByRole('combobox')
await dropdown.selectOption('yes')
await dropdown.selectOption('no')
await dropdown.selectOption('undecided')
await expect(dropdown).toHaveValue('undecided')


});
