import React from "react";

class ColourComponent extends React.Component {
  render() {
    return (
      <div style={{ color: this.props.colour }}>
        This is a Colour Component.
      </div>
    );
  }
}

ColourComponent.defaultProps = {
  colour: "green",
};

export default ColourComponent;
