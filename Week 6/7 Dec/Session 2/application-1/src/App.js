import React from "react";
import "./App.css";
import PersonComponent from "./PersonComponent";
import ProductComponent from "./ProductComponent";
import { Grid } from "semantic-ui-react";

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
    <Grid>
      {personDetails.map((currentIteration) => {
        return (
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <ProductComponent />
          </Grid.Column>
        );
      })}
    </Grid>
  );
}

export default App;
