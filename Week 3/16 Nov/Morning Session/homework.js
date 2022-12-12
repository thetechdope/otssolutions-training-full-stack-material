// 1. Homework -
// What is the Output with explaination?

console.log("Hello 1!");

Promise.resolve().then((p1) => console.log("Promise 1"));

console.log("Hello 2!");

setTimeout(function y() {
  console.log("Timeout 1!");
}, 500);

setTimeout(function x() {
  Promise.resolve().then((p1) => console.log("Promise 2"));
  setTimeout(() => {
    Promise.resolve().then((p1) => console.log("Promise 3"));
  }, 0);
  console.log("Hello 3!");
  Promise.resolve().then((p1) => console.log("Promise 4"));
  console.log("Hello 5!");
}, 500);

console.log("Bye!");

