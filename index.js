const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000);

app.get("/ehi", function (req, res) {
  res.json({ title: "Titolo" });
});
