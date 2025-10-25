const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(30000); // 30 seconds
const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('I open the homepage', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://github.com/swapnilyavalkarOA/agentic-engineering-platform');
});

Then('I should see the title {string}', async function (expectedTitle) {
  const title = await page.title();
  if (title !== expectedTitle) {
    throw new Error(`Expected title to be "${expectedTitle}", but got "${title}"`);
  }
  await browser.close();
});