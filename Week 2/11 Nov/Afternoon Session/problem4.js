/*

A
AB
ABC
ABCD
ABCDE
ABCD
ABC
AB
A

*/

// Sahil's Solution

let result2 = "";
let str1 = "ABCDE";
for (let i = 1; i <= str1.length; i++) {
  for (let j = 0; j < i; j++) {
    result2 = result2.concat(str1.slice(j, i));
    break;
  }
  result2 += "\n";
}
// console.log(result2);
// result2 = "";
for (let i = str1.length - 1; i >= 1; i--) {
  for (let j = 0; j < i; j++) {
    result2 = result2.concat(str1.slice(j, i));
    break;
  }
  result2 += "\n";
}
console.log(result2);

// Supriya's Solution

var alpha;

for (let i = 1; i <= 5; i++) {
  alpha = 65;
  for (let j = 1; j <= i; j++) {
    document.write(String.fromCharCode(alpha));
    alpha++;
  }
  document.write("<br>");
}

for (let i = 4; i >= 1; i--) {
  alpha = 65;
  for (let j = 1; j <= i; j++) {
    document.write(String.fromCharCode(alpha));
    alpha++;
  }
  document.write("<br>");
}


let n = 5;
let text = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    text += String.fromCharCode(j + 65);
  }
  text += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < n - i; j++) {
    text += String.fromCharCode(j + 65);
  }
  text += "\n";
}
console.log(text);
