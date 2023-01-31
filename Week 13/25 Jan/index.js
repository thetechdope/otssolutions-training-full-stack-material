import express from "express";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Book from "./models/Book.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(bodyParser.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database Connected & Server running at http://localhost:${PORT}/`
      );
    });
  })
  .catch((e) => {
    console.log("Error - ", e);
  });

app.get("/", (req, res) => {
  res.status(200);
  res.render("home");
});

// /GET -> To Read All Books
app.get("/books", async (req, res) => {
  res.status(200);

  let booksAvailable = await Book.find();
  console.log(booksAvailable);

  res.render("books", {
    booksAvailable,
  });
});

// /GET -> To Read Specific Book With ID
app.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  let booksAvailable = await Book.find();
  console.log(booksAvailable);

  const searchedBook = booksAvailable.find((book) => {
    return book.id == id;
  });

  console.log(searchedBook);

  if (searchedBook) {
    res.status(200);
    res.render("book-details", {
      book: {
        searchedBook,
      },
    });
  }
});

app.get("/add-book", (req, res) => {
  res.status(200);
  res.render("new-book");
});
