// ADD IDENTATION!!!!!

// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(username, password, firstname, surname, country, email, gender) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.surname = surname;
    this.country = country; 
    this.email = email; 
    this.gender = gender; 
    }
  } 
// Create array called users
var users = JSON.parse(localStorage.getItem("users"));


// Hardcoded users in the users array
if(users === null){
  users = [];
  users.push(new User("CoolJoe", "1234", "Joe", "Reisinger", "Germany", "joe@email.de", 1));
  users.push(new User("CoolAnna", "1234", "Anna", "Reisinger", "Germany", "joe@email.de", 2));
}

// In order to authenticate logged in user we create a variable and assign null
var aunthenticatedUserId = null

// Define the buttons and span
var submit = document.getElementById('submit');
var forget = document.getElementById('forgotPassword');
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

// If Username or Password is not right than it counts down possibel attempts
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

// Redirect to registrationForm page 
function goToRegister () {
    window.location = "registrationForm.html";
  }

// Redirect to resetPassword page
function forgotPassword () {
    window.location = "resetPassword.html";
  }

// Defining varibales - as we get them from our sign up form 
document.getElementById("registerUser").addEventListener("click", function() {
    username = document.getElementById("regUsername").value;
    password = document.getElementById("regPassword").value;
    firstname = document.getElementById("regFirstname").value;
    surname = document.getElementById("regSurname").value;
    country = document.getElementById("regCountry").value;
    email = document.getElementById("regEmail").value;
    gender = document.getElementById("regGender").value; 
  
// Push new Users in the array users and store them in local storage 
    users.push(new User(username, password, firstname, surname, country, email, gender));
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users));
    window.location = "index.html";
      });