import "./App.css";
import Wrapper from "./Wrapper";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  return (
    <div className="App">
      <Wrapper
        render={(stateValue, incrementCounter) => {
          return (
            <ComponentA
              counter={stateValue.counter}
              color={stateValue.color}
              incrementCounter={incrementCounter}
            />
          );
        }}
      />
      <Wrapper
        render={(stateValue, incrementCounter) => {
          return (
            <ComponentB
              counter={stateValue.counter}
              color={stateValue.color}
              incrementCounter={incrementCounter}
            />
          );
        }}
      />
    </div>
  );
}

export default App;
