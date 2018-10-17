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

userJourneySettings.push(new userSettings (userBudget, userDpDate, userRtDate));
if(debug == 1){
    console.log("Success");
  }
localStorage.setItem('userJourneySettings',JSON.stringify(userJourneySettings));
window.location = "manageJourney.html"
      });