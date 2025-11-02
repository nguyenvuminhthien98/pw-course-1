// const ages = [18, 22, 40, 56, 100];

// const result = ages.map((newAges) => newAges > 20);
// console.log(result);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => {
  console.log(`accumulator: ${accumulator}, current: ${current}`);
  return accumulator + current;
}, 0);
console.log(sum);
