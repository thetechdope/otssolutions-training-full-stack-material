// Function Definition

function printHello() {
  console.log("Hello!");
}

// console.log(printHello);
// printHello();

// Function Expression

let printHelloMessage = function printHello() {
  console.log("Hello!");
};

// console.log(printHelloMessage);
// printHelloMessage();

// Function Currying

function func1(name) {
  let city = "Jaipur";

  return function () {
    console.log(`Name is : ${name}. My city is : ${city}.`);
  };
}

// console.log(func1("Aman Gaur"));

func1("Supriya")(); // Is this valid or not?

// Example 2

// function abc() {
//     console.log("ABC");
// }

// console.log(abc); // It will print Function Definition
// abc();


// Sum of 2 Numbers
