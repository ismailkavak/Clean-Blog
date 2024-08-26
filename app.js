const express = require("express");
const app = express();
const pageRoute = require("./routes/pageRoutes");

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use("/", pageRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});