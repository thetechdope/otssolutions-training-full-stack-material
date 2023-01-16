const path = require("path");

console.log(
  path.dirname("/Users/akshaykhurana/Desktop/Trainings//16 Jan/path-module.js")
);

console.log(
  path.extname(
    "/Users/akshaykhurana/Desktop/Trainings//16 Jan/path-module.html"
  )
);

console.log(path.isAbsolute("src/path-module.html"));
console.log(path.join(`${__dirname}`, "/index.html"));

// console.log(`${__dirname}`);
