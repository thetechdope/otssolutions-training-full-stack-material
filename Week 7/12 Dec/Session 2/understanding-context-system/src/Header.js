import React, { Component } from "react";
import Button from "./Button";

const Header = (props) => {
  return (
    <div>
      This is a Header Component
      <br />
      <Button />
    </div>
  );
  {
    /* 
    Button Component will be Child Component for Header Component & Grand Child Component for App Component
    */
  }
};

export default Header;
