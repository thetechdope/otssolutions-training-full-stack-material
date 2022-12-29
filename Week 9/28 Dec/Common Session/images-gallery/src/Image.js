import React from "react";

function Image({ url }) {
  return (
    <div className="App">
      <img alt="sample_image" src={url} />
    </div>
  );
}

export default Image;
