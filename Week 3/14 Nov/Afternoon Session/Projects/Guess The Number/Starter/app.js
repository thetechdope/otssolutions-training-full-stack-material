let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
let numberOfAttempts = 10;
const lowOrHi = document.querySelector(".lowOrHi");

// Main Function
function checkGuess() {
  let guess = parseInt(document.getElementById("guessField").value);
  const guessesRemaining = document.querySelector(".lastResult");
  const guessSlot = document.querySelector(".guesses");

  if (guess === randomNumber) {
    console.log("You guessed it correctly!");
  } else if (guess > randomNumber) {
    numberOfAttempts--;
    alert("You guessed it more!");
  } else {
    numberOfAttempts--;
    console.log("You guessed it less!");
  }
}
