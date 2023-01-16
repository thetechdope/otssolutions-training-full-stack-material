import http from "http";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const hostname = process.env.HOSTNAME || "127.0.0.1";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    const fileData = fs.readFileSync("./templates/home.html");
    res.end(fileData.toString());
  } else if (req.url === "/about") {
    res.statusCode = 200;
    const fileData = fs.readFileSync("./templates/about.html");
    res.end(fileData.toString());
  } else {
    res.statusCode = 404;
    res.end("Page Not Found\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
