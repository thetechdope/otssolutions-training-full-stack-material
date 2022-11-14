// Conditional Statements

// if/else

var number = 5;

if (number % 2 == 0) {
  console.log("It is an even number!");
} else {
  console.log("It is an odd number!");
}

var favouriteColour = "orange";

if (favouriteColour == "green") {
  console.log("Favourite colour is green!");
} else if (favouriteColour == "blue") {
  console.log("Favourite colour is blue!");
} else if (favouriteColour == "yellow") {
  console.log("Favourite colour is yellow!");
} else {
  console.log("There is no favourite colour!");
}

console.log("After If/Else");

// Ternary Operator

var favouriteCity = "Dehradun";

if (favouriteCity == "Jaipur") {
  console.log("Jaipur is love!");
} else {
  console.log("Jaipur is shit!");
}

favouriteCity == "Jaipur"
  ? console.log("Jaipur is love!")
  : console.log("Jaipur is shit!");

// Switch

var favouriteMonth = "July";

switch (favouriteMonth) {
  case ("January", "July"):
    console.log("Favourite Month is January or July!");
    break;
  case ("Februray", "August"):
    console.log("Favourite Month is February or August!");
    break;
  case ("March", "September"):
    console.log("Favourite Month is March or Septemeber!");
    break;
  case "April":
    console.log("Favourite Month is April!");
    break;
  default:
    console.log("Invalid Month!");
    break;
}

console.log("After Switch Case");
