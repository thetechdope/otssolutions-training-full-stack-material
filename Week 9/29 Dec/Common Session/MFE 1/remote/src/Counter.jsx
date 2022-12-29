import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{color: "blue"}}>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
    </div>
  );
}

export default Counter;
