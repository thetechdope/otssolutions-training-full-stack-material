import React from "react";
import ButtonContext from "./ButtonContext";

class Button extends React.Component {
  static contextType = ButtonContext; // This is valid only with Class Components
  // We can't use any other name except contextType here

  handleButtonClick = () => {};

  render() {
    return (
      <button
        style={{
          backgroundColor: `${this.context.buttonColor}`,
          border: "0px",
          margin: "10px",
        }}
        onClick={() => this.handleButtonClick()}
      >
        {this.context.buttonText}
      </button>
    );
  }
}

export default Button;
