# GIT

## 1. Thay đổi/chỉnh sửa commit message

- Sử dụng:
  ```bash
  git commit --amend -m "message"
  ```

---

## 2. Chuyển file từ Staging area về Working directory (Undo file đã add)

- Để bỏ staging cho một file:
  ```bash
  git restore --staged <file_name>
  ```
- Để bỏ staging cho tất cả file:
  ```bash
  git restore --staged .
  ```

---

## 3. Un-commit (reset commit)

- Reset về n commit trước:

  ```bash
  git reset HEAD~n
  ```

  Ví dụ:  
  Nếu có:

  - commit 1
  - commit 2
  - commit 3
  - commit 4

  Thực hiện:

  ```bash
  git reset HEAD~3
  ```

  Kết quả:

  - HEAD và branch hiện tại về commit 1.
  - Các thay đổi của commit 2, 3, 4 sẽ xuất hiện trong thư mục làm việc dưới dạng **unstaged** (chưa được stage), bạn có thể chỉnh sửa lại hoặc commit lại nếu muốn.

  **Lưu ý:**

  - Commit đầu tiên (commit gốc) sẽ không thể bị reset bằng git reset, muốn reset toàn bộ phải xóa thư mục `.git` và init lại.

---

## 4. Branching

### 4.1. Pull code

- Lấy code từ server:
  ```bash
  git pull origin main
  ```
- Nên thực hiện lấy code từ nhánh `main` trước khi tách nhánh mới để đảm bảo bạn tạo nhánh trên nền tảng code mới nhất.

### 4.2. Làm việc với nhánh

- **Xem danh sách nhánh:**

  ```bash
  git branch
  ```

  (Cần có ít nhất 1 commit mới có danh sách nhánh)

- **Tạo nhánh mới:**

  ```bash
  git branch <ten_branch>
  ```

  (Nhánh mới sẽ giống với nhánh hiện tại)

- **Chuyển sang nhánh khác:**

  ```bash
  git checkout <ten_branch>
  ```

- **Vừa tạo, vừa chuyển luôn:**

  ```bash
  git checkout -b <ten>
  ```

- **Xóa nhánh:**

  ```bash
  git branch -D <ten_nhanh>
  ```

  > ⚠️ Phải đứng ở nhánh khác trước khi xóa.

- Khi khởi tạo repo (`git init`), thường tạo nhánh mặc định là `main`.
  ```bash
  git config --global init.defaultBranch main
  ```

---

## 5. Ignore file

- Các file hoặc thư mục được liệt kê trong `.gitignore` sẽ không bị Git theo dõi.
- **Vì sao cần .gitignore?**

  - Để tránh commit các file không cần thiết như:
    - Files tạm hệ điều hành: `.DS_Store`, `Thumbs.db`, v.v.
    - Thư mục dependencies: `node_modules/`, `vendor/`
    - File build: `dist/`, `build/`, `*.exe`
    - File cấu hình môi trường: `.env`, cài đặt IDE
    - File nhạy cảm: API keys, certificates, passwords
    - Log, file cơ sở dữ liệu tạm thời

- **Một số cú pháp phổ biến trong .gitignore:**
  - Ghi chú: `# comment`
  - Bỏ qua file: `secret.txt`
  - Bỏ qua theo extension: `*.log`
  - Bỏ qua thư mục: `node_modules/`
  - Bỏ qua file ở mọi folder con: `**/*.tmp`
  - Không bỏ qua file: `!important.log`
  - Chỉ bỏ qua file ở thư mục gốc: `/TODO`
  - Bỏ qua tất cả file .txt trong doc/: `doc/**/*.txt`

---

# JavaScript

## 1. Convention (Quy ước đặt tên)

- **Mục đích:** Giúp code theo format chung, dễ đọc, dễ teamwork.
- **Các convention phổ biến:**
  - `snake_case`: (không sử dụng cho JS)
  - `kebab-case`: Tên file & folder (vd: `app-controller.js`)
  - `camelCase`: Tên biến, hàm (vd: `totalCount`)
  - `PascalCase`: Tên class (vd: `UserService`)

---

## 2. Dùng console.log

Một số cách in dữ liệu ra console:

```javascript
console.log("Toi la Nga");
console.log("Toi la Phong");
console.log(`${variable_name}`);
let name = "Nga";
console.log(`Toi la ${name}`);
console.log("Toi ten la" + name + " ");
```

---

## 3. Object (Đối tượng)

- Dùng để lưu trữ tập hợp giá trị theo dạng `key: value`.

```javascript
let user = { name: "Alex", age: 10, email: "alex@gmail.com" };
const product = {
  name: "Laptop",
  price: 500,
  isWindow: true,
  manufacturer: {
    name: "Acer",
    year: 2024,
  },
};
```

- Truy xuất giá trị và in ra:

```javascript
console.log("name = " + user.name); // "name = Alex"
console.log("manufacturer name = " + product.manufacturer.name); // "manufacturer name = Acer"
console.log("price = ", product["price"]); // "price = 500"
```

- Gán lại giá trị:

```javascript
user.age = 28;
product.manufacturer.year = 2025;
// age của user giờ là 28
// year của product là 2025
```

---

## 4. Array (Mảng)

- Truy xuất mảng:
  - Lấy độ dài: `array.length`
  - Lấy phần tử theo index: `array[0]`, `array[1]`, `array[2]`

---

## 5. Function (Hàm)

- Hàm là đoạn code được đặt tên và tái sử dụng.

- Khai báo:

```javascript
function tenHam() {
  // code
}
```
