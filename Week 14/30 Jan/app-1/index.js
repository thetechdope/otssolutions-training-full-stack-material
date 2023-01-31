import express from "express";
import { engine } from "express-handlebars";
import dotenv from "dotenv";

dotenv.config();

const books = [
  {
    _id: "1",
    title: "2 Tickets To Heaven",
    author: "Priyanka Chopra",
    authorEmail: "desigirl@gmail.com",
    pages: 154,
    description: "A Small Book on Travel",
    display: true,
    createdAt: "2023-01-24T13:05:58.142Z",
  },
  {
    _id: "2",
    title: "6 Tickets To Heaven",
    author: "Sonam Kapoor",
    authorEmail: "abcdefg@gmail.com",
    pages: 154,
    description: "A Small Book on Travel",
    display: true,
    createdAt: "2023-01-24T13:08:05.314Z",
  },
];

const actors = [
  {
    id: 1,
    firstName: "Akshay",
    lastName: "Khurana",
    age: 27,
  },
  {
    id: 2,
    firstName: "Virat",
    lastName: "Kohli",
    age: 33,
  },
  {
    id: 3,
    firstName: "Sonam",
    lastName: "Kapoor",
    age: 40,
  },
  {
    id: 4,
    firstName: "Katrina",
    lastName: "Kaif",
    age: 39,
  },
];

// Backup Of Original Array
const backupOfActors = actors.map((x) => x);
console.log("Backup ", backupOfActors);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.status(200);
  res.send("We are learning Query Parameters");
});

app.get("/actors", (req, res) => {
  const { order } = req.query;
  if (order === "ascending") {
    res.status(200);
    let ascendingData = actors.sort(function (a, b) {
      return a.age - b.age;
    });
    res.render("actors", {
      actors: ascendingData,
    });
  } else if (order === "descending") {
    res.status(200);
    let descendingData = actors.sort(function (a, b) {
      return b.age - a.age;
    });
    res.render("actors", {
      actors: descendingData,
    });
  } else {
    res.status(200);
    res.render("actors", {
      actors: backupOfActors,
    });
  }
});

app.get("/search", (req, res) => {
  const { author } = req.query;

  const searchedBook = books.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );

  if (searchedBook.length > 0) {
    res.status(200);
    res.json(searchedBook);
  } else {
    res.status(200);
    res.send(`'${author}' hasn't written any book!`);
  }
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  console.log(a, b);
  if (a && b) {
    res.status(200);
    res.send(`Sum is ${parseInt(a) + parseInt(b)}`);
  } else {
    res.status(200);
    res.send(`Please send valid numbers!`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
