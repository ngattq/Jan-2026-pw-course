import { test, expect } from '@playwright/test';

test("Bai 3: Todo page", async ({ page }) => {
    await test.step("Go to website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("click on Bai 3: Todo page", async () => {
        await page.locator("//a[text() = 'Bài học 3: Todo page']").click();
    });

    await test.step("Add 100 todo", async () => {
        // add 100 todo list
        const taskInput = page.locator("//input[@id = 'new-task']");
        const addButton = page.locator("//button[@id='add-task']");

        for (let i = 1; i <= 100; i++) {
            await taskInput.fill(`Todo${i}`);
            await addButton.click();
        };
    });

    await test.step("Delete odd todos", async () => {
        // delete odd todo in todo list
        page.on("dialog", async dialog => {
            await dialog.accept();
        });
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id = 'todo${i}-delete']`).click();
            }
        }
    })

})