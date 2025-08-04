const express = require("express");
const bodyParser = require("body-parser");
const app = express();

console.log(`🚀 Server running at 80000`);

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// Set view engine
app.set("view engine", "ejs");

// Routes
const routes = require("./routes/index");
app.use("/", routes);
// 404 Page Handler (Always last)
app.use((req, res) => {
  res.status(404).render("404");
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});