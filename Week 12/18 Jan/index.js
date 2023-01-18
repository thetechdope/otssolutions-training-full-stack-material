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
  res.send("Hello World!");
});

app.get("/books", (req, res) => {
  res.status(200);
  res.render("books", {
    books: books,
  });
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;

  // console.log(books);
  console.log("ID -", id);

  const searchedBook = books.find((book) => {
    return book.id == id;
  });

  console.log(searchedBook);

  if (searchedBook) {
    res.status(200);
    res.render("specific-book", searchedBook);
  } else {
    res.status(200);
    res.render("no-book-found", {
      id,
    });
  }
});

app.get("/authors", (req, res) => {
  res.status(200);
  res.render("authors", {
    books: books,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
