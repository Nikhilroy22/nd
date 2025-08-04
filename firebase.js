// firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./nroy-7cc2e-firebase-adminsdk-fbsvc-375c2a3d30.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const messaging = admin.messaging();

module.exports = { db, messaging };