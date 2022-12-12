import React from "react";
import "./App.css";
import PersonComponent from "./PersonComponent";

function App() {
  const personDetails = [
    {
      firstName: "Akshay",
      lastName: "Khurana",
      age: 27,
      hometown: "Meerut",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      age: 20,
      hometown: "Gurgaon",
    },
    {
      firstName: "Manisha",
      lastName: "More",
      age: 20,
      hometown: "Pune",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      age: 20,
      hometown: "Meerut",
    },
    {
      firstName: "Amit",
      lastName: "Sharma",
      age: 27,
      hometown: "Meerut",
    },
  ];

  const productDetails = [
    {
      productName: "iPhone 14 Pro Max",
      price: "1,39,900",
      productDescription: "Latest Flagship Phone from Apple",
    },
    {
      productName: "iPhone 14 Pro Max",
      price: "1,39,900",
      productDescription: "Latest Flagship Phone from Apple",
    },
    {
      productName: "iPhone 14 Pro Max",
      price: "1,39,900",
      productDescription: "Latest Flagship Phone from Apple",
    },
    {
      productName: "iPhone 14 Pro Max",
      price: "1,39,900",
      productDescription: "Latest Flagship Phone from Apple",
    },
  ];

  return (
    <div>
      {personDetails.map((currentIteration) => {
        return (
          <PersonComponent
            firstName={currentIteration.firstName}
            lastName={currentIteration.lastName}
            age={currentIteration.age}
            hometown={currentIteration.hometown}
          />
        );
      })}
    </div>
  );
}

export default App;
