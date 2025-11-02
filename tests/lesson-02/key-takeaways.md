# 1. Version Control System
Là một hệ thống giúp người dùng có thể quản lý dễ dàng các phiên bản cập nhật. Người dùng có thể kiểm tra lịch sử thay đổi hoặc quay lại các phiên bản trước đó sau khi đã cập nhật.

**Có 3 loại hệ thống quản lý**
- Local Version Control System: Lưu trên máy tính (Khi máy tính hư thì không thể thao tác với các phiên bản đã lưu)

- Centralized Version Control System: Lưu ở một máy chủ tập trung - có thể là server (Khi máy tính hư hoặc server bị hư thì cũng khó có thể thao tác lấy được các phiên bản đã lưu)

- Distributed: Lưu ở nhiều máy khác nhau (Đây là hệ thống phổ biến nhất vì có khả năng backup dữ liệu một các linh hoạt, bất kể máy cá nhân hoặc server hư hỏng thì vẫn có thể lấy được các dữ liệu đã lưu)

# 2. Git - three states

Có 3 vùng lưu dữ liệu:
- **Working Directory**: Nơi lưu các file mới hoặc file có sự thay đổi.

- **Staging Area**: Nơi lưu các file chuẩn bị commit (Tạo các phiên bản).

- **Repository**: Nơi lưu các commit phiên bản.

Để đưa các file từ vùng **Working Directory** vào vùng **Staging Area**, sẽ sử dụng lệnh:
```
// Nếu muốn add tất cả các file có thay đổi hoặc file mới.
git add .
hoặc
// Nếu mong muốn chỉ add các file chỉ định.
Git add <Địa chỉ File>
```
Để đưa các file ở vùng **staging** vào **repository**, sử dụng lệnh:
```
git commit -m "<Nội dung commit>"
```
## 2.1 Tóm tắt các bước thực hiện khi có tạo mới file chưa có git quản lý

Bước 1: Mở terminal tại file, thực hiện lệnh khởi tạo repo local
```
git init
```
Bước 2: Tạo repo Github và liên kết tới repo local
```
git remote add origin <SSH URL>
```
Bước 3: Thêm file vào staging (các file có thay đổi hoặc file mới)
```
git add .  // Thêm tất cả file
Hoặc
git add <file>  // Thêm các file chỉ định
```
Bước 4: Tạo commit cho các phiên bản
```
git commit -m "<message>"
```
Bước 5: Push code
```
Git push origin main
```
*Note:*
- Bước 1 và 2 chỉ thực hiện 1 lần khi tạo mới repo.*
- Bước 3, 4, 5 thực hiện mỗi khi có thay đổi các file hoặc thêm file mới trong folder.
- Sau khi thực hiện add/commit file(s) thì có thể dùng lệnh:
    - `git status` để kiểm tra các file đã add vào staging.
    - `git log` để kiểm tra danh sách các commit.

## 2.2 Git - config
Để thực hiện được commit thì trước tiên cần định danh cho repo.
Thực hiện 2 lệnh để định danh:
```
git config --global user.name “Tên bạn”
git config --global user.email “email của bạn”
```
Nếu trong trường hợp mong muốn mỗi repo là một định danh khác nhau thì chỉ cần xóa `--global` trong lệnh.
```
git config user.name “Tên bạn”
git config user.email “email của bạn”
```
Vì khi sử dụng `--global` thì git đang hiểu là thông tin user được sử dụng cho toàn bộ các repo có trên máy tính.

## 2.3 Git - commit convention
Cần tuân thủ quy tắc đặt **commit message** chung để thông tin rõ ràng và chuyên nghiệp:
```
<type>: <short_description>
```
Trong đó:
- **type**: chore (sửa nhỏ lẻ), feat (thêm tính năng), fix (thay đổi nội dung lớn có ảnh hưởng)
- **short_description**: Mô tả ngắn gọn các thay đổi / cập nhật

## 2.4 Git - Workflow
**Không dùng global config**

init -> config -> add -> commit -> push

**Dùng global config**

init -> add -> commit -> push

# JavaScript Basic

Để thực hiện chạy 1 file code js, dùng lệnh:
```
node <file / địa chỉ file>
```
## Comment
- Có 2 cách sử dụng comment là: // hay /* <nội dung> */
- Comment dùng để "vô hiệu hóa" phần code không cần chạy hoặc để ghi chú thông tin cần thiết.

Ví dụ:
```javascript
// This code will execute
console.log('Xin chào');

/*
This code will not execute
console.log('Đoạn code này sẽ không chạy');
*/
```
## Biến và hằng số
### Biến
Từ biến trong “biến thiên”, có nghĩa là thay đổi được.

Ví dụ:

Khai báo biến:
    `<từ khoá> <tên biến> = <giá trị>`
    
    var name = “Better Bytes Academy”;
    let isLovePlaywright = true;
    
Sử dụng:

    console.log(name); // In ra Better Bytes Academy
    console.log(isLovePlaywright); // In ra true

Note:
- `var` cho phép khai báo lại, `let` thì không
- `var` có phạm vi global, còn `let` thì phạm vi theo block - code nằm trong cặp `{}` được gọi là "block code”

=> Với một đoạn code dài, sử dụng `var` có thể “quên” rằng đã khai báo trước đó -> Gây nhầm lẫn -> khai báo lại -> Chỉ sử dụng let.

### Hằng số
Hằng số là các giá trị không thay đổi được.
Khai báo hằng:
`<từ khoá> <tên hằng> = <giá trị>`

Từ khoá: `const`

```javascript
const slogan = "Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình"
```
- Mặc định dùng const - giúp code an toàn hơn, dễ đọc
hơn. -> Chỉ dùng let khi chắc chắn cần gán lại giá trị
-> **Không dùng var**.

## Data type
- Kiểu dữ liệu là loại dữ liệu mà biến đang mang.
- Có các kiểu dữ liệu cơ bản như:
    - Number (Số nguyên và số thực)
    - String (Chuỗi ký tự trong cặp dấu "", '', ``)
    - Boolean (Giá trị logic true / false)
- Để xác định được kiểu dữ có các cách:
    - Xem khi báo trong code
    - Sử dụng hàm typeof
    ```
    typeof <variable>
    Output: number || string || boolean
    ```
## Toán tử so sánh
- ==: so sánh lỏng lẻo. So sánh giá trị sau khi chuyển đổi kiểu (type coercion)
    - 5 == "5" // true (chuyển string thành number)
    - false == 0 // true (false chuyển thành 0)
- ===: So sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu
    - 5 === "5" // false (khác kiểu)
    - 5 === 5 // true (cùng kiểu, cùng giá trị)
- So sánh không bằng != và !==
    - 5 != "5" // false (chuyển string thành number)
    - true != 1 // false (true chuyển thành 1)
    - 5 !== "5" // true (khác kiểu)
    - 5 !== 5 // false (cùng kiểu, cùng giá trị)
- So sánh lớn hơn (>), nhỏ hơn (<), lớn hơn hoặc bằng (>=), nhỏ hơn hoặc bằng (<=)

## Toán tử logic

- &&: Phải thỏa cả 2 điều kiện
- ||: Chỉ cần thỏa 1 trong 2 điều kiện

## Toán tử 1 ngôi

- Prefix: Thực hiện phép toán trước rồi mới gán giá trị
    - ++x;
    - --x;

Ví dụ:
```javascript
x = 1;
b = ++x;
=> b = 2; x = 2
```

- Postfix: Gán giá trị trước rồi mới thực hiện phép tính
    - x++
    - x--

Ví dụ:
```javascript
x = 1;
b = x++;
=> b = 1; x = 2
```

## Câu điều kiện if

Câu điều kiện if là phần để kiểm tra điều có thỏa hay không để thực hiện các lệnh bên trong if. Nếu điều không thỏa thì các lệnh bên trong sẽ không thực hiện.

Ví dụ:
```javascript
let hour = 8;
if (hour <= 11) {
console.log(“Good morning”);
}
/* sẽ in ra good morning vì hour thỏa điều kiện nhỏ hơn 11. 
Nếu hour > 11 thì sẽ không in kết quả*/
```
## Vòng lặp for
Vòng lặp for dùng để lặp các hoạt dộng ở một số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng bên trong vòng lặp.

Ví dụ:
``` javascript
for (let i = 0;i < 5; i++) {
console.log("Xin chào!")
}
// Sẽ in ra 5 lần "xin chào!" vì i chạy từ 0 -> 4
```