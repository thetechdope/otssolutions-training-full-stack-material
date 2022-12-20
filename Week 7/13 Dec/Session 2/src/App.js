import logo from "./logo.svg";
import "./App.css";
// import Waste from './components/Waste';
import { useState, lazy, Suspense } from "react";
const Waste = lazy(() => import("./components/Waste"));

function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setHide(!hide)}>Toggle</button>
        {
          <Suspense fallback={<div>...Loading</div>}>
            {hide && <Waste />}
          </Suspense>
        }
      </header>
    </div>
  );
}

export default App;
