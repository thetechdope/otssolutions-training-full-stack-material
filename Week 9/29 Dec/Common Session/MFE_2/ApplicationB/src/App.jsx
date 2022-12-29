import React from "react";
import ReactDOM from "react-dom";
import ComponentB from "./ComponentB";

import "./index.css";

const App = () => (
  <div className="container">
    <ComponentB />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
