import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Use Users Route
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(`${__dirname}`, "./templates/home.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(`${__dirname}`, "./templates/about.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
