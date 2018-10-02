

// ADD IDENTATION!!!!!

// User Data

var objUser = [
  {
    username: "Joe",
    password: "1234"
  },
  {
    username: "Anna",
    password: "5678"
  }
]

// Define the buttons
var submit = document.getElementById('submit');
var forget = document.getElementById('forgotPassword');
var logout = document.getElementById("logout");

// Variabel to define the amount of wrong attempts you have
var attempt = 3;

// Function to go through the User Data to match Username/Password
function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

// Loop that goes through the User Data to idetify right or wrong Username/Password
  for (i = 0; i < objUser.length; i++) {
      if (username == objUser[i].username && password == objUser[i].password) 
        {console.log (username + " is logged in!");
          window.location = "logIn.html";
            return; 
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
// Function to be executed if you press forgotPassword
function forgotPassword () {
  alert ("Stupid Idiot");
}

function logOut () {
  window.location = "index.html";
}




