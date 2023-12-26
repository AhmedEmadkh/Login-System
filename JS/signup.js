// Global Variables
var nameSignUp = document.getElementById("nameSignUp");
var emailSignUp = document.getElementById("emailSignUp");
var passSignUp = document.getElementById("passSignUp");
var allReq = document.getElementById("allReq");
var exist = document.getElementById("exist");
var invalid = document.getElementById('invalid');
var correctSignup = document.getElementById("correctSignup");
var addBtn = document.getElementById("addBtn");
var users = [];
if (localStorage.getItem("Users") != null) {
  users = JSON.parse(localStorage.getItem("Users"));
}
// *************************************************************
// Adding User
function addUser() {
  var userName = nameSignUp.value;
  var email = emailSignUp.value;
  var password = passSignUp.value;
  var user = {
    userName: userName,
    email: email,
    password: password,
  };
  userName = nameSignUp.value;
  userEmail = emailSignUp.value;
  userPass = passSignUp.value;
  // Check if inputs are valid
  if (
    !validateName(userName) ||
    !validateEmail(userEmail) ||
    !validatePass(userPass)
  ) {
        // Activating the exist
        invalid.classList.add("d-block");
        invalid.classList.remove("d-none");
        // Removing the rest
        exist.classList.add("d-none");
        exist.classList.remove("d-block");
        allReq.classList.remove("d-block");
        allReq.classList.add("d-none");
        correctSignup.classList.remove("d-block");
        correctSignup.classList.add("d-none");
    return;
  }
  if (userName == "" || email == "" || password == "") {
    // Activating the allReq
    allReq.classList.remove("d-none");
    allReq.classList.add("d-block");
    // Removing the rest
    correctSignup.classList.remove("d-block");
    correctSignup.classList.add("d-none");
    exist.classList.remove("d-block");
    exist.classList.add("d-none");
  } else if (userFound(user)) {
    // Activating the exist
    exist.classList.remove("d-none");
    exist.classList.add("d-block");
    // Removing the rest
    allReq.classList.remove("d-block");
    allReq.classList.add("d-none");
    correctSignup.classList.remove("d-block");
    correctSignup.classList.add("d-none");
  } else {
    users.push(user);
    console.log("users", users);
    localStorage.setItem("Users", JSON.stringify(users));
    // Activating the correctSignup
    correctSignup.classList.remove("d-none");
    correctSignup.classList.add("d-block");
    // Removing the rest
    exist.classList.remove("d-block");
    exist.classList.add("d-none");
    allReq.classList.remove("d-block");
    allReq.classList.add("d-none");
  }
}
// *************************************************************
// Checking if the User found
function userFound(user) {
  var arrUsers = JSON.parse(localStorage.getItem("Users")) || [];
  for (var i = 0; i < arrUsers.length; i++) {
    if (JSON.stringify(arrUsers[i]) === JSON.stringify(user)) {
      return true;
    }
  }
  return false;
}
// *************************************************************
// Name Validation
function validateName(text) {
  nameSignUp.classList.remove("is-valid", "is-not-valid");
  if (text.length >= 4) {
    nameSignUp.classList.add("is-valid");
    return true; // Validation successful
  } else {
    nameSignUp.classList.add("is-not-valid");
    return false; // Validation failed
  }
}
// *************************************************************
// Password Validation
function validatePass(pass) {
  passSignUp.classList.remove("is-valid", "is-not-valid");
  if (pass.length >= 6) {
    passSignUp.classList.add("is-valid");
    return true; // Validation successful
  } else {
    passSignUp.classList.add("is-not-valid");
    return false; // Validation failed
  }
}

// *************************************************************
// Validate Email
function validateEmail(email) {
  var validated = /^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$$/;
  return validated.test(email);
}

function validateInputemail(email) {
  emailSignUp.classList.remove("is-valid", "is-not-valid");
  if (validateEmail(email)) {
    emailSignUp.classList.add("is-valid");
  } else {
    emailSignUp.classList.add("is-not-valid");
  }
}
// *************************************************************
// Clear Form
function clear() {
  nameSignUp.value = "";
  emailSignUp.value = "";
  passSignUp.value = "";
}
// *************************************************************
// Clear Classes
function removeClasses() {
  nameSignUp.classList.remove("is-valid", "is-not-valid");
  emailSignUp.classList.remove("is-valid", "is-not-valid");
  passSignUp.classList.remove("is-valid", "is-not-valid");
}
// *************************************************************
// EventListener
addBtn.addEventListener("click", function () {
  addUser();

  userName = nameSignUp.value;
  userEmail = emailSignUp.value;
  userPass = passSignUp.value;
  if (
    validateName(userName) &&
    validateEmail(userEmail) &&
    validatePass(userPass)
  ) {
    removeClasses();
    clear();
    console.log("Validated");
  }else{
    console.log("Not Validated");
  }
});
