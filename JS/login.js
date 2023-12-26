var emailLogin = document.getElementById("emailLogin");
var passLogin = document.getElementById("passLogin");
var incorrect = document.getElementById("incorrect");
var allReq = document.getElementById("allReq");
var loginBtn = document.getElementById("loginBtn");

// ***************************************************************
// Checking the user
function userFound(email, pass) {
  var arrUsers = JSON.parse(localStorage.getItem("Users")) || [];
  for (var i = 0; i < arrUsers.length; i++) {
    if (arrUsers[i].email === email && arrUsers[i].password === pass) {
      console.log("Found");
      return true;
    }
  }
  return false;
}

// *****************************************************************
// Validating user
function validate() {
  var email = emailLogin.value;
  var pass = passLogin.value;
  if (email == "" || pass == "") {
    // Activating the allReq
    allReq.classList.remove("d-none");
    allReq.classList.add("d-block");
    // Removing the rest
    incorrect.classList.remove("d-block");
    incorrect.classList.add("d-none");
    return;
  }
  var username = getUsername(email, pass);

  if (username !== null) {
    window.location.href =
      "./home.html?username=" + encodeURIComponent(username);
  } else {
    incorrect.classList.remove("d-none");
    incorrect.classList.add("d-block");
  }
}
// *********************************************************************
// Getting the user
function getUsername(email, pass) {
  var arrUsers = JSON.parse(localStorage.getItem("Users")) || [];
  for (var i = 0; i < arrUsers.length; i++) {
    if (arrUsers[i].email === email && arrUsers[i].password === pass) {
      return arrUsers[i].userName;
    }
  }
  return null;
}
loginBtn.addEventListener("click", function () {
  validate();
});
