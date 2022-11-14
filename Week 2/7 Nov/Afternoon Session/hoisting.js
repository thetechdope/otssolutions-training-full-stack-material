/*
    Program Execution happens in 2 phases -

    1. Memory Creation Phase
    2. Execution Phase


    Memory Creation Phase -

    It assigns undefined to variables
    It assigns complete function definition to Functions
    
*/

console.log("Hello!");

console.log(firstName);
console.log(lastName);
console.log(city);

var firstName = "Akshay";
var lastName = "Khurana";
var city = "Jaipur";

console.log(firstName);
console.log(lastName);
console.log(city);

function abc() {
  var firstName = "Sakshi";
  console.log("ABC");
}

abc();
