const { test, expect } = require('@playwright/test');

test('Widget displays stock data correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/public/demo.html');

    const widget = await page.locator('stocks-widget');
    await expect(widget).toBeVisible();

    const symbol = await widget.locator('h2').textContent();
    const price = await widget.locator('p:has-text("Price")').textContent();
    const change = await widget.locator('p:has-text("Change")').textContent();

    expect(symbol).toBeTruthy();
    expect(price).toMatch(/\$\d+/);
    expect(change).toMatch(/\d+%/);
});