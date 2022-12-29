import React from "react";
import ReactDOM from "react-dom";
import ComponentA from "ApplicationA/ComponentA";
import ComponentB from "ApplicationB/ComponentB";

import "./index.css";

const App = () => (
  <div className="container">
    <ComponentA />
    <ComponentB />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
