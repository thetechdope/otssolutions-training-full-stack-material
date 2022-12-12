import React from "react";

class PropBasedClassComponent extends React.Component {
  render() {
    return (
      <div>
        Hello, my name is {this.props.firstName} {this.props.lastName}.
      </div>
    );
  }
}

export default PropBasedClassComponent;
