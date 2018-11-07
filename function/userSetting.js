// Debug variable - if 1 debug console is running 
var debug = 0;
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Form functionalities 
// Get modal element
 
/* 
var modal = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn2')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
*/
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Push Form inputs into local storage
//create class Settings
class userSettings {

// The constructor for our class, which will allow us to create new objects of our class
constructor(userBudget, userDpDate, userRtDate) {
    this.userBudget = userBudget;
    this.userDpDate = userDpDate;
    this.userRtDate = userRtDate;
    }
};
// Create var called userJourneySettings - ADD COMENTS
var userJourneySettings = JSON.parse(localStorage.getItem("userJourneySettings"));

// Hardcoded users in journeySettings in the array
if(userJourneySettings === null){
    userJourneySettings = [];
}
// Defining varibales - as we get them from the Journey Settings page
document.getElementById("userJourneySettings").addEventListener("click", function() {
    userBudget = document.getElementById("userJourneyBudget").value;
    userDpDate = document.getElementById("dpDate").value;
    userRtDate = document.getElementById("rtDate").value;

// Push the values taken from the form into the userJourneySettings array 
userJourneySettings.push(new userSettings (userBudget, userDpDate, userRtDate));
if(debug == 1){
    console.log("Success");
  }
// Assign our element the name userJourneySettings in local storage and the value and use JSON function to push the values into one string
localStorage.setItem('userJourneySettings',JSON.stringify(userJourneySettings));
//Relocate to the main window after the seetings are submitted 
window.location = "manageJourney.html"
      });
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Check for lowest userBudget in localStorage
// set userJourneySettingsLocalStorage to the value of local Storage
var userJourneySettingsLocalStorage = JSON.parse(localStorage.getItem("userJourneySettings"));
var lowest;
for (let i = 0; i < userJourneySettingsLocalStorage.length; i++) {
  if (userJourneySettingsLocalStorage[i].userBudget != 0) {
    if(lowest == null){
      lowest = userJourneySettingsLocalStorage[i];
      continue;
    }
    if(userJourneySettingsLocalStorage[i].userBudget < lowest.userBudget){
      lowest = userJourneySettingsLocalStorage[i];
    }
  }
  localStorage.setItem('lowestUserBudget',lowest.userBudget);
}
if(debug == 1){
console.log(lowest.userBudget);}

/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Get highest shared Departure Date
// Function loops through userJourneySettings out of local storage to find shared date 
var highestDpDate;
for (let i = 0; i < userJourneySettingsLocalStorage.length; i++) {
  if (userJourneySettingsLocalStorage[i].userDpDate != 0) {
    if(highestDpDate == null){
      highestDpDate = userJourneySettingsLocalStorage[i];
      continue;
    }
    if(userJourneySettingsLocalStorage[i].userDpDate > highestDpDate.userDpDate){
      highestDpDate = userJourneySettingsLocalStorage[i];
    }
  }
  localStorage.setItem('highestDpDate',highestDpDate.userDpDate);
}
if(debug == 1){
console.log(highestDpDate.userDpDate);}
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Get lowest shared Return Date
// Function loops through userJourneySettings out of local storage to find lowest shared date 
var lowestRtDate;
for (let i = 0; i < userJourneySettingsLocalStorage.length; i++) {
  if (userJourneySettingsLocalStorage[i].userRtDate != 0) {
    if(lowestRtDate == null){
      lowestRtDate = userJourneySettingsLocalStorage[i];
      continue;
    }
    if(userJourneySettingsLocalStorage[i].userRtDate < lowestRtDate.userRtDate){
      lowestRtDate = userJourneySettingsLocalStorage[i];
    }
  }
  localStorage.setItem('lowestRtDate',lowestRtDate.userRtDate);
}
if(debug == 1){
console.log(lowestRtDate.userRtDate);}

/*-------------------------------------------------------------------------------------------------------------------------------*/
// TO DO: MAKE A FUNCTION OUT OF IT, OTHERWISE IT WILL ALWAYS ADD A NEW ITEM TO LOCAL STORAGE WHEN YOU REFRESH 
// SECTION: Create Flight Setting Class
// Combine all values needed to select flights from local storage
class flightSettings {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(journeyId, journeyName, highestDpDate, lowestRtDate, lowestUserBudget, journeyDp,journeyRegion) {
      this.journeyId = journeyId;
      this.journeyName = journeyName;
      this.highestDpDate = highestDpDate;
      this.lowestRtDate = lowestRtDate;
      this.lowestUserBudget = lowestUserBudget;
      this.journeyDp = journeyDp;
      this.journeyRegion = journeyRegion;
      }
  };
  // Create var called userFlightSettings
  var journeyFlightSettings = JSON.parse(localStorage.getItem("journeyFlightSettings"));
  
  // Hardcoded users in journeyFlightSettings in the array
  if(journeyFlightSettings === null){
     journeyFlightSettings = [];
     journeyFlightSettings.push(new flightSettings(5555, "John´s Journey", "2018-10-30", "2018-11-10", 15000, "Copenhagen", "Europe"));
  }
  
  // Defining varibales - as we get them from local storage
  // You need to define a variable first to unpack the JSON String and then you can target single values 
  var flightJourneySettingsLocalStorage = JSON.parse(localStorage.getItem("createdJourney"));
  // How should the system know for which journey we are checking??? [1] -> müsste es selber herausfinden
     journeyId = flightJourneySettingsLocalStorage[1].journeyId;
     journeyName = flightJourneySettingsLocalStorage[1].journeyName;
     highestDpDate = localStorage.getItem("highestDpDate");
     lowestRtDate = localStorage.getItem("lowestRtDate");
     lowestUserBudget = localStorage.getItem("lowestUserBudget");
     journeyDp = journeyName = flightJourneySettingsLocalStorage[1].journeyDp;
     journeyRegion = journeyName = flightJourneySettingsLocalStorage[1].journeyRegion;
 // TO DO: We need one more variable for number of participants

  // Push the values taken from the form into the journeyFlightSettings array 
  journeyFlightSettings.push(new flightSettings (journeyId, journeyName, highestDpDate, lowestRtDate, lowestUserBudget, journeyDp,journeyRegion));
   if(debug == 1){
         console.log(journeyFlightSettings);
  }

  // Push journeyFlightSettings into local storage
localStorage.setItem('journeyFlightSettings',JSON.stringify(journeyFlightSettings));
/*-------------------------------------------------------------------------------------------------------------------------------*/

// Recall Flight Settings from local storage 
// Redirect to page with all your information presented
// Manipulate URL to show the right flight options

// Try to set URL specific for every 

var finalFlightSettings = JSON.parse(localStorage.getItem("journeyFlightSettings"));
var urlDeparture
var urlDestination
var button = document.getElementById("button")

button.onclick = function () {
  if (finalFlightSettings[1].journeyDp == "Helsinki Airport - HEL") {
    window.location.href = "https://www.google.dk/flights/?lite=0#flt=HEL.r/m/02j9z."+finalFlightSettings[1].highestDpDate+"r/m/02j9z.HEL."+finalFlightSettings[1].lowestRtDate+";c:EUR;e:1;px:2;sd:1;t:e"
  }
  //else 
  }

//console.log(setURL());