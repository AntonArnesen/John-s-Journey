var debug = 1;

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

// Gregor´s try to loop through values in local storage to output lowest Budget 
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
}
console.log(lowest.userBudget);
