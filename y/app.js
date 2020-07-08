var firebaseui = require("firebaseui");
var firebase = require("firebase");

var email = document.getElementById("email").value;
var password = document.getElementById("pass").value;

// Initialize the FirebaseUI Widget using Firebase.

const firebaseConfig = {
  apiKey: "AIzaSyC1B1hyi_SQbAtHJmD-dieaijR_LOMdUms",
  authDomain: "auth-1d7f1.firebaseapp.com",
  databaseURL: "https://auth-1d7f1.firebaseio.com",
  projectId: "auth-1d7f1",
  storageBucket: "auth-1d7f1.appspot.com",
  messagingSenderId: "202206578070",
  appId: "1:202206578070:web:9b213a0995c4081bdf49b7",
};

firebase.initializeApp(firebaseConfig);

//Sign in button
function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    window.location.replace("loggedin.html");
    if (email.length < 4) {
      alert("Please enter an email address.");
      return;
    }
    if (password.length < 4) {
      alert("Please enter a password.");
      return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById("quickstart-sign-in").disabled = false;
        // [END_EXCLUDE]
      });
    // [END authwithemail]
  }
  document.getElementById("quickstart-sign-in").disabled = true;

  //Sign up button
}
function handleSignUp() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email.length < 4) {
    alert("Please enter an email address.");
    return;
  }
  if (password.length < 4) {
    alert("Please enter a password.");
    return;
  }
  // Create user with email and pass.
  // [START createwithemail]
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  // [END createwithemail]
}

function initApp() {
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function (user) {
    // [START_EXCLUDE silent]
    document.getElementById("quickstart-verify-email").disabled = true;
    // [END_EXCLUDE]
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // [START_EXCLUDE]
      document.getElementById("quickstart-sign-in-status").textContent =
        "Signed in";
      document.getElementById("quickstart-sign-in").textContent = "Sign out";
      document.getElementById(
        "quickstart-account-details"
      ).textContent = JSON.stringify(user, null, "  ");
      if (!emailVerified) {
        document.getElementById("quickstart-verify-email").disabled = false;
      }
      // [END_EXCLUDE]
    } else {
      // User is signed out.
      // [START_EXCLUDE]
      document.getElementById("quickstart-sign-in-status").textContent =
        "Signed out";
      document.getElementById("quickstart-sign-in").textContent = "Sign in";
      document.getElementById("quickstart-account-details").textContent =
        "null";
      // [END_EXCLUDE]
    }
    // [START_EXCLUDE silent]
    document.getElementById("quickstart-sign-in").disabled = false;
    // [END_EXCLUDE]
  });
  // [END authstatelistener]

  document
    .getElementById("quickstart-sign-in")
    .addEventListener("click", toggleSignIn, false);
  document
    .getElementById("quickstart-sign-up")
    .addEventListener("click", handleSignUp, false);
  document
    .getElementById("quickstart-verify-email")
    .addEventListener("click", sendEmailVerification, false);
  document
    .getElementById("quickstart-password-reset")
    .addEventListener("click", sendPasswordReset, false);
}

// function getRegister() {
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("pass").value;
//   alert("Thank you for registering!");
// }

// function login() {
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("pass").value;
//   if (firebase.auth().signInWithEmailAndPassword(email, password)) {
//     firebase.auth().signInWithEmailAndPassword(email, password);
//     window.location.replace("loggedin.html");
//   } else {
//     alert("Either your username or password are incorrect please try again!");
//   }
// }

var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("signed in");
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    console.log("singed out");
    // User is signed out.
    // ...
  }
});
