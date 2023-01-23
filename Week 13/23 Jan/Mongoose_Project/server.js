const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // For reading .env file

const app = express();
const UserSchema = require("./UserSchema");

app.get("/", (req, res) => {
  console.log("Root Route Called!");

  mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => {
      console.log("Connection Established");
    })
    .catch((error) => {
      console.log(error);
    });

  const user1 = new UserSchema({
    firstName: "KL",
    lastName: "Rahul",
    gender: "Male",
    age: 30,
  });

  user1
    .save()
    .then(() => {
      console.log("Data Saved!");
      res.send("Data Saved!!");
    })
    .catch((error) => {
      console.log("Error Occured -> ", error);
      res.send("Error");
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at PORT -> ${process.env.PORT}`);
});
