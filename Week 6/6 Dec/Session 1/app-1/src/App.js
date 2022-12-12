import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import PropBasedClassComponent from "./PropBasedClassComponent";
import PropBasedFunctionComponent from "./PropBasedFunctionComponent";
import ColourComponent from "./ColourComponent";
import StateComponent from "./StateComponent";

let person = {
  firstName: "Amit",
  lastName: "Sharma",
};

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
      <PropBasedClassComponent firstName="Akshay" lastName="Khurana" />
      <PropBasedFunctionComponent
        firstName={person.firstName}
        lastName={person.lastName}
      />
      <ColourComponent colour="green" />
      <ColourComponent colour="blue" />
      <ColourComponent colour="grey" />
      <ColourComponent colour="orange" />
      <ColourComponent />
      <StateComponent country="India" />
    </div>
  );
}

export default App;
