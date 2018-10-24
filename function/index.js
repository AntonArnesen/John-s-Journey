// ADD IDENTATION!!!!!

// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(username, password, firstname, surname, email, journeyList) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.surname = surname;
    this.email = email; 
    this.journeyList = journeyList;
    }
  } 
// Create array called users
var users = JSON.parse(localStorage.getItem("users"));


// Hardcoded users in the users array
if(users === null){
  users = [];
  users.push(new User("CoolJoe", "1234", "Joe", "Reisinger", "joe@email.de", ""));
  users.push(new User("CoolAnna", "1234", "Anna", "Reisinger", "joe@email.de", ""));
}

// Define the buttons and span
var submit = document.getElementById('submit');
var forgot = document.getElementById('forgotPassword');
var logout = document.getElementById("logout");
var register = document.getElementById ('registerUser');
var resultSpan = document.getElementById('loginResult');

// Variabel to define the amount of wrong attempts you have
var attempt = 3;

// Function to go through the User Data to match Username/Password
function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

// Loop that goes through the User Data to idetify right or wrong Username/Password
  for (let i = 0; i < users.length; i++) {
      if (username == users[i].username && password == users[i].password) {
        {console.log (username + " is logged in!");

//Push username from logged in User in the local storage 
        localStorage.setItem("loggedInUser", users[i].firstname);

//redirect to new html side for logged in users 
        window.location = "journeyOverview.html";

//Set authenticatedUserId to userId to enable to change aunthenticatedUserId = null into new value
        aunthenticatedUserId = users[i].userId;
        console.log (aunthenticatedUserId)
        }
  } 
}
// Disabling fields after 3 attempts.
if( attempt == 0){    
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;

//Return false to get out of function
return false;
} else {

//Drecrement amount of attemps and show in span "loginResult"
  attempt--;
  resultSpan.innerText = "You've entered a wrong username or password. You have left "+attempt+" attempt(s).";
  }    
}

// Setting variable for un-authenticated user input
var validMail = false;
var validUsername = false;
var validPassword = false; 
var validFirstname = false;
var validSurname = false;

//Check if username is blank
  function checkUsername(username) {
  console.log(username);
    if(username !== "") 
    {
      validUsername = true; //Authenticating input 
      return (validMail)
    }
  
    alert("Please fill in username.")
    return (false)
  }; 

// function for valditating email input
  function validateEmailFunc(email) {
  if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email))
  {
    validMail = true; //Authenticating input
    return (validMail)
  }
  alert("You have entered an invalid email address.")
  return (false)
};

// function for valditating password 
  function checkPassword(password) {

// at least one number, one lowercase and one uppercase letter
// at least six characters
  if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password))
  {
    validPassword = true; //Authenticating input
    return (validPassword)
  }
  alert("Your password should be atleast six characters long, contain one lowercase and one uppercase letter.")
  return (false)
}

// function for valditating firstname input 
  function checkFirstname(firstname) {
  // at least one number, one lowercase and one uppercase letter
  // at least six characters
    if (/^[a-z\s]+$/.test(firstname))
    {
      validFirstname = true; //Authenticating input
      return (validFirstname)
    }
    alert("Your firstname cannot contain !#€%& or other signs")
    return (false)
  }

// function for valditating surname input 
  function checkSurname(surname) {

  // at least one number, one lowercase and one uppercase letter
  // at least six characters
    if (/^[a-z\s]+$/.test(surname))
    {
      validSurname = true; //Authenticating input
      return (validSurname)
    }
    alert("Your surname cannot contain !#€%& or other signs")
    return (false)
  }

//If all input has been authenticated, welcome and  redirect user to loginPage
  function userCreated () {
    if (validMail == true && validUsername == true && validPassword == true && validFirstname == true && validSurname == true){
      alert ("Welcome " + username + ". You'll now be redirected to the login Page.")
    window.location = "index.html";
    }
  }

// On "Click" validate input and push new user into array users
document.getElementById("registerUser").addEventListener("click", function() {
  
    username = document.getElementById("regUsername").value;
    password = document.getElementById("regPassword").value;
    firstname = document.getElementById("regFirstname").value;
    surname = document.getElementById("regSurname").value;
    email = document.getElementById("regEmail").value;
    journeyList = "";

// Call validateEmail funciton   
    let validateUsername = checkUsername(username);
// Call validatePassword function
    let validatePassword = checkPassword (password);
    //Etc
    let validateFirstname = checkFirstname(firstname);
    //Etc
    let validateSurname = checkSurname(surname);
   // Call validateEmail funciton   
   let validateEmail = validateEmailFunc(email);

//If all input has been authenticated, welcome and  redirect user to loginPage
    let redirectUser = userCreated (); 

    users.push(new User(username, password, firstname, surname, email, journeyList));
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users));
      });
// Redirecting when clicking on buttons 
function goToRegister () {
    window.location = "registrationForm.html";
  }
function forgotPassword () {

    window.location = "resetPassword.html";
  }

