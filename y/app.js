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
  alert(mail, password);
  //   signInWithEmailAndPassword(email, pass);
  console.log("you clicked the submit button");
}
