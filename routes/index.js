const express = require("express");
const router = express.Router();
const { sendToUserByName } = require("../controllers/notiapi");
const { getAllUsers } = require("../controllers/fireusers");

// Home Page
router.get("/", (req, res) => {
  res.render('index', { title: 'Admin' });
});

router.get("/pushnotification", (req, res) => {
  res.render("notification", { title: "Home na Page" });
});

router.get("/users", getAllUsers);
// Notification API
router.post("/send", sendToUserByName);

module.exports = router;