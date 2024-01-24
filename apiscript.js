import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_q2uvFfJtYtn-CFmS3YMeI_X_U0byz6I",
  authDomain: "project-auth-e65a5.firebaseapp.com",
  databaseURL: "https://project-auth-e65a5-default-rtdb.firebaseio.com",
  projectId: "project-auth-e65a5",
  storageBucket: "project-auth-e65a5.appspot.com",
  messagingSenderId: "738281884617",
  appId: "1:738281884617:web:911b9437a2314ca1db3618",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

//  login with Google
let google_signup = document.querySelector("#google_signup");
google_signup.addEventListener("click", function () {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = credential.accessToken;
    console.log(user);

    setTimeout(() => {
      window.location.href = "/weather.html";
    }, 1000);
    
    document.getElementById("sign_out_btn").style.display = "block";
  });
});

//  signout

let sign_out = document.getElementById("sign_out_btn");


sign_out.addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      alert("Signout successfully !");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    })
    .catch((error) => {
      console.log("An error happened");
    });
});
