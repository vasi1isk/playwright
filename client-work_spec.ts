import { test, expect } from '@playwright/test';

test('Navigate to Services and verify Client Work text', async ({ page }) => {
  // Navigate to the EPAM website
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.locator('header >> text=Services').click();

  // Click the "Explore Our Client Work" link
  await page.locator('text=Explore Our Client Work').click();

  // Verify "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});