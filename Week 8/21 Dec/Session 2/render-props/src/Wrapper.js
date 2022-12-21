import React from "react";

class Wrapper extends React.Component {
  state = { counter: 0, color: "blue" };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return <div>{this.props.render(this.state, this.incrementCounter)}</div>;
  }
}

export default Wrapper;
