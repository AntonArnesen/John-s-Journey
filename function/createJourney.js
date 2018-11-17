// Debug variable - if 1 debug console is running 
var debug = 0;
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Create Journey
//create class Settings
class journeySettings {
// The constructor for our class, which will allow us to create new objects of our class
    constructor(journeyName, journeyDp, journeyRegion, journeyDesc, journeyParticipants, journeyId) {
        this.journeyName = journeyName;
        this.journeyDp = journeyDp;
        this.journeyRegion = journeyRegion;
        this.journeyDesc = journeyDesc;
        this.journeyParticipants = journeyParticipants;
        this.journeyId = journeyId;
    }
}

// Create var called createdJourney
var createdJourney = JSON.parse(localStorage.getItem("createdJourney"));
// Get the information about the users in the Index.js
  var users = JSON.parse(localStorage.getItem("users"));

 
// Hardcoded users in journeySettings in the array
if(createdJourney === null){
   createdJourney = [];
   // Default Option 
   createdJourney.push(new journeySettings ("journeyName", "journeyDp", "journeyRegion", "journeyDesc", "journeyParticipants", "journeyId"))
}   
  

// Defining varibales - as we get them from the Journey Settings page
function createJourney() {
    let journeyName = document.getElementById("journeyName").value;
    let journeyDp = document.getElementById("journeyDp").value;
    let journeyRegion = document.getElementById("journeyRegion").value;
    let journeyDesc = document.getElementById("journeyDesc").value;
    let journeyParticipants = document.getElementById("journeyParticipants").value;
    let journeyId = '_' + Math.random().toString(36).substr(2, 9);

    document.getElementById("journeyParticipants").multiple = true;
    localStorage.setItem('journeyParticipants',(journeyParticipants))
    localStorage.setItem('journeyId',(journeyId))

    // Push to journey array and then set to local storage   
    createdJourney.push(new journeySettings (journeyName, journeyDp, journeyRegion, journeyDesc, journeyParticipants, journeyId));
    localStorage.setItem('createdJourney',JSON.stringify(createdJourney));

    //Define values for function 
    var journeyPart = localStorage.getItem("journeyParticipants");
    var journeyID = localStorage.getItem("journeyId");
    var users = JSON.parse(localStorage.getItem("users"));
    var journeyID = localStorage.getItem("journeyId");
    var LogUserId = localStorage.getItem("loggedInUserId");

// Problem is that when you invite anna with Joe the system over writes the pushed journeyID of the the first loop and both
// are empty -> of you log in with Anna it works
    for (i = 0; i < users.length; i++) {
        //Push journey Id into journeylist of journey creator
        if (LogUserId == users[i].userId) {
            users[i].journeyList.push(journeyID);
        }
    }

    for (i = 0; i < users.length; i++) {
        //Push journey Id into journeylist of participating users
        if (journeyPart == users[i].email) {
        users[i].journeyList.push(journeyID);
        localStorage.setItem('users',JSON.stringify(users)); 
        }
        else { (journeyPart !== users[i].email)
            return alert(journeyPart+ " has been invited!");
        } 
    
    }
}
