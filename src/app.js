const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("namste test");
});

app.use("/hello", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});