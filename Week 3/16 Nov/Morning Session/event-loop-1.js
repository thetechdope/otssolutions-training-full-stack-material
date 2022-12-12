console.log("Hello!");

Promise.resolve().then((p1) => console.log("Promise 1"));

setTimeout(function y() {
  console.log("Timeout 1!");
}, 500);

setTimeout(function x() {
  Promise.resolve().then((p1) => console.log("Promise 2"));
}, 500);

console.log("Bye!");

/*

Output -

Hello!
Bye!
Promise 1
Timeout 1!
Promise 2

*/