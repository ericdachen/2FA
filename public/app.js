firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

function getRegister() {
  var mail = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  signInWithEmailAndPassword(email, pass);
  alert("email is " + mail + " and password is " + password);
}
