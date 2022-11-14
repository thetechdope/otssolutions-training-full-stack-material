//Function declaration aka //Function Statement

//Function Expression

//Anonymous Functions

//Difference b/w parameter and arguments

const arr = [1, 2, 3];

const double = function (arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
};

console.log(double(arr));

let myAdder = function (num1, num2) {
  let added = num1 + num2;
};

myAdder(1, 2);

//DEFAULT PARAMETERS IN FUNCTIONS

let guestUser = function (name = "urName", courseCount = 0) {
  return "Hello" + " " + name + "and your course count is" + " " + courseCount;
};

console.log(guestUser("sakshi", 3));
//create My Multiplier/

//DRY
const radius = [3, 1, 2, 4];

const calcAreaCircle = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  return output;
};

console.log(calcAreaCircle(radius));

//HIGHER ORDER FUNCTIONS

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const calcDia = (radius) => {
  return 2 * radius;
};
const calcWithHof = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};

console.log(calcWithHof(radius, area));
console.log(calcWithHof(radius, circumference));
console.log(calcDia(radius, calcDia));

// const calcCircumference = function (radius){
//     const output =[]
//     for(let i=0; i<radius.length;i++){
//         output.push(2*Math.PI* radius[i])
//     }

//     return output

// }

// console.log(calcCircumference(radius))

// const calcDia = function(radius){
//     const output =[]
//     for(let i=0; i<radius.length;i++){
//         output.push(2* radius[i])
//     }

//     return output
// }

// console.log(calcDia(radius))

//first class functions- Ability to be used like values by passing to another funtions or returning from another functions

//CALL BACKFUNCTIONS

const alert = () => {
  console.log("hello");
};

const button = document.querySelector("button");

button.addEventListener("click", () => alert("sakshi"));

// setTimeout(alert, 1000)
console.log(23);

//MAP

const arr2 = [5, 1, 3, 4];

//Double - [10,2,6,8]

//Triple [15,3,9,12]

// function double2(x){
//     return x*2
// }

const output = arr2.map((x) => x * 2);
console.log(arr2);
console.log(output);

//FILTER

function isOdd(x) {
  return x % 2;
}

const output2 = arr2.filter(isOdd);

console.log(output2);
//REDUCE

const arr3 = [5, 1, 3, 2];

//sum

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

const output3 = arr3.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output3);

const output4 = arr3.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }

  return max;
}, 0);

console.log(output4, "max value");
