import React from "react";

const CheckError = ({ containsError }) => {
  if (containsError) {
    throw new Error("Error Occured!");
  }
  return <h1>Hello World!</h1>;
};

export default CheckError;
