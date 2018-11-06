// Debug variable 
var debug = 1;
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Form functionalities 
// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

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
/*
// SECTION: Assign a nummerical number to every date of the year
// Function that returns that replaces date with numerical value

function returnNummericalDate(userDepDate) {
  // Hardcoded dates (YYYY-MM-DD)
  var dateToNumber = [
  // JAN - Numbers 1-31
    "2018-01-01", "2018-02-01","2018-03-01","2018-04-01","2018-05-01","2018-06-01","2018-07-01","2018-08-01","2018-09-01","2018-10-01","2018-11-01","2018-12-01","2018-13-01","2018-14-01","2018-15-01","2018-16-01","2018-17-01","2018-18-01","2018-19-01","2018-20-01","2018-21-01","2018-22-01","2018-23-01","2018-24-01","2018-25-01","2018-26-01","2018-27-01","2018-28-01","2018-29-01","2018-30-01","2018-31-01",
  // FEB - Numbers 32-61
    "2018-01-02", "2018-02-02","2018-03-02","2018-04-02","2018-05-02","2018-06-02","2018-07-02","2018-08-02","2018-09-02","2018-10-02","2018-11-02","2018-12-02","2018-13-02","2018-14-02","2018-15-02","2018-16-02","2018-17-02","2018-18-02","2018-19-02","2018-20-02","2018-21-02","2018-22-02","2018-23-02","2018-24-02","2018-25-02","2018-26-02","2018-27-02","2018-28-02","2018-29-02","2018-30-02",
  // MAR - Numbers 62-92
    "2018-01-03", "2018-02-03","2018-03-03","2018-04-03","2018-05-03","2018-06-03","2018-07-03","2018-08-03","2018-09-03","2018-10-03","2018-11-03","2018-12-03","2018-13-03","2018-14-03","2018-15-03","2018-16-03","2018-17-03","2018-18-03","2018-19-03","2018-20-03","2018-21-03","2018-22-03","2018-23-03","2018-24-03","2018-25-03","2018-26-03","2018-27-03","2018-28-03","2018-29-03","2018-30-03", "2018-31-03",
  // APR - Numbers 93-122
  "2018-01-04", "2018-02-04","2018-03-04","2018-04-04","2018-05-04","2018-06-04","2018-07-04","2018-08-04","2018-09-04","2018-10-04","2018-11-04","2018-12-04","2018-13-04","2018-14-04","2018-15-04","2018-16-04","2018-17-04","2018-18-04","2018-19-04","2018-20-04","2018-21-04","2018-22-04","2018-23-04","2018-24-04","2018-25-04","2018-26-04","2018-27-04","2018-28-04","2018-29-04","2018-30-04"
  ]
  
  // Loop that is running through the function to find date (input value) an replace with a numerical number
  for(let i = 0; i < dateToNumber.length; i++) {
    if(userDepDate == dateToNumber[i])
    return i + 1;
    }
  }
  
  // Maybe the need for JSON here 
  var userDepDate = returnNummericalDate("2018-30-03");
  if (debug == 1) {
    console.log(userDepDate);
  } */