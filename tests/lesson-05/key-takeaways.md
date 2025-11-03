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

## Các thẻ HTML tiêu chuẩn thường gặp & chức năng

### Thẻ cấu trúc cơ bản (Structure tags)
- `<html>`: Thẻ gốc - bao trọn toàn bộ nội dung trang web.
- `<head>`: Chứa thông tin cấu hình và metadata cho website (tiêu đề, mô tả, script, style).
- `<body>`: Chứa nội dung hiển thị trên trình duyệt.
- `<div>`: Container dùng để nhóm các phần tử, chia layout, không có ý nghĩa ngữ nghĩa riêng.
- `<span>`: Container inline để nhóm hoặc định dạng một phần nhỏ trong dòng text.
- `<header>`: Phần đầu của trang, thường chứa logo, menu, tiêu đề.
- `<footer>`: Phần cuối trang, thường chứa bản quyền, thông tin liên hệ, link phụ.
- `<nav>`: Dùng để bao quanh menu điều hướng của website.
- `<section>`: Phân chia thành từng khu vực có nội dung riêng.

### Thẻ nội dung (Content tags)
- `<h1>`–`<h6>`: Các cấp tiêu đề, từ quan trọng nhất (`<h1>`) đến kém quan trọng nhất (`<h6>`).
- `<p>`: Thẻ đoạn văn bản, dùng cho nội dung text.
- `<a>`: Tạo liên kết/hyperlink tới trang khác hoặc tải file.
- `<img>`: Chèn hình ảnh vào trang web.
- `<ul>`: Tạo danh sách không thứ tự (bullet points).
- `<ol>`: Tạo danh sách có thứ tự (số thứ tự).
- `<li>`: Một mục trong danh sách (`ul` hoặc `ol`).

### Thẻ form (Quan trọng cho testing)
- `<form>`: Tạo biểu mẫu nhập liệu, thường dùng để submit thông tin lên server.
- `<input>`: Ô nhập liệu (text, password, checkbox, radio, email,...).
- `<button>`: Tạo nút bấm (submit hoặc action khác).
- `<select>`: Tạo dropdown list (danh sách lựa chọn).
- `<option>`: Mục trong dropdown (`select`), mỗi option là một lựa chọn.
- `<textarea>`: Vùng nhập văn bản nhiều dòng (content dài).

---

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