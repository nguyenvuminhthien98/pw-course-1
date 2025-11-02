# JavaScript

## 1. Phạm vi của biến

Phạm vi (*scope*) xác định nơi biến có thể truy cập.  
JavaScript có ba loại phạm vi:

### Toàn cục (Global Scope)
> Biến khai báo ngoài mọi hàm/block thì toàn cục, truy cập được ở mọi nơi trong file.

```javascript
var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";
function testFunction() {
  console.log(globalVar); // Truy cập được
  console.log(globalLet); // Truy cập được
}
```

### Phạm vi hàm (Function Scope)
> Biến khai báo bằng `var`, `let`, `const` trong hàm chỉ dùng trong hàm đó.

```javascript
function myFunction() {
  var functionScoped = "Chỉ có thể truy cập trong hàm này";
  let alsoFunctionScoped = "Tương tự";
  console.log(functionScoped); // OK
}
console.log(functionScoped); // ❌ Error: functionScoped is not defined
```

### Phạm vi khối (Block Scope)
> `let` và `const` có block scope, còn `var` thì không.

```javascript
if (true) {
  var varVariable = "var không có block scope";
  let letVariable = "let có block scope";
  const constVariable = "const cũng có block scope";
}
console.log(varVariable);    // ✅ OK - var không bị giới hạn bởi block
console.log(letVariable);    // ❌ Error: letVariable is not defined
console.log(constVariable);  // ❌ Error: constVariable is not defined
```

> ⚠️ **Lưu ý:** Hoạt động của `var` có thể gây nhầm lẫn, hạn chế sử dụng, nên dùng `let`/`const`.


### Hoisting

JavaScript sẽ di chuyển khai báo biến (`var`, `let`, `const`, hàm) lên đầu phạm vi trước khi bắt đầu thực thi code.

```javascript
console.log(x); // undefined (không lỗi)
var x = 5;

// Tương đương với:
var x;
console.log(x); // undefined
x = 5;

// Với let và const:
console.log(y); // ❌ Error: Cannot access 'y' before initialization
let y = 5;
```

---

## 2. Câu điều kiện nâng cao

### break

> **break** dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

### continue

> **continue** dùng để bỏ qua phần còn lại của lần lặp hiện tại, chuyển sang lần tiếp theo.

```javascript
const scores = [85, 92, 78, 95, 60, 88];
console.log("Điểm >= 80:");

for (let score of scores) {
  if (score < 80) continue;
  console.log(score);
}
// Output: 85, 92, 95, 88
```

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

### if...else...if

> Dùng để kiểm tra nhiều điều kiện tuần tự.

```javascript
let score = 85;
if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 80) {
  console.log("Giỏi");
} else if (score >= 70) {
  console.log("Khá");
} else if (score >= 60) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
// Output: Giỏi
```

### Ternary Operator

> Toán tử rút gọn cho các câu điều kiện.

```javascript
let age = 20;
let status = age >= 18 ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"

// Lồng nhiều ternary
let score = 75;
let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  score >= 60 ? "D" : "F";
// grade = "C"
```

---

## 3. Vòng lặp nâng cao

### for...in Loop

> Duyệt qua các thuộc tính có thể đếm được của một object (bao gồm cả thuộc tính prototype).

```javascript
const person = { name: "John", age: 30, city: "Hanoi" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: Hanoi
```

> ⚠️ **Không nên dùng `for...in` với mảng** vì cả thuộc tính mở rộng cũng được duyệt qua:

```javascript
const colors = ["red", "green", "blue"];
colors.customProperty = "rainbow";
for (let index in colors) {
  console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
// customProperty: rainbow
```

### forEach Method (dùng cho Array)

> Duyệt qua từng phần tử của mảng. Không dừng được bằng break/continue.

```javascript
const colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
  console.log(index + ": " + color);
});
// Output:
// 0: red
// 1: green
// 2: blue
```

---

## 4. Utils function

### String utils

Các hàm xử lý chuỗi. Đa số không thay đổi chuỗi gốc, chỉ trả về chuỗi mới.

| Hàm | Chức năng |
|-----| --------- |
| **trim()**              | Cắt khoảng trắng ở hai đầu chuỗi |
| **trimLeft()**          | Cắt khoảng trắng bên trái        |
| **trimRight()**         | Cắt khoảng trắng bên phải        |
| **toLowerCase()**       | Chuyển chuỗi thành chữ thường    |
| **toUpperCase()**       | Chuyển chuỗi thành chữ hoa       |
| **includes(substr)**    | Kiểm tra chuỗi có chứa chuỗi con `substr` không (true/false) |
| **replace(old, new)**   | Thay thế chuỗi `old` bằng chuỗi `new` lần đầu tiên gặp |
| **split(sep)**          | Tách chuỗi thành mảng theo ký tự/chuỗi `sep` |
| **substring(start, end)** | Lấy chuỗi con từ vị trí `start` đến trước vị trí `end` |
| **indexOf(substr)**     | Tìm vị trí đầu tiên của chuỗi con, trả về -1 nếu không tìm   |

---

### Array utils

Các hàm thao tác mảng (Array).
Lưu ý: Một số hàm thay đổi mảng gốc như `sort`, `push`, `pop`, `shift`, `unshift`.

| Hàm        | Chức năng |
|------------|-----------|
| **map**    | Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử. Độ dài không đổi. |
| **filter** | Tạo mảng mới gồm các phần tử thỏa mãn điều kiện. |
| **find**   | Tìm phần tử đầu tiên thỏa mãn điều kiện. Trả về phần tử hoặc `undefined`. |
| **reduce** | Tích lũy các phần tử thành một giá trị duy nhất (số, chuỗi, object, ...). |
| **some**   | Kiểm tra có ít nhất một phần tử thỏa mãn điều kiện (true/false).        |
| **every**  | Kiểm tra tất cả các phần tử có thỏa mãn điều kiện không (true/false).   |
| **sort**   | Sắp xếp lại mảng theo thứ tự (mặc định: alphabet/tăng dần). Thay đổi mảng gốc! |
| **push**   | Thêm phần tử cuối mảng, trả về độ dài mới. Thay đổi mảng gốc!           |
| **pop**    | Xóa và trả về phần tử cuối cùng. Thay đổi mảng gốc!                     |
| **shift**  | Xóa và trả về phần tử đầu tiên. Thay đổi mảng gốc!                      |
| **unshift**| Thêm phần tử vào đầu mảng, trả về độ dài mới. Thay đổi mảng gốc!        |

---

## 5. Một số lưu ý khi học JavaScript

- Ưu tiên dùng `let` và `const`, tránh dùng `var` (trừ khi thực sự cần hoisting)
- Hiểu rõ biến, phạm vi, hoisting để giảm lỗi khi code
- Chọn đúng kiểu vòng lặp và hàm util cho code ngắn gọn, dễ bảo trì
- Với mảng, cẩn thận các hàm thay đổi mảng gốc và pure function
- Tập luyện viết ví dụ nhỏ với từng hàm để ghi nhớ cách dùng

---