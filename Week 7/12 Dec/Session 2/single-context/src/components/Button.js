import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  function renderSubmit(value) {
    return value === "english" ? "Submit" : "Prastut";
  }

  return (
    <button className="ui button primary">
      <LanguageContext.Consumer>
        {(language) => {return language === 'english' ? 'Submit' : 'Prastut';}}
      </LanguageContext.Consumer>
    </button>
  );
};

export default Button;
