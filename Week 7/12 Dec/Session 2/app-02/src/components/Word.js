import React from "react";
import GenderRevealContext from "../contexts/GenderRevealContext";

const Word = () => {
  return (
    <div>
      <div> Gender is :</div>
      <GenderRevealContext.Consumer>
        {(gender) => {
          return gender;
        }}
      </GenderRevealContext.Consumer>
    </div>
  );
};

export default Word;
