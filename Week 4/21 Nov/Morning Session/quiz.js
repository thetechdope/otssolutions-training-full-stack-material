// Block

let count = 0;

if (count == 1) console.log("Yes");
else console.log("No");

// For Loop Question

let a = 0;
for (a; a < 5; a++) continue;
console.log(a);

function dog() {
  console.log("I am a dog!");
  console.log(`And it ${this.sound}.`);
  console.log(this);
}
// dog.sound = "Bark";

let dog1 = {
  sound: "barks",
};

let cat1 = {
  sound: "meows",
};

// dog.call(cat1);

let cat100 = dog.bind(dog1);
cat100();

function person() {
  console.log(`First Name : ${this.firstName}, Last Name: ${this.lastName}`);
}

let person1 = {
  firstName: "Akshay",
  lastName: "Khurana",
};

let person2 = {
  firstName: "Rahul",
  lastName: "Dravid",
};


let newPerson = person.bind(person2);
newPerson();

// Output?


