/* Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 3: Todo page”.
a. Thêm mới 100 todo item có nội dung “Todo <i>”
b. Xoá các todo có số lẻ */

import { test } from "@playwright/test";

test("Bài học 3: Todo page", async ({ page }) => {
  test.step("Đi đến trang và thêm mới 100 todo item có nội dung “Todo <i>", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    for (let i = 1; i <= 100; i++) {
      await page.locator('//input[@id="new-task"]').fill(`todo ${i}`);
      await page.locator('//button[@id="add-task"]').click();
    }
  });
  test.step("Xoá các todo có số lẻ", async () => {
    page.on("dialog", (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i = i + 2) {
      await page.locator(`//button[@id="todo-${i}-delete"]`).click();
    }
  });
});
