// 1st Question
for (let i = 1; i <= 7; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log("Hello ", i);
}

// 2nd Question
for (let i = 1; i <= 7; i++) {
  if (i === 4) {
    break;
  }
  console.log("Bye ", i);
}

let counter = 7;

// 3rd Question
do {
  if ((counter * 2) % 5 == 0) {
    break;
  }
  counter--;
  console.log("Within Do While");
} while (counter >= 2);

console.log("Outside Do While");
