const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const pageRoute = require("./routes/pageRoutes");
const courseRoute = require("./routes/courseRoutes");
const categoryRoute = require("./routes/categoryRoutes");
const userRoute = require("./routes/userRoute");

const app = express();
// CONNECT DB
mongoose.connect("mongodb://127.0.0.1:27017/smartedu-db");

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// GLOBAL VARIABLE
global.userIN = null;

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/smartedu-db" }),
  })
);

// ROUTES
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
