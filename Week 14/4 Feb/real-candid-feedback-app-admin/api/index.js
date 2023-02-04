import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import CustomersModel from "./models/CustomersModel.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());

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

/*

/GET -> Get all customers

*/

app.get("/books", async (req, res) => {
  res.status(200);

  let customersAvailable = await CustomersModel.find();
  res.status(200).json(customersAvailable);
});
