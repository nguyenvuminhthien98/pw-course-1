// const student = {
//     name: "Alex",
//     finalGrade: 8.5,
//     class: {
//         name: "K19",
//         major: "Automation"
//     }
// }
// console.log(student.finalGrade, student.class.name);
// console.log(student["class"]["major"])

// const b = true;
// console.log(!b)

// const arrName = ["aaa", "aab","aba"];
// const arrAge = [22, 21, 29];
// console.log(arrName[0]);
// console.log(arrName.length - 1);

function printClassList(className) {
    console.log(`Class ${className}`);
}

const list = ["K18", "K19", "K20", "K21"]

for (i = 0 ; i <= list.length - 1 ; i++) {
    printClassList(list[i]);
}