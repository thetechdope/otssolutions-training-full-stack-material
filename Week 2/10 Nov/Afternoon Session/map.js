// Map

const initialArray = [1, 2, 3, 4, 5];

// const double = (n) => n * 2;
// const triple = (n) => n * 3;

// const doubledArray = initialArray.map(double);
// const trippledArray = initialArray.map(triple);

console.log(
  initialArray.map(function (currentIteration) {
    // console.log(currentIteration);
    return currentIteration * 2;
  })
);

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27 },
  { firstName: "Salman", lastName: "Khan", age: 55 },
  { firstName: "Riya", lastName: "Rajput", age: 34 },
  { firstName: "Simran", lastName: "Kapoor", age: 27 },
];

// Result -> ["Akshay Khurana", "Salman Khan", "Riya Rajput", "Simran Kapoor"]

const newUsers = users.map((currentIteration) => {
  return currentIteration.firstName + " " + currentIteration.lastName;
});

console.log(newUsers);
