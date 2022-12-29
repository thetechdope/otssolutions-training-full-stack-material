import React from "react";
import Image from "./Image";

function ImagesContainer({ images }) {
  return (
    <div className="App">
      <h1>Images Gallery</h1>
      {images.map((image) => {
        return <Image key={image.id} url={image.urls.small} />;
      })}
    </div>
  );
}

export default ImagesContainer;
