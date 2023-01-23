import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import books from "./data/books.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

async function main() {
  if (MONGODB_URI) {
    const client = new MongoClient(MONGODB_URI);

    try {
      await client.connect();
      console.log("Connection Established Successfully!");

      // List Databases
      // await listDatabases(client);

      // CRUD Operations

      // Create

      //   await addNewBookEntry(client, {
      //     title: "Six Point Noone",
      //     author: "Chetan Bhagat",
      //     description:
      //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //     display: true,
      //   });

      // await addMultipleBookEntries(client, books);

      // Read

      // await showOneBookWithGivenAuthor(client, "Chetan Bhagat");
      // await showAllBooksWithGivenAuthor(client, "Chetan Bhagat", 3);

      // Update

      // await updateBookWithGivenAuthor(client, "Chetan Khurana", {
      //   display: true,
      // });

      // await upsertBookWithGivenAuthor(client, "Chetan Khurana", {
      //   display: true,
      // });

      await updateMultipleBooksWithGivenAuthor(client, "Chetan Bhagat", {
        display: false,
      });
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      await client.close();
    }
  } else {
    console.log("Please send a valid Mongo Cluster URI");
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

async function addNewBookEntry(client, newBook) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .insertOne(newBook);

  console.log(result);
}

async function addMultipleBookEntries(client, listOfBooks) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .insertMany(listOfBooks);
  console.log(result);
}

async function showOneBookWithGivenAuthor(client, nameOfAuthor) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .findOne({ author: nameOfAuthor });

  console.log("Result -> ", result);
}

async function showAllBooksWithGivenAuthor(
  client,
  nameOfAuthor,
  numberOfEntries = 5
) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .find()
    .toArray();

  console.log("Results -> ", result);
  console.log("No. Of Entries -> ", numberOfEntries);
}

async function updateBookWithGivenAuthor(
  client,
  nameOfAuthor,
  updatedBookDetails
) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .updateOne(
      { author: nameOfAuthor },
      { $set: updatedBookDetails },
      { upsert: false }
    );

  console.log("Result -> ", result);
}

async function upsertBookWithGivenAuthor(
  client,
  nameOfAuthor,
  updatedBookDetails
) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .updateOne(
      { author: nameOfAuthor },
      { $set: updatedBookDetails },
      { upsert: true }
    );

  console.log("Result -> ", result);
}

async function updateMultipleBooksWithGivenAuthor(
  client,
  nameOfAuthor,
  updatedBookDetails
) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .updateMany({ author: nameOfAuthor }, { $set: updatedBookDetails });

  console.log("Result -> ", result);
}
