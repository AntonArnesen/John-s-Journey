function logOut () {
    window.location = "index.html";
  }

  var header = document.getElementById("headerId");
  

  username = localStorage.getItem("loggedInUser")
  // Remember to integrate greeting message 'Welcome, <span></span>'

  header.textContent = `Thank you ${username} for coming back`