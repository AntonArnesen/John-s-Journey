// Debug variable - if 1 debug console is running 
var debug = 0;
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Push Manage journey-form inputs into local storage
// Create class Settings
class userSettings {
    constructor(userBudget, userDpDate, userRtDate, journeyId) {
      this.userBudget = userBudget;
      this.userDpDate = userDpDate;
      this.userRtDate = userRtDate;
      this.journeyId = journeyId;
    }
}

// Create variable called userJourneySettings, parse converts the string into an object, where the string is retrieved from other file - ADD COMENTS
var userJourneySettings = JSON.parse(localStorage.getItem("userJourneySettings"));
var loggedInUserId = localStorage.getItem("loggedInUserId")
var users = localStorage.getItem("users")

if(userJourneySettings === null){
  userJourneySettings = [];
  // Default Option 
  userJourneySettings.push(new userSettings ("userBudget", "userDpDate", "userRtDate", "journeyId"))
}   

// Defining varibales - as we get them from the Journey Settings page and push them into local Storage
function createUserSettings() { 

    let userBudget = document.getElementById("userJourneyBudget").value;
    let userDpDate = document.getElementById("dpDate").value;
    let userRtDate = document.getElementById("rtDate").value;
    let journeyId = localStorage.getItem("loggedInUserJourneyId")

    // Push the values taken from the form into the userJourneySettings array 
    userJourneySettings.push(new userSettings (userBudget, userDpDate, userRtDate, journeyId));

    // Assign our element the name userJourneySettings in local storage and the value and use JSON function to push the values into one string
    localStorage.setItem('userJourneySettings',JSON.stringify(userJourneySettings));

    //Relocate to the main window after the seetings are submitted 
    if(debug == 1){
        console.log(userJourneySettings);
    }
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Check for lowest userBudget in localStorage
// Loop throug userJourneySettings and get the lowest Budget

// Try to assign Journey ID to Journey Budget
  for (let i = 0; i < users.length; i++) {
    if (loggedInUserId == users[i].userId) {
        var loopedJourneyId = users[i].journeyList}
    }
console.log(loopedJourneyId)

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
    console.log(highestDpDate.userDpDate);
}
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
  console.log(lowestRtDate.userRtDate)}
// This is the end of function createUserSettings() 
};