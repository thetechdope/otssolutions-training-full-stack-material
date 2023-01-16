import fs from "fs";

console.log("Hello");

// readFile
/*
fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
*/

// readFileSync

const data = fs.readFileSync("./hello.txt");
console.log(data.toString());

console.log("Bye");

// writeFile

// fs.writeFileSync("hello.txt", "Hello World", (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

// appendFile

// fs.appendFile(
//   "hello.txt",
//   `
//   ** [${new Date()}, User -> ABC, Successfully Logged In!]
//   `,
//   function (err) {
//     if (err) throw err;
//     console.log("Updated File!");
//   }
// );

fs.unlink("hello.txt", (err) => {
  if (err) console.log(err);
  console.log("File Deleted");
});

console.log("Dead End!");
