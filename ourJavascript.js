
var objUser = [
  {
    username: "User1",
    password: "john"
  },
  {
    username: "User2",
    password: "john2", 
  }
]
if (document.getElementById ('userLogin')){
    var username = getParameterByName('username');
  document.getElementById ('userLogin').innerText=username;
}

//Undersøg om det er nemmere med cookie. JavaScript local storage

var submit = document.getElementById('submit');
var forget = document.getElementById('forgotPassword');

var attempt = 3;

function getInfo (){
  var username = document.getElementById ("username").value 
  var password = document.getElementById ("password").value

  for (i = 0; i < objUser.length; i++) {
    if (username == objUser [i].username && password == objUser [i].password)
    {
  console.log(username + "have entered the battlefield")
  window.location = "login.html?username="+username; 
  return false;
     } 
     else {
      attempt --;// Decrementing by one.
      alert("You have left "+attempt+" attempt;");
      // Disabling fields after 3 attempts.
      if( attempt == 0){
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return;
      }
     } 
     break
  }
 
    //{console.log ("Wrong password/username");
  //  alert ("Wrong password/username")
 }
function forgotPassword () {
  window.location = "forgotWindow.html";
  //alert ("Idiot, remember your password next time");
}
submit.onclick = getInfo;
forget.onclick = forgotPassword;

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}