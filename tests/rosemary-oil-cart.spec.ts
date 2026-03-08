import { test, expect } from '@playwright/test';

test('Add Rosemary Oil to cart and verify', async ({ page }) => {
  // 1. Navigate to the site
  await page.goto('https://testerbud.com/practice-ecommerece-website');

  // 2. Search for Rosemary Oil
  const searchBox = page.locator('input[placeholder="Search for awesome products..."]');
  await searchBox.fill('Rosemary Oil');
  await page.keyboard.press('Enter');

  // 3. Click on add to cart button
  // Try both row and card layouts
  const productRow = page.locator('tr:has-text("Rosemary Oil")');
  if (await productRow.count() > 0) {
    const addToCartBtn = productRow.locator('button:has-text("Add to Cart")');
    await addToCartBtn.click();
  } else {
    const productCard = page.locator('.card:has-text("Rosemary Oil")');
    const addToCartBtn = productCard.locator('button:has-text("Add to Cart")');
    await addToCartBtn.click();
  }

  // 4. Verify product added to cart and print total price for item
  // Try to open cart
  const cartIcon = page.locator('a[href*="cart"]');
  if (await cartIcon.count() > 0) {
    await cartIcon.click();
    await page.waitForTimeout(1000);
  }
  const cartItem = page.locator('text=Rosemary Oil').first();
  await expect(cartItem).toBeVisible();

  // Try to extract price from nearby elements
  let priceText = '';
  const row = cartItem.locator('xpath=ancestor::tr');
  if (await row.count() > 0) {
    const priceCell = row.locator('td:has-text("₹")').first();
    if (await priceCell.count() > 0) {
      priceText = await priceCell.innerText();
    }
  } else {
    const card = cartItem.locator('xpath=ancestor::*[contains(@class,"card")]');
    if (await card.count() > 0) {
      const priceDiv = card.locator('text=₹').first();
      if (await priceDiv.count() > 0) {
        priceText = await priceDiv.innerText();
      }
    }
  }
  console.log('Rosemary Oil price:', priceText);
});
