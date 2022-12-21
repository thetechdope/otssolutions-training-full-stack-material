import React, { useEffect, useState } from "react";
import "./App.css";
import CheckError from "./CheckError";
import ErrorBoundaryFunctionalComponent from "./ErrorBoundaryFunctionalComponent";

function App() {
  const [containsError, setContainsError] = useState(false);

  useEffect(() => {
    // API Call
    // Error Occured
    // Update State
    setContainsError(true);
  }, []);

  return (
    <div className="App">
      {/* <ErrorBoundary>
        <CheckError containsError={true} />
      </ErrorBoundary>
      <ErrorBoundary>
        <CheckError containsError={false} />
      </ErrorBoundary>
      <ErrorBoundary>
        <CheckError containsError={true} />
      </ErrorBoundary>
      <ErrorBoundary>
        <CheckError containsError={false} />
      </ErrorBoundary>
      <ErrorBoundary>
        <CheckError containsError={true} />
      </ErrorBoundary> */}
      <ErrorBoundaryFunctionalComponent hasError={containsError} />
      Akshay Khurana
    </div>
  );
}

export default App;
