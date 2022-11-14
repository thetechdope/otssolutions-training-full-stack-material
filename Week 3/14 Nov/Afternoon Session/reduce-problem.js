/*

Output ->

Using Reduce ->

[ 
    "Names - Akshay Khurana, Salman Khan, Riya Rajput, Simran Kapoor",
    "Sum of there age - SUM"
]

*/

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
  { firstName: "Kareena", lastName: "Kapoor", age: 27, gender: "female" },
  { firstName: "Karishma", lastName: "Kapoor", age: 27, gender: "female" },
  { firstName: "Suhana", lastName: "Kapoor", age: 27, gender: "female" },
];

let text = "Names - ";
let counter1 = users.length;

let output1 = users.reduce((accumulator, currentIteration) => {
  text += `${currentIteration.firstName} ${currentIteration.lastName}, `;
  if (counter1 == 1) {
    accumulator.push(text.slice(0, text.length - 2));
  }
  counter1--;
  return accumulator;
}, []);

let listOfNames = users.reduce((accumulator, currentIteration) => {
  accumulator += `${currentIteration.firstName} ${currentIteration.lastName}, `;
  return accumulator;
}, "");

console.log(listOfNames.slice(0, listOfNames.length - 2));

let sumOfAges = users.reduce((accumulator, currentIteration) => {
  accumulator += currentIteration.age;
  return accumulator;
}, 0);

console.log(sumOfAges);

let output = [];
output.push(`Names - ${listOfNames}`);
output.push(`Sum of their ages - ${sumOfAges}`);

console.log(output);