import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" }; // State Initialisation

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    console.log("State : ", this.state.language);
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          {/* Here, prop will be value only */}
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
