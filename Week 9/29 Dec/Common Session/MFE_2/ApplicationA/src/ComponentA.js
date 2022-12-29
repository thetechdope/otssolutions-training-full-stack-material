import React, { useState } from "react";

function ComponentA() {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)} style={{ color: "blue" }}>
      {count}
    </div>
  );
}

export default ComponentA;
