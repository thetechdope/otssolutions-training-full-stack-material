import React, { useState } from "react";
import "./App.css";
import ParentComponent from "./ParentComponent";

function App() {
  const [myState, setMyState] = useState(true);

  return (
    <div className="App">
      <ParentComponent buttonText="Click Me!" buttonColour="orange" />
      <br />
      <br />
      <button onClick={() => setMyState(!myState)}>Add/Remove Heading</button>
      <br />
      <br />
      {myState && <h1>I'm Akshay</h1>}
    </div>
  );
}

export default App;
