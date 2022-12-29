import React from "react";
import ReactDOM from "react-dom";
import ComponentA from "./ComponentA";

import "./index.css";

const App = () => (
  <div className="container">
    <ComponentA />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
