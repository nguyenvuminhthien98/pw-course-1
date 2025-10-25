/* 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau. */
function multiply(a, b) {
  console.log(a * b);
}
multiply(5, 6);
multiply(7, 8);

/* 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau. */
function findMin(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  console.log(min);
}
findMin(10, 5, 8);
findMin(3, 7, 2);

/* 3. Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số). 
Yêu cầu: Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả. */
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 90 }
];
const topStudents = [];
function getTopStudents(students, threshold) {
  for (i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudents.push(students[i].name);
    }
  }
  console.log(topStudents);
}
getTopStudents(students, 86);

/* 4. Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả. */
function calculateInterest(principal, rate, years) {
  const total = principal + principal * years * rate / 100;
  console.log(total);
}
calculateInterest(1000, 5, 3);