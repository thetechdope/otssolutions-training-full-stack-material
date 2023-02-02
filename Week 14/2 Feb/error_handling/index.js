import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import tryCatch from "./utils/tryCatch.js";
import CustomError from "./CustomError.js";
import { PAGE_NOT_FOUND_ERROR } from "./utils/errorCode.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

const fetchUserDetails = () => {
  return undefined;
};

app.get("/", (req, res) => {
  res.status(200).json({ successfull: true });
});

app.get(
  "/user",
  tryCatch((req, res, next) => {
    const userData = fetchUserDetails();
    if (!userData) {
      throw new CustomError(PAGE_NOT_FOUND_ERROR, "User Data Not Found", 350);
    }

    res.status(200).json({
      message: "Hello World",
    });
  })
);

app.get(
  "/add-new",
  tryCatch((req, res, next) => {
    const userData = fetchUserDetails();
    if (!userData) {
      throw new Error("User Data Not Found!");
    }

    res.status(200).json({
      message: "Hello World",
    });
  })
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
