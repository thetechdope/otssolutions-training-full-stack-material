// Closures

function printMyDetails() {
  let firstName = "Akshay";
  let age = 27;
  let city = "Meerut";
  return function () {
    console.log(`My name is ${firstName}. My age is ${age}.`);
  };
}


// printMyDetails()();

// OR

let print = printMyDetails();
print();
