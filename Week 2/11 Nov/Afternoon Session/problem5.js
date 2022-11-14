/*


*
*2*
*2*4*
*2*4*6*
*2*4*6*8*
*2*4*6*8*10*


*/

let text = "";

for (let i = 1; i <= 11; i = i + 2) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 != 0) {
      text += "*";
    } else {
      text += j;
    }
  }
  text += "\n";
}

console.log(text);
