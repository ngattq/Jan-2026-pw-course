import { test, expect } from '@playwright/test';

test("Bai hoc 1: Register Page", async ({ page }) => {
    await test.step("Navigate to website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bai hoc 1: Register Page", async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Input username", async () => {
        await page.locator("//input[@id='username']").fill("Nga Tran");
    });

    await test.step("Input email", async () => {
        await page.locator("//input[@id='email']").fill("quynhnga@gmail.com");
    });

    await test.step("Select gender", async () => {
        await page.locator("//input[@id='male']").check();
    });

    await test.step("Select Hobbies", async () => {
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();
    });

    await test.step("Select Interests", async () => {
        await page.locator("//select[@id='interests']").selectOption('music');
    });

    await test.step("Select Country", async () => {
        await page.locator("//select[@id='country']").selectOption("canada");
    });

    await test.step("Select DoB", async () => {
        await page.locator("//input[@id='dob']").fill("1993-10-25");
    });

    await test.step("Upload file", async () => {
        await page.locator("//input[@id = 'profile']").setInputFiles("tests/lesson-05/test-data.txt");
    });

    await test.step("Input Biography", async () => {
        await page.locator("//textarea[@id='bio']").fill("text text text");
    });

    await test.step("Select Rate Us", async () => {
        await page.locator("//input[@id='rating']").fill("4");
    });

    await test.step("Select Favorite color", async () => {
        await page.locator("//input[@id='favcolor']").fill("#b07d7d");
    });

    await test.step("Subscribe", async () => {
        await page.locator("//input[@id = 'newsletter']").check();
    });

    await test.step("Enable feature", async () => {
        await page.locator("//label[text() = 'Enable Feature:']").click();
    });

    await test.step("Star rating", async () => {
        await page.locator("//div[@id = 'starRating']").click({ position: { x: 80, y: 10 } });
    });

    // await test.step("Customer Date", async() => {
    //     await page.locator("//input[@id = 'customDate']").fill("2026-04-20"); // error: web bị lỗi k nhập dc customer date, tạm thời comment đoạn này lại để code chạy
    // });

    await test.step("Click Register button", async () => {
        await page.locator("//button[text() = 'Register']").click();
    })
})