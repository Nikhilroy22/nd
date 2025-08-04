// firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./nroy-7cc2e-firebase-adminsdk-fbsvc-ea12e7350a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const messaging = admin.messaging();

module.exports = { db, messaging };