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
    this.userId = userId; 
    
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
users.push(new User("CoolAnna", "5678", "Anton", "Brandt", "Denmark", "anton@brandt.dk", 2));

// In order to authenticate logged in user we create a variable and assign null
var aunthenticatedUserId = null

// Define the buttons
var submit = document.getElementById('submit');
var forget = document.getElementById('forgotPassword');
var logout = document.getElementById("logout");
var register = document.getElementById ('registerUser');

// Variabel to define the amount of wrong attempts you have
var attempt = 3;

// Function to go through the User Data to match Username/Password
function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

// Loop that goes through the User Data to idetify right or wrong Username/Password
  for (i = 0; i < users.length; i++) {
      if (username == users[i].username && password == users[i].password) 
        {console.log (username + " is logged in!");

//Set authenticatedUserId to userId
      aunthenticatedUserId = users[i].userId;
      console.log (aunthenticatedUserId)

// var username = getParameterByName('username');
      document.getElementById ('userLogin').innerText=users[i].username;

// Hide div id="loginPage" and show div id="welcomePage"
        var loginPage = document.getElementById("loginPage");
        var welcomePage = document.getElementById("welcomePage");
        console.log(loginPage);
        loginPage.style.display = "none";
        welcomePage.style.display = "block";
  }
// If Username or Password is not right than it counts down possibel attempts
  else{
    attempt --;// Decrementing by one.
      alert("Wrong Password or Username!" + " You have left "+attempt+" attempt");
      
// Disabling fields after 3 attempts.
  if( attempt == 0){
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
  return;
  }
}
// To stop loop to count down possible attempts without a new chance to change your Username/Password
  break;
  }
}

function goToRegister () {
  var loginPage = document.getElementById("loginPage");
  var signupForm = document.getElementById("signupForm");
  console.log(loginPage);
  loginPage.style.display = "none";
  signupForm.style.display = "block";
}

function registerUser () {
  users.push(new User(username,password))
  var username = document.getElementsByName("username").value;
  var password = document.getElementsByName("passid").value;

}



