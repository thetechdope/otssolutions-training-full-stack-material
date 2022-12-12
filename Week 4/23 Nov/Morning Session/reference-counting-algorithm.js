// Reference Counting Algorithm

// Primtive Datatype

let name1 = "Supriya";
let name2 = name1; // Only value is being copied

console.log(name1, name2);
name2 = "Sahil";
console.log(name1, name2);


// Non Primitve Datatype

let person = {
  firstName: "Akshay",
  lastName: "Khurana",
  age: 27,
  city: "Meerut",
};

let anotherPerson = person;
anotherPerson.age = 30;

console.log(person);
console.log(anotherPerson);

person = null;
anotherPerson = null;
