import mongoose from "mongoose";
import dotenv from "dotenv";
import BookSchema from "./models/Book.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

async function main() {
  if (MONGODB_URI) {
    try {
      mongoose
        .connect(MONGODB_URI)
        .then(() => {
          console.log("Connection Established");
        })
        .catch((error) => {
          console.log(error);
        });

      const newBookDetails = new BookSchema({
        title: "Bollywood Stories",
        author: "Chetan Bhagat",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        display: "true",
      });

      const result = await newBookDetails.save();
      console.log("Result -> ", result);
    } catch (error) {
      console.log("Error : ", error);
    }
  } else {
    console.log("Please send a valid Mongo Cluster URI");
  }
}

main().catch(console.error);
