function logOut () {
    window.location = "index.html";
  }

  // Defining h1 as headerId 
  var header = document.getElementById("headerId");

  //Get username from loggedInUser out of the index.js file (in the logIn Loop)
  username = localStorage.getItem("loggedInFirstname")
  header.textContent = `Thank you ${username} for coming back`



