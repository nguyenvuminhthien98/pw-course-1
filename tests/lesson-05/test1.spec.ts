/* Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page”
a. Nhập đầy đủ các thông tin, click button register */

import { test } from "@playwright/test";

test("Bài học 1: Register Page", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.locator("//a[@href='01-xpath-register-page.html']").click();
  await page.locator('//input[@id="username"]').fill("ThienNguyen");
  await page
    .locator('//input[@id="email"]')
    .fill("nguyenvuminhthien98@gmail.com");
  await page.locator('//input[@id = "male"]').check();
  await page.locator('//input[@id = "reading"]').setChecked(true);
  await page.locator('//input[@id = "traveling"]').setChecked(true);
  await page
    .locator('//select[@id="interests"]')
    .selectOption({ value: "technology" });
  await page
    .locator('//select[@id="country"]')
    .selectOption({ value: "canada" });
  await page.locator('//input[@id="dob"]').type("05101998");
  await page
    .locator('//input[@id="profile"]')
    .setInputFiles("tests/lesson-05/key-takeaways.md");
  await page.locator('//textarea[@id="bio"]').fill("Biography");
  await page.locator('//input[@id="newsletter"]').check();
  await page.locator('//span[@class="slider round"]').click();
  await page.locator('//button[contains(text(), "Register")]').click();
});
