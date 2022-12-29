import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

import "./index.css";

const App = () => (
  <div className="container">
    This is a Remote Application
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
