// Anonymous Function

function sum(a, b) {
  return a + b;
}

function outer(anotherFunction) {
  // console.log(anotherFunction);
  anotherFunction();
}

function printMessage() {
  console.log("This is a child function!");
}

outer(() => {
  console.log("This is a child function!");
});
