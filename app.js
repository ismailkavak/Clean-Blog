const express = require("express");
const app = express();

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Index Sayfası");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
