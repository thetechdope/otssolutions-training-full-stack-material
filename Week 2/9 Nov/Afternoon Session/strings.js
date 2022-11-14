let firstName = "Akshay";
let counter = 80;
let counter1 = 82;

console.log(firstName + counter + counter1); // Akshay8082
console.log(counter + counter1 + firstName + counter + counter1); // 162Akshay8082

// typeOf Operator

console.log(typeof typeof (counter + counter1)); // string

console.log(typeof (counter * undefined)); // number

// length

console.log(firstName.length); // 6
console.log("Akshay Khurana".length); // 14
console.log(" Akshay Khurana ".length); // 16

// trim

console.log(" Akshay Khurana ".trim().length); // 14

// trimStart

console.log(" Akshay Khurana ".trimStart().length); // 15

// trimEnd

console.log(" Akshay Khurana ".trimStart().length); // 15

// padStart

console.log("Akshay Khurana".padStart(18, "#"));

// padEnd

console.log(" Akshay Khurana ".padEnd(18, "#"));

// split

console.log("Akshay Khurana".split(""));
console.log("Akshay Khurana".split());
console.log("Akshay Khurana".split(","));
console.log("Akshay Khurana".split(" "));

let array1 = ["Akshay", true, 40, { firstName: "Akshay" }, undefined, null];
console.log(array1);

// concat

let city = "Jaipur";
let colour = "Pink";

console.log(city.concat(colour.padStart(5, " ")));
console.log(city.padEnd(7, " ").concat(colour));

// slice

let favouriteActor = "Salman Khan";

console.log(favouriteActor.slice(0, 6).length); // 6
console.log(favouriteActor.slice(0, 7).length); // 7
console.log(favouriteActor.slice(5)); // n Khan
console.log(favouriteActor.slice(-6)); // n Khan


// toUpperCase

console.log("Akshay".toUpperCase());



// Question

/*

Given a string, convert that into Camel Case

Ex -

A man is walking beside the road.
A Man Is Walking Beside The Road.

*/


let sentence = "A man is walking beside the road";
let array2 = sentence.split(" ");
console.log(array2);

for(let i = 0; i < array2.length; i++) {
    array2[i] = array2[i].charAt(0).toUpperCase() + array2[i].slice(1);
}
console.log(array2);
let finalSentence = array2.join(" ");
console.log(finalSentence);


/*

Given a string

Ex -

A man is walking beside the road
A* man** is*** walking**** beside***** the****** road*******

*/

let array3 = sentence.split(" ");
console.log(array3);

for(let i = 0; i < array3.length; i++) {
    array3[i] = array3[i].padEnd(array3[i].length + i + 1, "*")
}
console.log(array3);
let finalSentence1 = array3.join(" ");
console.log(finalSentence1);