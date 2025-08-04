// controllers/notificationController.js
const { db, messaging } = require("../firebase");

const sendToUserByName = async (req, res) => {
  const { username, title, body } = req.body;

  if (!username || !title || !body) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const snapshot = await db.collection("Users").where("name", "==", username).limit(1).get();

    if (snapshot.empty) {
      return res.status(404).json({ error: "User not found" });
    }

    const userDoc = snapshot.docs[0];
    const token = userDoc.data().token;

    if (!token) {
      return res.status(400).json({ error: "User has no token" });
    }

    const message = {
      token: token,
      notification: { title, body },
      android: { priority: "high" }
    };

    const response = await messaging.send(message);
    res.json({ success: true, response });

  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { sendToUserByName };