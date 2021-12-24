const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyB49-12Vq8IPoPy4zz5LLpFTyRIl8rmXVU",
  authDomain: "wesopt-5fd65.firebaseapp.com",
  projectId: "wesopt-5fd65",
  storageBucket: "wesopt-5fd65.appspot.com",
  messagingSenderId: "48391740287",
  appId: "1:48391740287:web:d23ea039c0deed7d05d84a",
  measurementId: "G-H4Y7V187X0",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
