/* Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 4: Personal notes”.
a. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
i. Field “Title”: điền nội dung ở cột “Tên action”
ii. Field “Content”: điền nội dung ở cột “Mô tả”
b. Thực hiện search với keyword “một hoặc nhiều” */

import { test } from "@playwright/test";

test("Bài học 4: Personal notes", async ({ page }) => {
  test.step("Đi đến trang và thêm mới 10 note", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    const action = [
      "click",
      "fill",
      "type",
      "hover",
      "check",
      "uncheck",
      "selectOption",
      "press",
      "dblclick",
      "dragAndDrop",
    ];
    const description = [
      "Hàm click dùng để thực hiện click vào các phần tử trên trang web",
      "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web",
      "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng",
      "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover",
      "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
      "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
      "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
      "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác",
      "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web",
      "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
    ];
    for (let i = 0; i < action.length; i++) {
      await page.locator('//input[@id="note-title"]').fill(`${action[i]}`);
      await page
        .locator('//textarea[@id="note-content"]')
        .fill(`${description[i]}`);
      await page.locator('//button[@id="add-note"]').click();
    }
  });
  test.step("Thực hiện search với keyword “một hoặc nhiều”", async () => {
    await page.locator('//input[@id="search"]').fill("một hoặc nhiều");
  });
});
