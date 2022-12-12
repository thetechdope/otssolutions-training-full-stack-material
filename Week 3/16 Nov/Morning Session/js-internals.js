console.log("Hello!");

Promise.resolve().then((p1) => console.log("Promise 1"));

setTimeout(function y() {
  console.log("Timeout 1!");
}, 0);

console.log("How are you?");

Promise.resolve().then((p1) => console.log("Promise 2"));

console.log("Bye!");
