function printMyDetails(obj) {
  console.log(`Name: ${obj.firstName} ${obj.lastName}`);
}

let person1 = {
  firstName: "Akshay",
  lastName: "Khurana",
};

console.log("Hello!");
printMyDetails(person1);

setTimeout(() => {
  console.log("Inside Set Timeout!");
}, 2000);

console.log("Bye!");
