console.log("Hello!");

setTimeout(function y() {
  console.log("Timeout 1!");
}, 500);

setTimeout(function x() {
  console.log("Timeout 2!");
}, 0);

setTimeout(function x() {
  console.log("Timeout 3!");
}, 800);

console.log("Bye!");

/*

Output -

Hello!
Bye!

*/
