const { Router } = require("express");
const admin = require("firebase-admin");
const permiso = require("./permiso.json");

const router = Router();

admin.initializeApp({
  credential: admin.credential.cert(permiso),
  databaseURL: "https://remotejobs-e7c44-default-rtdb.firebaseio.com",
});

router.get("/jobsinfornation", (req, res) => {
  const db = admin.database();

  /*let url = "https://comercioonline.page.link/test";

  let patron = /[a-zA-Z]+/g;
  let result = url.match(patron);

  let arrayTostring = result.join(",");

  console.log(arrayTostring);

  function finds(str) {
    let words = str.split(",");
    let myLongestWord = "";
    for (let word of words) {
      if (word.length > myLongestWord.length) {
        myLongestWord = word;
      }
    }

    return myLongestWord;
  }

  console.log(finds(arrayTostring));*/

  db.ref("JobsInformations").once("value", (snapshot) => {
    const data = snapshot.val();
    res.json(data);
  });
});

module.exports = router;
