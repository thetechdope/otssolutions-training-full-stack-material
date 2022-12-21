import React from "react";

const ComponentA = ({ counter, incrementCounter, color }) => {
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

export default ComponentA;
