console.log("Hello");

function func1() {
  console.log("Start of Function 1");

  func2("Hello from Function 1");

  function func2(input) {
    console.log("Start of Function 2");
    console.log(input);
    console.log("End of Function 2");
  }

  console.log("End of Function 1");
}

func1();

console.log("Bye");
