const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(`./main.html`, { root: __dirname });
});
app.get("/:dir", (req, res) => {
  const dir = req.params.dir;
  if (!fs.existsSync(`./htdocs/${dir}`)) {
    res.status(404);
    res.send("<center><h1>404 file not found</h1></center>");
  } else {
    res.sendFile(dir, { root: "./htdocs" });
  }
});
app.use("/", (req, res) => {
  res.status(404);
  res.send("<center><h1>404 file not found</h1></center>");
});
app.listen(3000, () => {
  console.log(`server start in http://localhost:3000`);
});
