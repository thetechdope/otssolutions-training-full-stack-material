//Object Array to hold quotes, sources, citaitons and years
var quotes = [
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    source: "Dr. Seuss",
  },
  {
    quote: "This too, shall pass.",
    source: "Anonymous",
  },
  {
    quote:
      "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
    source: "Jose Luis Borges",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    source: "Albus Dumbledore",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: "1997",
  },
  {
    quote: "It's supposed to be hard. If it were easy, everyone would do it.",
    source: "Jimmy Dugan",
    citation: "A League of Their Own",
  },
  {
    quote: "It's supposed to be hard. If it were easy, everyone would do it.",
    source: "Jimmy Dugan",
    year: 1900,
  },
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

//Function to select random rgb color value
function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var randomColor = "rgb(" + red + "," + green + "," + blue + ")"; // rgb(2, 4, 4);
  return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object
function printQuote() {
  var quotes = getRandomQuote();

  var quotePara = document.getElementsByClassName("quote");
  quotePara[0].innerHTML = `${quotes.quote}`;

  var sourcePara = document.getElementsByClassName("source");
  sourcePara[0].innerHTML = `${quotes.source}`;


  document.body.style.backgroundColor = getRandomColor();
}

//Event listener on LoadQuote button to generate new quote
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
