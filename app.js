const express = require("express");
const mongoose = require('mongoose')
const pageRoute = require("./routes/pageRoutes");
const courseRoute = require('./routes/courseRoutes')

const app = express();
// CONNECT DB
mongoose.connect('mongodb://127.0.0.1:27017/smartedu-db')

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// ROUTES
app.use("/", pageRoute);
app.use("/courses", courseRoute)

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});