import react from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
  return <ChildComponent buttonText={props.buttonText} />;
};

export default ParentComponent;
