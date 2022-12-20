import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // if (id == 1) {
    //   setPrice(500);
    // } else if (id == 2) {
    //   setPrice(1000);
    // } else if (id == 3) {
    //   setPrice(800);
    // } else {
    //   setPrice(400);
    // }
    console.log(id);
    setContent(id);
  }, []);
  return (
    <>
      <div>Book {id}</div>
      <div> Content : {content}</div>
    </>
  );
};

export default Book;
