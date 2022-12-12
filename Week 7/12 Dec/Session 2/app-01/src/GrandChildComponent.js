import React, { useState, useEffect } from "react";

const GrandChildComponent = (props) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(`Component Mounted -> ${count} Times!`);
    }, []);
  }, [props]);

  return <button>{props.buttonText}</button>;
};

export default GrandChildComponent;
