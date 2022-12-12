import React from "react";

function PropBasedFunctionComponent(props) {
  return (
    <div>
      My name is {props.firstName} {props.lastName}.
    </div>
  );
}

export default PropBasedFunctionComponent;
