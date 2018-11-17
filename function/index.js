// Debug variable - if 1 debug console is running 
var debug = 0;
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Create user 
// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {
    // The constructor for our class, which will allow us to create new objects of our class
    constructor(username, password, firstname, surname, email, userId) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email; 
        this.userId = userId;
        this.journeyList = [];
    }
} 
// Create array called users and get existing users from local storage 
var users = JSON.parse(localStorage.getItem("users"));
// Hardcoded users in the users array
if(users === null){
    users = [];
    users.push(new User("CoolJoe", "1234", "Joe", "Reisinger", "joe@email.de", "1234"));
    users.push(new User("CoolAnna", "1234", "Anna", "Reisinger", "anna@email.de", "5678"));
   // localStorage.setItem('users',JSON.stringify(users));
}
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Login
// Define the buttons and span (method that returns the element that has the ID attribute with the specified value)
var submit = document.getElementById('submit');
var forgot = document.getElementById('forgotPassword');
var logout = document.getElementById("logout");
var register = document.getElementById ('registerUser');
var resultSpan = document.getElementById('loginResult');

// Variabel to define the amount of wrong attempts you have
var attempt = 3;

// FUNCTION that goes through user data to match username and password
function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
  
        // Loop that goes through the User Data to idetify right or wrong Username/Password
        for (let i = 0; i < users.length; i++) {
             if (username == users[i].username && password == users[i].password) {
    
            // Set values to local storage  
            localStorage.setItem("loggedInFirstname", users[i].firstname);
            localStorage.setItem("loggedInUserId", users[i].userId);
            //Push Journey IDs of logged in User in the local storage - if there is non, then local storage is empty
            localStorage.setItem("loggedInUserJourneyId", users[i].journeyList);

            // Set users to local storage 
            localStorage.setItem('users',JSON.stringify(users));


            //redirect to new html side for logged in users 
            window.location = "journeyOverview.html";

                if(debug == 1){
                    console.log (username + " is logged in!");
                }
            }       
        }       
                    // Disabling login fields after 3 failed attempts.
                    if( attempt == 0){    
                        document.getElementById("username").disabled = true;
                        document.getElementById("password").disabled = true;
                        document.getElementById("submit").disabled = true;

                        //Return false to get out of function
                        return false;  
                    } 
                    else {
                        //Drecrement amount of attemps and show in span "loginResult"
                        attempt--;
                        resultSpan.innerText = "You've entered a wrong username or password. You have left "+attempt+" attempt(s).";
                    } 
}   

/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Defining values
// Define the buttons and span
var submit = document.getElementById('submit');
var forgot = document.getElementById('forgotPassword');
var logout = document.getElementById("logout");
var register = document.getElementById ('registerUser');
var resultSpan = document.getElementById('loginResult');

// Redirecting when clicking on buttons 
function goToRegister () {
    window.location = "registrationForm.html";
}

function forgotPassword () {
    window.location = "resetPassword.html";
}
