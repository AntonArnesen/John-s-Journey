// ADD IDENTATION!!!!!

// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(username, password, firstname, surname, country, email, gender, userId) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.surname = surname;
    this.country = country; 
    this.email = email; 
    this.gender = gender;
    this.userId = null; 

    //function () {
     //   Math.random().toString(36).substr(2, 9);
    //}
    // Create function that assigns random userID, then it becomes a method. Create method instead. math.random 0 - 1 multiply it by a million 
    // or detect number of users and add 1. 
    }
  } 
  // Create array called users
var users = [];

// push new instance of Users into newly created array
users.push(new User("CoolJoe", "1234", "Joe", "Reisinger", "Germany", "joe@email.de", 1));
users.push(new User("CoolAnna", "1234", "Joe", "Reisinger", "Germany", "joe@email.de", 2));

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
// Gregor´s try to use local storage 
localStorage.setItem("attempt", attempt);

// Function to go through the User Data to match Username/Password
function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

// Loop that goes through the User Data to idetify right or wrong Username/Password
  for (i = 0; i < users.length; i++) {
      if (username == users[i].username && password == users[i].password) {
        {console.log (username + " is logged in!");
        window.location = "journeyOverview.html";

//Set authenticatedUserId to userId
        aunthenticatedUserId = users[i].userId;
        console.log (aunthenticatedUserId)
        }

// If Username or Password is not right than it counts down possibel attempts
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
function goToRegister () {
    window.location = "registrationForm.html";
  }

function forgotPassword () {

    window.location = "resetPassword.html";
  }
