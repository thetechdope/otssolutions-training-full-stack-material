// Map

const initialArray = [1, 2, 3, 4, 5];

const double = (n) => n * 2;
const triple = (n) => n * 3;

const doubledArray = initialArray.map(double);
const trippledArray = initialArray.map(triple);

// console.log(initialArray);
// console.log(doubledArray);
// console.log(trippledArray);

// const users = [
//     { firstName: "Akshay", lastName: "Khurana", age: 27 },
//     { firstName: "Salman", lastName: "Khan", age: 55 },
//     { firstName: "Riya", lastName: "Rajput", age: 34 },
//     { firstName: "Simran", lastName: "Kapoor", age: 27 },
// ];

// Result -> ["Akshay Khurana", "Salman Khan", "Riya Rajput", "Simran Kapoor"]

// const arrayOfNames = users.map((user) =>
//     `${user.firstName} ${user.lastName}`
// );

// console.log(arrayOfNames);

/*
    All Users

    1. Akshay Khurana
    2. Salman Khan
    3. Riya Rajput
    4. Simran Kapoor

*/

// Filter

// [1, 2, 3, 4, 5]

/*

    After 1st iteration -> [1]
    After 2nd iteration -> [1]
    After 3rd iteration -> [1, 3]
    After 4th iteration -> [1, 3]
    After 5th iteration -> [1, 3, 5]

*/

console.log(
  initialArray.filter((n) => {
    // Even Number
    if (n % 2 == 0) {
      return false;
    }
    return true;
  })
);

console.log(
  initialArray.filter((n) => {
    // Even Number
    if (n % 2 == 0) {
      return true;
    }
    return false;
  })
);

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27 },
  { firstName: "Salman", lastName: "Khan", age: 55 },
  { firstName: "Riya", lastName: "Rajput", age: 34 },
  { firstName: "Simran", lastName: "Kapoor", age: 27 },
];

/*
    Output -> 
    [
        { firstName: "Akshay", lastName: "Khurana", age: 27 },
        { firstName: "Simran", lastName: "Kapoor", age: 27 }
    ]
*/

const filteredUsers1 = users.filter((user) => user.age == 27);
console.log(filteredUsers1);

/* Output -> ["Salman Khan", "Riya Rajput"] */

const filteredUsers2 = users.filter((user) => user.age > 27);
console.log(filteredUsers2);

const filteredNames = filteredUsers2.map(
  (user) => `${user.firstName} ${user.lastName}`
);
console.log(filteredNames);

const filteredNames1 = users
  .filter((user) => user.age > 57)
  .map((user) => `${user.firstName} ${user.lastName}`);
console.log(filteredNames1);

const filteredUsers3 = users.map((user) => {
  if (user.age > 27) {
    return `${user.firstName} ${user.lastName}`;
  }
});

console.log(filteredUsers3);

// Reduce

const arrayOfNumbers = [1, 2, 3, 5, 6, 9, 20];

// Sum

function findSum(arr) {
  let sum = 0; // Accumulating the sum of individual elements
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(findSum(arrayOfNumbers));

const calculatedSum = arrayOfNumbers.reduce((accumulator, currentIteration) => {
  accumulator = accumulator + currentIteration;
  return accumulator;
}, 0); // Here 0 is the initial value of the accumulator

console.log(calculatedSum);

/*

    const users = [
        { firstName: "Akshay", lastName: "Khurana", age: 27 },
        { firstName: "Salman", lastName: "Khan", age: 55 },
        { firstName: "Riya", lastName: "Rajput", age: 34 },
        { firstName: "Simran", lastName: "Kapoor", age: 27 },
    ];

*/

const sumOfAges = users.reduce((a, b) => {
  a = a + b.age;
  return a;
}, 0);

console.log(sumOfAges);

/*

    Assignment - 26th July

    const users = [
        { firstName: "Akshay", lastName: "Khurana", age: 27 },
        { firstName: "Salman", lastName: "Khan", age: 55 },
        { firstName: "Riya", lastName: "Rajput", age: 34 },
        { firstName: "Simran", lastName: "Kapoor", age: 27 },
    ];

    Using reduce,
    Get this Output -> ["Salman Khan", "Riya Rajput"]
    
*/

const filteredUsers10 = users.reduce((accumulator, currentIteration) => {
  if (currentIteration.age > 27) {
    accumulator.push(
      `${currentIteration.firstName} ${currentIteration.lastName}`
    );
  }
  return accumulator;
}, []);

console.log(filteredUsers10);
