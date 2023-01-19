import express from "express";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
import books from "./data/books.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.status(200);
  res.render("home");
});

app.get("/books", (req, res) => {
  res.status(200);
  res.render("books", {
    books,
  });
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;

  const searchedBook = books.find((book) => {
    return book.id == id;
  });

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
