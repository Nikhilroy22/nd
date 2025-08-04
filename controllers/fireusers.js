const { db, messaging } = require("../firebase");

const getAllUsers = async (req, res) => {
  try {
    const snapshot = await db.collection("Users").get();
    const users = [];

    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    console.log(users);

    res.render("users", { title: "All Users", users });
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Error fetching users");
  }
};

module.exports = { getAllUsers };