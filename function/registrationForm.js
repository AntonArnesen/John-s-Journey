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
// SECTION: Log in Function

var regUser = document.getElementById("registerUser");

if(regUser !== null){
    // On "Click" validate input and push new user into array users
    regUser.addEventListener("click", function() {
  
        username = document.getElementById("regUsername").value;
        password = document.getElementById("regPassword").value;
        firstname = document.getElementById("regFirstname").value;
        surname = document.getElementById("regSurname").value;
        email = document.getElementById("regEmail").value;
        userId = '_' + Math.random().toString(36).substr(2, 9);
        journeyList = "";

            //If all input has been authenticated, welcome and  redirect user to loginPage
            users.push(new User(username, password, firstname, surname, email, userId, journeyList));
            if(debug == 1){
            console.log(users);}
            localStorage.setItem('users',JSON.stringify(users));
            window.location = "index.html"
    });
 
}