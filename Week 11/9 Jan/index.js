// let sum = 0;

// function add(n) {
//   if (n === 0) {
//     // console.log(sum);
//     return sum;
//   }
//   sum += n;
//   add(n - 1);
// }

// add(7);
// add(7);

// console.log("Sum is ->", sum);

function printNumber(i) {
  if (i === 6) {
    console.log(i);
    return;
  }
  printNumber(i + 1);
  console.log(i);
}

printNumber(1);
