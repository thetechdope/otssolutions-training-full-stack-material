/*

Output ->

[
  "My Name is Riya Rajput, I am 34 years old.",
  "My Name is Simran Kapoor, I am 27 years old.",
]

*/

// Supriya's Solution

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

const output3 = users
  .filter((curr) => {
    if (curr.gender == "female") {
      return true;
    }
  })
  .map((curr) => {
    return `My name is ${curr.firstName} ${curr.lastName}, I am ${curr.age} years old.`;
  });

console.log(output3);

// Sahil's Solution

const secondOut = users.reduce((final, e) => {
  if (e.gender == "female") {
    final.push(
      "My name is " +
        e.firstName +
        " " +
        e.lastName +
        ", I am" +
        e.age +
        " years old."
    );
    // final.push(
    //   `My name is ${curr.firstName} ${curr.lastName}, I am ${curr.age} years old.`
    // );
  }
  return final;
}, []);

console.log(secondOut);

// Manisha's Solution

const output1 = users
  .filter((curr) => {
    if (curr.gender == "female") {
      return true;
    }
  })
  .map((curr) => {
    return `My name is ${curr.firstName + " " + curr.lastName}. I am ${
      curr.age
    } years old.`;
  });

console.log(output1);

const finalArray1 = users.reduce((acc, currentValue) => {
  if (currentValue.gender == "female") {
    acc.push(
      `My name is ${currentValue.firstName} ${currentValue.lastName}. I am ${currentValue.age} years old.`
    );
  }
  return acc;
}, []);

console.log(finalArray1);

// Rahul's Solution

const rahulSolution = users
  .filter((user) => {
    if (user.gender === "female") {
      return true;
    }
  })
  .map((user) => {
    return `My name is ${user.firstName} ${user.lastName}. I am ${user.age} year old.`;
  });

console.log(rahulSolution);

// Hrihikesh's Solution

const persons = users
  .filter((curr) => {
    if (curr.gender == "female") {
      return true;
    }
  })
  .map((curr) => {
    return `My name is ${curr.firstName} ${curr.lastName}, I am  ${curr.age} years old`;
  });
console.log(persons);
