import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext; // This method is only used if we want to link only 1 Context

  render() {
    let text;

    if (this.context === "english") {
      text = "Name";
    } else if (this.context === "hindi") {
      text = "Naam";
    } else if (this.context === "hindi pk") {
      text = "Tarif";
    } else {
      text = "NAME"; // For Canada
    }

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
