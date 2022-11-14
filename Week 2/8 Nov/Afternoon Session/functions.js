// Function

// BMI Calculator

/*
    Logic -

    weight (kg) / [height (m)]2

*/

console.log("Hello!"); // Global Code

function bmiCalculator(weight, height) {
  // Paramters - weight & height

  let bmi = weight / (height * height); // Logic
  return bmi;
}

// Function Calling or Function Invocation
bmiCalculator(80, 1.8);

// Execution Context?

// What is a Function Expressions?

let person1 = bmiCalculator(84, 1.75);
let person2 = bmiCalculator(60, 1.45);
let person3 = bmiCalculator(100, 1.92);
let person4 = bmiCalculator(44, 1.34);
let person5 = bmiCalculator(67, 1.65);

console.log(person1, person2, person3, person4, person5);

// Function

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  printSum(sum);
  console.log("End of Calculate Sum Function");
  function printSum(calculatedSum) {
    console.log("Sum is : ", calculatedSum);
  }
}

calculateSum(6, 7);
