import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/Book.js";
import bodyParser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database Connected & Server running at http://localhost:${PORT}/`
      );
    });
  })
  .catch((error) => console.log("Error Occured - ", error));

app.get("/", () => {
  console.log("Welcome to Books API!");
});

app.post("/", async (req, res) => {
  try {
    const newBookDetails = await Book.create(req.body);
    //newBookDetails.save();
    newBookDetails.createdAt = "1999-01-24T13:05:58.142Z";
    console.log("Book : ", newBookDetails);
  } catch (error) {
    console.log(error.message);
  }
});
