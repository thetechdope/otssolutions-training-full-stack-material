import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ImagesContainer from "./ImagesContainer";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm != "") {
      const searchImages = async () => {
        if (searchTerm !== "") {
          console.log(`Searched Term : ${searchTerm}`);
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?client_id=vGRe5A8rZeNV_lY4TVEjTvpmA-tWEfgul7LAZx28XLA&page=1&query=${searchTerm}`
          );
          const imagesData = await response.data.results;
          console.log("Data -> ", imagesData);
          setImages(imagesData);
        }
      };

      searchImages();
    }

    // It will be called on unmount
    return () => {
      // This will lead to Memory Leaks
    };
  }, [searchTerm]);

  useEffect(async () => {}, []);

  // useEffect(() => {
  //   if (searchTerm !== "") {
  //     const searchImages = async () => {
  //       if (searchTerm !== "") {
  //         console.log(`Searched Term : ${searchTerm}`);
  //         const response = await axios.get(
  //           `https://api.unsplash.com/search/photos?client_id=vGRe5A8rZeNV_lY4TVEjTvpmA-tWEfgul7LAZx28XLA&page=1&query=${searchTerm}`
  //         );
  //         const imagesData = await response.data.results;
  //         console.log("Data -> ", imagesData);
  //         setImages(imagesData);
  //       }
  //     };

  //     searchImages();

  //     return () => {
  //       // this never gets called, hello memory leaks...
  //     };
  //   }
  // }, [searchTerm]);

  // const loadImages = async () => {
  //   const response = await axios.get(
  //     "https://api.unsplash.com/photos/?client_id=vGRe5A8rZeNV_lY4TVEjTvpmA-tWEfgul7LAZx28XLA&query=flower"
  //   );
  //   const imagesData = await response.data;
  //   setImages(imagesData);
  // };

  // https://api.unsplash.com/search/photos?page=1&query=tourism&client_id=DGrUDUd1_szERmrVoNkt0_LyHKBAgI3HJbLT6VpgPqo

  return (
    <div className="App">
      <br />
      <br />
      Search Images :{" "}
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      {/* <button style={{ marginLeft: "2rem" }} onClick={searchImages}>
        Search
      </button> */}
      <br />
      <br />
      <ImagesContainer images={images} />
    </div>
  );
}

export default App;
