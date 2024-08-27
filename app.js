const express = require("express");
const mongoose = require('mongoose')
const pageRoute = require("./routes/pageRoutes");

const app = express();
// CONNECT DB
mongoose.connect('mongodb://127.0.0.1:27017/test')

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use("/", pageRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});