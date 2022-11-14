const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

/*

Using Reduce ->

Output ->

[
  "Akshay 27",
  "Simran 27",
]

*/

// Supriya's Solution

const useroutput = users.reduce((acc, curr) => {
  if (curr.age == 27) {
    acc.push(`${curr.firstName}  ${curr.age}`);
  }
  return acc;
}, []);

console.log(useroutput);


// Sahil's Solution

const secondOutput = users.reduce((final, curr) => {
  if (curr.age == 27) {
    final.push(curr.firstName + " " + curr.age);
  }
  return final;
}, []);

console.log(secondOutput);
