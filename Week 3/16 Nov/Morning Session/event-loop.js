console.log("Hello!");

Promise.resolve().then((p1) => console.log("Promise 1"));

setTimeout(function y() {
  console.log("Timeout 1!");
}, 1000);

setTimeout(function x() {
  Promise.resolve().then((p1) => console.log("Promise 2"));
}, 990);

console.log("How are you?");

Promise.resolve().then((p1) => console.log("Promise 3"));

console.log("Bye!");
