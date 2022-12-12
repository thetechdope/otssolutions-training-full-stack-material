import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header buttonText="Log Out" buttonColor="red" />{" "}
      {/*  This will be Child Component for App Component */}
    </div>
  );
}

export default App;
