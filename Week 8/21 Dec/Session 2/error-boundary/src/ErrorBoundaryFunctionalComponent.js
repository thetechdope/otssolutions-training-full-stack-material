import React from "react";

const ErrorBoundaryFunctionalComponent = ({ hasError }) => {
  return (
    <div>
      {hasError && <div> Error Occured!</div>} {/* Fallback UI */}
      {!hasError && <div> Hello World!</div>}
    </div>
  );
};

export default ErrorBoundaryFunctionalComponent;
