import React from "react";

const ComponentB = ({ counter, color, incrementCounter }) => {
  return (
    <>
      <button
        style={{ padding: "2rem", color, fontWeight: "bold" }}
        onClick={incrementCounter}
      >
        {counter}
      </button>
    </>
  );
};

export default ComponentB;
