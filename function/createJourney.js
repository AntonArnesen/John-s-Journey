/*// Get modal element
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
  } */

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
  };

// Create var called createdJourney
  var createdJourney = JSON.parse(localStorage.getItem("createdJourney"));
// Get the information about the users in the Index.js
  var users = JSON.parse(localStorage.getItem("users"));

// Hardcoded users in journeySettings in the array
  if(createdJourney === null){
    createdJourney = [];
    }
        
  
// Defining varibales - as we get them from the Journey Settings page
    function createJourney() {
      
      let journeyName = document.getElementById("journeyName").value;
      let journeyDp = document.getElementById("journeyDp").value;
      let journeyRegion = document.getElementById("journeyRegion").value;
      let journeyDesc = document.getElementById("journeyDesc").value;
      let journeyParticipants = document.getElementById("journeyParticipants").value;
      let journeyId = '_' + Math.random().toString(36).substr(2, 9);
      
  //allows more than one email address in the field when using comma ","
      document.getElementById("journeyParticipants").multiple = true;
      console.log(createdJourney);

      createdJourney.push(new journeySettings (journeyName, journeyDp, journeyRegion, journeyDesc, journeyParticipants, journeyId));
      localStorage.setItem('createdJourney',JSON.stringify(createdJourney));
      
      /*Loops through the local storage in order to check if the invited person/persons email matches with the 'database'
      and then push the journeyId into the journeyList of that user/s*/

      for (let i = 0; i < users.length; i++) { 
        if (journeyParticipants == users[i].email) {
          users[i].journeyList = journeyId;

          console.log(journeyId)
    
        //Set the new, added ID to the object of the user
          localStorage.setItem('users',JSON.stringify(users));
          
          alert(journeyParticipants + " has been invited!" + users[i].surname);
    }
    }
    };    
  

      // direct to after 'create journey'
      // window.location = "journeyOverview.html"
        
    /*


// Loop that goes through the User Data to idetify if the invited participants exist or not

  
// Stringify and push new journey into local storage. 


// direct to after 'create journey' window.location = "journeyOverview.html"
} 

}   

 };
      
*/

