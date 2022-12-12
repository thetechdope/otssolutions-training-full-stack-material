import React, { useState } from "react";
import MaleOrFemaleComponent from "./MaleOrFemaleComponent";
import GenderRevealContext from "../contexts/GenderRevealContext";
import { Icon } from "semantic-ui-react";

function App() {
  const [gender, setGender] = useState("male");
  return (
    <div className="ui container">
      <div>
        Select a gender:
        <br />
        <br />
        <Icon name="male" onClick={() => setGender("male")} />
        <Icon name="female" onClick={() => setGender("female")} />
        <br />
        <br />
        <GenderRevealContext.Provider value={gender}>
          <MaleOrFemaleComponent />
        </GenderRevealContext.Provider>
      </div>
    </div>
  );
}

export default App;
