// firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./nde.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const messaging = admin.messaging();

module.exports = { db, messaging };