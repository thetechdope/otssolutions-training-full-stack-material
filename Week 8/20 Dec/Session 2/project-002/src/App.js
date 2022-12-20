import "./App.css";
import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import LatestBook from "./LatestBook";

function App() {
  return (
    <div className="App">
      {/* <h1>Dynamic Routing</h1> */}
      {/* <h1>Routing Priority</h1> */}
      <h1>Nested Routes</h1>
      <Routes>
        <Route path="" element={<div>Root Route</div>}></Route>
        <Route path="/book">
          <Route index element={<div>Books</div>}></Route>
          <Route path=":id" element={<Book />}></Route>
          <Route path="latest" element={<LatestBook />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
