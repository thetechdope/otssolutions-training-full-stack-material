// Destructuring

let array1 = ["Akshay", "Rohan", "Sumit", "Arpit", "Rishabh", "Sahil"];
let [a, b, c] = array1;

let [nameToBePrinted] = array1;
console.log(a, b, c);

function printAkshayName(name) {
  console.log(name);
}

printAkshayName(nameToBePrinted);
