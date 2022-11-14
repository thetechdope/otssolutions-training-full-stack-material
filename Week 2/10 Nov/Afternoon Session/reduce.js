// Reduce

// Sum

const arrayOfNumbers = [1, 2, 3, 5, 6, 9, 20];

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log("Sum is ", sum);
}

sum(arrayOfNumbers);

const sumOfElements = arrayOfNumbers.reduce((accumulator, currentIteration) => {
  accumulator += currentIteration;
  return accumulator;
}, 0);

console.log(sumOfElements);

// Calculate Sum of All Ages

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27 },
  { firstName: "Salman", lastName: "Khan", age: 55 },
  { firstName: "Riya", lastName: "Rajput", age: 34 },
  { firstName: "Simran", lastName: "Kapoor", age: 27 },
];

// const ageArray = users.map((currentIteration) => {
//   return currentIteration.age;
// });

// console.log(ageArray);

const sumOfAges = users.reduce((accumulator, currentIteration) => {
  accumulator += currentIteration.age;
  return accumulator;
}, 0);

console.log(sumOfAges);
