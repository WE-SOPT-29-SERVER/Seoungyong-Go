const admin = require("firebase-admin");
const serviveAccount = require("./wesopt-5fd65-firebase-adminsdk-3od7s-d40c21aacf.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviveAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};
