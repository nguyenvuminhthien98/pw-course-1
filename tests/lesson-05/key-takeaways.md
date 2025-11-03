## 1. JavaScript - Function nâng cao

- **Function Expression:**  
  Khai báo hàm bằng cách gán vào biến, ví dụ:  
  ```javascript
  const add = function(a, b) { return a + b; }
  ```
- **Arrow/Lambda Function:**  
  Cách viết ngắn dùng dấu `=>`, ví dụ:  
  ```javascript
  const add = (a, b) => a + b;
  ```
  - Có thể rút gọn nếu chỉ 1 dòng:
    ```javascript
    const double = x => x * 2;
    ```
  - Không có tham số thì vẫn dùng dấu ngoặc:
    ```javascript
    const greet = () => console.log("Hello!");
    ```
- **Anonymous Function:**  
  - Hàm không tên, dùng khi cần callback hoặc chỉ sử dụng 1 lần.
    ```javascript
    setTimeout(function() { console.log("Hi"); }, 1000);
    ```

---

## 2. DOM Terminology

- **DOM (Document Object Model):**
  - Là cách máy tính nhìn website theo kiểu cấu trúc cây.  
  - Mở bằng F12 hoặc chuột phải → Inspect → tab "Element".
- **Element/thẻ trong HTML:**
  - Có thẻ mở, thẻ đóng, thuộc tính, giá trị, text.
    ```html
    <option value="usa">United States</option>
    ```
    - Một số thẻ tự đóng: `<img />`, `<br />`, `<hr />`
- **Thuộc tính tiêu chuẩn HTML:**
  - Thẻ cấu trúc: `<html>`, `<head>`, `<body>`, `<div>`, `<span>`, `<header>`, `<footer>`, `<nav>`, `<section>`
  - Thẻ nội dung: `<h1>…<h6>`, `<p>`, `<a>`, `<img>`, `<ul>`, `<ol>`, `<li>`
  - Thẻ form: `<form>`, `<input>`, `<button>`, `<select>`, `<option>`, `<textarea>`
- **Demo HTML DOM tại:** https://material.playwrightvn.com/035-DOM-elements.html

---

## 3. Selector

- **Selector** là công cụ để chọn phần tử trên trang web, dùng cho tự động hóa test.
- **Có 3 loại selector thường dùng:**
  - **XPath:**  
    - Đi theo đường dẫn cây DOM, mạnh và linh hoạt, nhưng dài.
    - Ví dụ: `//button[normalize-space() = 'Add to cart']`
    - Có XPath tuyệt đối (`/`) và XPath tương đối (`//...`). Nên dùng kiểu tương đối.
  - **CSS Selector:**  
    - Ngắn gọn, nhanh, dùng cho trường hợp đơn giản hơn.
    - Ví dụ: `.add-to-cart` (class), `#email` (id)
  - **Playwright Selector:**  
    - Chỉ dành cho framework Playwright, tập trung vào nội dung giống người dùng nhìn thấy.
    - Ví dụ: `page.getByText("Add to cart");`
- **Khi chọn dùng loại selector:**
  - Playwright Selector > CSS Selector > XPath
  - Thực tế, cần biết cả 3 để làm chủ dự án và xử lý các case đặc biệt.

---

## 4. Playwright Cơ Bản

- **Playwright:** Framework hỗ trợ automation test đa trình duyệt, đa nền tảng.
- **Cú pháp cơ bản:**
  - **Khai báo một test:**
    ```javascript
    import { test } from '@playwright/test';
    test('<tên test>', async ({ page }) => {
        // code test ở đây
    });
    ```
  - **Test step (Bước nhỏ trong test case):**
    ```javascript
    await test.step('Tên step', async () => {
      // code từng bước ở đây
    });
    ```
    - Nên dùng step sao cho map đúng vào từng step trong test case thực tế để dễ bảo trì.
- **Tương tác chính:**
  - **Điều hướng:**  
    ```javascript
    await page.goto('https://pw-practice.playwrightvn.com/');
    ```
  - **Chọn phần tử:**  
    ```javascript
    page.locator('<selector>');
    ```
    - VD: `page.locator("//input[@id='email']")`
  - **Click:**  
    - Click đơn: `await page.locator("//button").click();`
    - Double click: `await page.locator("//button").dblclick();`
    - Click chuột phải: `page.locator("//button").click({ button: 'right' })`
    - Click kèm phím khác: `page.locator("").click({ modifiers: ['Shift'] })`
  - **Nhập liệu:**  
    - Dán text vào input: `page.locator("//input").fill('Playwright Viet Nam');`
    - Gõ từng ký tự: `page.locator("//input").pressSequentially('Playwright Viet Nam', { delay: 100 });`
  - **Radio/Checkbox:**  
    - Kiểm tra trạng thái chọn: `page.locator("//input").isChecked();`
    - Check/uncheck: 
      ```javascript
      page.locator("//input").check();
      page.locator("//input").setChecked(false);
      ```
  - **Select (Dropdown):**
    ```javascript
    await page.locator('//select[@id="country"]').selectOption({ label: 'USA' });
    ```
  - **Upload file:**
    ```javascript
    await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
    ```

---