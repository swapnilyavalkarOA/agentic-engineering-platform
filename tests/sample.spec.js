const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://github.com/swapnilyavalkarOA/agentic-engineering-platform');
  await expect(page).toHaveTitle('Agentic Engineering Platform');
});