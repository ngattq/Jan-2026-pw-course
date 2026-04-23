import { test, expect } from '@playwright/test';

test("Bai 2: Product page", async ({ page }) => {
    await test.step("Go to website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bai 2: Product page", async () => {
        await page.locator("//a[text() ='Bài học 2: Product page']").click();
    });

    await test.step("Product 1: Add 2 products", async () => {
        // add 2 sản phẩm product 1
        await page.locator("//button[@data-product-id ='1']").click({ clickCount: 2 });
    });

    await test.step("Product 2: Add 3 products", async () => {
        // add 3 sản phẩm product 2
        await page.locator("//button[@data-product-id ='2']").click({ clickCount: 3 });
    });

    await test.step("Product 3: Add 1 product", async () => {
        // add 1 sản phẩm product 3
        await page.locator("//button[@data-product-id ='3']").click();
    })
});