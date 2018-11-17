//Validate email
document.getElementById("regEmail").addEventListener("onblur", function() {
    var x = document.getElementById("regEmail").value;
//Checks for position of @
    var atpos = x.indexOf("@");
//Checks for position of .
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
});
/*-------------------------------------------------------------------------------------------------------------------------------*/

// Setting variable for un-authenticated user input
var validMail = false;
var validUsername = false;
var validPassword = false; 
var validFirstname = false;
var validSurname = false;

//Check if username is blank
  function checkUsername(username) {  
  if(debug == 1){  
  console.log(username);}
    if(username !== "") 
    {
      validUsername = true; //Authenticating input 
      return (validUsername)
    }
  
    alert("Please fill in username.")
    return (false)
  }; 

// function for valditating email input
  function validateEmailFunc(email) {
  if (/(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email))
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
  alert("Your password should be at least six characters long, contain one lowercase, one uppercase letter and one digit.")
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
    
    alert("Your surname cannot contain !#€%& or other signs")
    return (false)
  }

//If all input has been authenticated, welcome and redirect user to loginPage
  function userCreated () {
    if (validMail == true && validUsername == true && validPassword == true && validFirstname == true && validSurname == true){
      alert ("Welcome " + username + ". You'll now be redirected to the login Page.")
    window.location = "index.html";
    }
  }

  var regUser = document.getElementById("registerUser");



  if(regUser !== null){
// On "Click" validate input and push new user into array users
regUser.addEventListener("click", function() {
  
    username = document.getElementById("regUsername").value;
    password = document.getElementById("regPassword").value;
    firstname = document.getElementById("regFirstname").value;
    surname = document.getElementById("regSurname").value;
    email = document.getElementById("regEmail").value;
    journeyList = "";
    userId = '_' + Math.random().toString(36).substr(2, 9);


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
  // let redirectUser = userCreated ();

    users.push(new User(username, password, firstname, surname, email, journeyList, userId, ));
    if(debug == 1){
    console.log(users);}
    localStorage.setItem('users',JSON.stringify(users));
      });

    window.location = "index.html"
    }