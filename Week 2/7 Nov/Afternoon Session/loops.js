// Loops

// Types of Loops

// For Loop

console.log("My Name is Akshay");
console.log("My Name is Akshay");
console.log("My Name is Akshay");
console.log("My Name is Akshay");
console.log("My Name is Akshay");

for (let i = 0; i <= 5; i++) {
  console.log("My Name is Akshay");
}

// 1st Part - Initital Condition
// 2nd Part - Logic
// 3rd Part - Increment or Decrement

/*

    0 <= 5 -> True -> Print -> 0 to 1
    1 <= 5 -> True -> Print -> 1 to 2
    2 <= 5 -> True -> Print -> 2 to 3
    3 <= 5 -> True -> Print -> 3 to 4
    4 <= 5 -> True -> Print -> 4 to 5
    5 <= 5 -> True -> Print -> 5 to 6
    6 <= 5 -> False -> Exit the Loop

*/

// While Loop

let counter = 100;

while (counter < 3) {
  console.log("Hello");
  counter++;
}

/*

    0 < 3 -> True -> Print Hello -> 0 to 1
    1 < 3 -> True -> Print Hello -> 1 to 2
    2 < 3 -> True -> Print Hello -> 2 to 3
    3 < 3 -> False -> Exit While Loop 

*/

// Do While Loop

let anotherCounter = 100;

do {
  console.log("Bye");
  anotherCounter++;
} while (anotherCounter < 3);


// Looping Backwards

counter = 5;

while (counter > 0) {
  console.log("Namaste!");
  counter--;
}
