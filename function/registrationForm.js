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

/*
document.getElementById("regEmail").addEventListener("onblur", function() {
  var email = document.getElementById("regEmail");
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid e-mail.");
  } else {
    email.setCustomValidity("");
  }
});

document.getElementById("registerUser").addEventListener("onkeyup", function() {

var email = document.getElementById ("regEmail".value);
    var re = /\S+@\S+/;
    return re.test(email);
});*/