import react from "react";
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => {
  return <GrandChildComponent buttonText={props.buttonText} />;
};

export default ChildComponent;
