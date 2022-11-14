/*

    Input - My name is Akshay Khurana
    Output - My* @name** @@is*** @@@Akshay**** @@@@Khurana*****

*/

// Manisha Solution

let str1 = "My name is Akshay Khurana";
let arr3 = str1.split(" ");
console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
  arr3[i] = arr3[i].padStart(arr3[i].length + i, "@");
  arr3[i] = arr3[i].padEnd(arr3[i].length + i + 1, "*");
}

console.log(arr3);

let finalSentence1 = arr3.join(" ");
console.log(finalSentence1);

// Supriya Solution

let str = "My name is Akshay khurana";
let str2 = str.split(" ");
for (let i = 0; i < str2.length; i++) {
  str2[i] = str2[i]
    .padStart(str2[i].length + i, "@")
    .padEnd(str2[i].length + 2 * i + 1, "*");
}
let result = str2.join(" ");
console.log(result);

// Sahil Solution

let string2 = "My name is Akshay Khurana";
let arr = string2.split(" ");
let result1 = "";
let starc = 1;
let starad = 1;

/*
  Logic -



*/

for (let i = 0; i < arr.length; i++) {
  let nstr = arr[i];
  result1 += nstr;
  for (let j = 1; j <= starc; j++) {
    result1 += "*";
  }
  result1 += " ";
  for (let k = 1; k <= starad; k++) {
    if (starad < arr.length) {
      result1 += "@";
    } else {
      break;
    }
  }
  starc = starc + 1;
  starad = starad + 1;
}

console.log(result);
