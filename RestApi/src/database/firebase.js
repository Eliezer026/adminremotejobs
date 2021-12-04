const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://remotejobs-e7c44-default-rtdb.firebaseio.com/",
});

module.exports = admin;
