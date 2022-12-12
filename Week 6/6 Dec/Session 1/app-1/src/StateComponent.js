import React from "react";

class StateComponent extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "Akshay", lastName: "Khurana", colour: "black" };
  }

  updateState = () => {
    console.log("Current State ", this.state);
    this.setState({ colour: "blue" });
    setTimeout(() => {
      console.log("Updated State ", this.state);
    }, 0);
  };

  render() {
    return (
      <div
        onClick={() => this.updateState()}
        style={{ color: this.state.colour }}
      >
        My name is {this.state.firstName} {this.state.lastName}, I am from{" "}
        {this.props.country}.
      </div>
    );
  }
}

export default StateComponent;
