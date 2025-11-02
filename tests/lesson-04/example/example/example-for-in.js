/* Cho mảng: [1, 101, 2, 3, 5]
Yêu cầu: tìm phần tử chẵn đầu tiên */

// const arr = [1, 101, 2, 3, 5];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(`Phần tử chẵn đầu tiên là: ${arr[i]}`);
//     break;
//   }
// }

// const scores = [85, 92, 78, 95, 60, 88];
// for (i = 0; i < scores.length; i++) {
//   if (scores[i] < 90) {
//     continue;
//   }
//   console.log(`Điểm số lớn hơn 90: ${scores[i]}`);
// }

// let score = 87;
// if (score >= 90) {
//   console.log("Xuất sắc");
// } else if (score >= 80) {
//   console.log("Giỏi");
// } else if (score >= 70) {
//   console.log("Khá");
// } else if (score >= 60) {
//   console.log("Trung bình");
// } else {
//   console.log("Yếu");
// }

// let score = 75;
// let grade =
//   score >= 90
//     ? "Xuất sắc"
//     : score >= 80
//     ? "Giỏi"
//     : score >= 70
//     ? "Khá"
//     : score >= 60
//     ? "Trung bình"
//     : "Yếu";
// console.log(grade);

let result = "";
const student = {
  name: "Alex",
  grade: 4,
};

for (let key in student) {
  console.log(student[key]);
  result += student[key] + " ";     // Để in trên cùng một dòng thì cần cộng chuỗi
}
console.log(result);
