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
class journeySettings {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(journeyName, journeyDp, journeyRegion, journeyDesc, journeyFriends) {
      this.journeyName = journeyName;
      this.journeyDp = journeyDp;
      this.journeyRegion = journeyRegion;
      this.journeyDesc = journeyDesc;
      this.journeyFriends = journeyFriends;
      }
  };
  // Create var called createdJourney
  var createdJourney = JSON.parse(localStorage.getItem("createdJourney"));
  
  // Hardcoded users in journeySettings in the array
  if(createdJourney === null){
    createdJourney = [];
    }
        
  
  // Defining varibales - as we get them from the Journey Settings page
  document.getElementById("createdJourney").addEventListener("click", function() {
    journeyName = document.getElementById("journeyName").value;
    journeyDp = document.getElementById("journeyDp").value;
    journeyRegion = document.getElementById("journeyRegion").value;
    journeyDesc = document.getElementById("journeyDesc").value;
    journeyFriends = document.getElementById("journeyFriends").value;
  
    createdJourney.push(new journeySettings (journeyName, journeyDp, journeyRegion, journeyDesc, journeyFriends));
  localStorage.setItem('createdJourney',JSON.stringify(createdJourney));
  window.location = "createJourney.html"
        });
      