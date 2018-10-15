var register = document.getElementById('register');
    register.onclick = function(){

        var uid = document.getElementById("uid");
        var uname = document.getElementById("username");
        var upassword = document.getElementById("upassword");
        var ufirstname = document.getElementById("ufirstname");
        var usurname = document.getElementById("usurname")
        var ucountry = document.getElementById("ucountry")
        var uemail = document.getElementById("uemail");
        var umsex = document.getElementById("msex");
        var ufsex = document.getElementById("fsex");

if(field_validation(uid,5,12)){
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