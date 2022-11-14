// Filter

const initialArray = [1, 2, 3, 4, 5];

// 1st Question
// Output -> [1, 3, 5];

const oddElementsArray = initialArray.filter((currentIteration) => {
  if (currentIteration % 2 == 0) {
    return false;
  }
  return true;
});

console.log(oddElementsArray);

/*
    currentIteration -> 1, return True
    currentIteration -> 2, return False
    currentIteration -> 3, return True
    currentIteration -> 4, return False
    currentIteration -> 5, return True
*/

// 2st Question
// Output -> [2, 4];

const evenElementsArray = initialArray.filter((currentIteration) => {
  if (currentIteration % 2 == 0) {
    return true;
  }
  return false;
});

console.log(evenElementsArray);

// 3rd Question

/*
    Output -> 
    [
        { firstName: "Akshay", lastName: "Khurana", age: 27 },
        { firstName: "Simran", lastName: "Kapoor", age: 27 }
    ]
*/

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27 },
  { firstName: "Salman", lastName: "Khan", age: 55 },
  { firstName: "Riya", lastName: "Rajput", age: 34 },
  { firstName: "Simran", lastName: "Kapoor", age: 27 },
];

const filteredUsers = users.filter((currentIteration) => {
  if (currentIteration.age == 27) {
    return true;
  }
  return false;
});

console.log(filteredUsers);

// 4th Question

// Output -

/*
    ["Salman Khan", "Riya Rajput"]
*/

const filteredUsers2 = users
  .filter((currentIteration) => {
    if (currentIteration.age > 27) {
      return true;
    }
    return false;
  })
  .map((element) => {
    return element.firstName + " " + element.lastName;
  });

console.log(filteredUsers2);
