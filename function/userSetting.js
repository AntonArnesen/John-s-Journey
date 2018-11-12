// Debug variable - if 1 debug console is running 
var debug = 0;
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Form functionalities 
// Possible to make this section more efficient? See if one or the other are being clicked 
// Get modal element

var modal = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
var modal = document.getElementById('simpleModal');
var modal2 = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
var modalBtn2 = document.getElementById('modalBtn2');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal2);

// Listen for close click
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);

// Listen for outside click
window.addEventListener('click', outsideClick);
window.addEventListener('click', outsideClick2);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}
function openModal2(){
  modal2.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
function closeModal2(){
  modal2.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
  function outsideClick2(e){
    if(e.target == modal2){
      modal2.style.display = 'none';
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Push Manage journey-form inputs into local storage
//create class Settings
class userSettings {

// The constructor for our class, which will allow us to create new objects of our class
constructor(userBudget, userDpDate, userRtDate, journeyId) {
    this.userBudget = userBudget;
    this.userDpDate = userDpDate;
    this.userRtDate = userRtDate;
    this.journeyId = journeyId;
    }
};
// Create variable called userJourneySettings, parse converts the string into an object, where the string is retrieved from other file - ADD COMENTS
var userJourneySettings = JSON.parse(localStorage.getItem("userJourneySettings"));

loggedInUserId = localStorage.getItem("loggedInUserId")
//if(debug == 1){
  console.log(loggedInUserId);
//}

// Define users in this JS file
var users = localStorage.getItem("users")
console.log(users)

// Defining varibales - as we get them from the Journey Settings page and push them into local Storage
function createUserSettings() { 

//document.getElementById("userJourneySettings").addEventListener("click", function(){
    let userBudget = document.getElementById("userJourneyBudget").value;
    let userDpDate = document.getElementById("dpDate").value;
    let userRtDate = document.getElementById("rtDate").value;
    let journeyId = localStorage.getItem("loggedInUserJourneyId")

// Push the values taken from the form into the userJourneySettings array 
userJourneySettings.push(new userSettings (userBudget, userDpDate, userRtDate, journeyId));

// Assign our element the name userJourneySettings in local storage and the value and use JSON function to push the values into one string
localStorage.setItem('userJourneySettings',JSON.stringify(userJourneySettings));
  }

//Relocate to the main window after the seetings are submitted 
if(debug == 1){
  console.log(userJourneySettings);
}

/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Check for lowest userBudget in localStorage
// set userJourneySettingsLocalStorage to the value of local Storage


// TRY IT HERE

/*
// Gregor´s try to loop through the Users to assign journeyID of looged in
  for (let i = 0; i < users.length; i++) {
    if (loggedInUserId == users[i].userId) {
        loopedJourneyId == users[i].journeyList}
    }
console.log(loopedJourneyId)
*/

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
  console.log(lowestRtDate.userRtDate)}
