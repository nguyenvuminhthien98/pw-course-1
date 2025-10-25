/* 1. Tính tổng từ 1 đến 100. */
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

/* 2. In bảng cửu chương từ 2 đến 9. */
for (i = 2; i <= 9; i++) {
  console.log(`Bảng cửu chương ${i}:`);
  for (j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("");
}

/* 3. Tạo một mảng chứa các số lẻ từ 1 đến 99. */
let arr = [];
for (i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    arr.push(i);
  }
}
console.log(arr);

/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự
(ví dụ: user1@example.com, user2@example.com, ..., user10@example.com). */
let arrEmail = [];
for (i = 1; i <= 10; i++) {
  const email = `user${i}@example.com`;
  arrEmail.push(email);
}
console.log(arrEmail);

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100} */
let total = 0;
const arrRevenue = [
  { month: 1, total: 120 },
  { month: 2, total: 130 },
  { month: 3, total: 140 },
  { month: 4, total: 150 },
  { month: 5, total: 160 },
  { month: 6, total: 170 },
  { month: 7, total: 180 },
  { month: 8, total: 190 },
  { month: 9, total: 200 },
  { month: 10, total: 210 },
  { month: 11, total: 220 },
  { month: 12, total: 230 }
];
for (i = 0; i < arrRevenue.length; i++) {
  total += arrRevenue[i].total;
}
console.log("Tổng doanh thu:", total);
