const root = ReactDOM.createRoot(document.getElementById("root"));
const goodMorning = React.createElement(
  "h1",
  { style: { color: "orange", fontFamily: "Comic Sans Ms" } },
  "Good Morning"
);

let goodEvening = React.createElement("h1", null, "Good Evening");

goodEvening.style.color = "Purple";

let currentHour = new Date().getHours();
root.render(currentHour > 12 ? goodEvening : goodMorning);

/*

    Good Morning -> Color = Orange
    Good Evening -> Color = Grey

*/
