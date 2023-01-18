import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { userRouter } from "./routes/usersRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Users API!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
