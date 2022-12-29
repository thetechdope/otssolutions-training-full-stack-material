import React, { useState } from "react";

function ComponentB() {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count - 1)} style={{ color: "green" }}>
      {count}
    </div>
  );
}

export default ComponentB;
