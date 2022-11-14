/*

Pattern 2 -

   *
  ***
 *****
*******
 *****
  ***
   *


   *
  ***
 *****
*******

i = 1, Space = 3
i = 3, Space = 2
i = 5, Space = 1
i = 7, Space = 0

*/

let spaceCounter = 3;

for (let i = 1; i <= 7; i = i + 2) {
  var text = "";

  // Loop for Space
  for (let k = 1; k <= spaceCounter; k++) {
    text = text + " ";
  }

  // Loop for Printing *
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text + "\n");
  spaceCounter--;
}

spaceCounter = 1;

/*


 *****
  ***
   *


i = 5, Space = 1
i = 3, Space = 2
i = 1, Space = 3

*/

for (let i = 5; i >= 1; i = i - 2) {
  var text = "";

  // Loop for Space
  for (let k = 1; k <= spaceCounter; k++) {
    text = text + " ";
  }

  // Loop for Printing *
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text + "\n");
  spaceCounter++;
}
