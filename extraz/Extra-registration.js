var register = document.getElementById('register');

register.onclick = function(){

  var uid = document.getElementById("uid");
  var passid = document.getElementById("passid");
  var uname = document.getElementById("username");
  var uadd = document.getElementById("address");
  var ucountry = document.getElementById("country")
  var uzip = document.getElementById("zip")
  var uemail = document.getElementById("email");
  var umsex = document.getElementById("msex");
  var ufsex = document.getElementById("fsex");

 

  if(field_validation(uid,5,12)){

  }

  if(field_validation(passid,7,12)){

  }
  return false;
}


function field_validation(uid,mx,my){
  var uid_len = uid.value.length;

 
  if (uid_len == 0 || uid_len >= my || uid_len < mx){
    alert("User Id should not be empty / length be between "+mx+" to "+my);
    uid.focus();
    return false;
  }
  return true;
} 

function field_validation(userInput, type,mx,my){
  var passid_len = passid.value.length;

  if(type == "password")

  if (passid_len == 0 || passid_len >= my || passid_len < mx){
    alert("Password should not be empty / length be between "+mx+" to "+my);
    passid.focus();
    return false;
  }
  return true;
}