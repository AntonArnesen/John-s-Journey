
/*-------------------------------------------------------------------------------------------------------------------------------*/
// TO DO: MAKE A FUNCTION OUT OF IT, OTHERWISE IT WILL ALWAYS ADD A NEW ITEM TO LOCAL STORAGE WHEN YOU REFRESH 
// SECTION: Create Flight Setting Class
// Combine all values needed to select flights from local storage

class flightSettings {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(journeyName, highestDpDate, lowestRtDate, lowestUserBudget, journeyDp,journeyRegion) {
   //   this.journeyId = journeyId;
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
     journeyFlightSettings.push(new flightSettings("John´s Journey", "2018-10-30", "2018-11-10", 15000, "Copenhagen", "Europe"));
  }
  
  // Defining varibales - as we get them from local storage
  // You need to define a variable first to unpack the JSON String and then you can target single values 
  //var flightJourneySettingsLocalStorage = JSON.parse(localStorage.getItem("createdJourney"));
  // How should the system know for which journey we are checking??? [1] -> müsste es selber herausfinden
  //   journeyId = flightJourneySettingsLocalStorage[1].journeyId;

     journeyName = flightJourneySettingsLocalStorage[1].journeyName;
     highestDpDate = localStorage.getItem("highestDpDate");
     lowestRtDate = localStorage.getItem("lowestRtDate");
     lowestUserBudget = localStorage.getItem("lowestUserBudget");
     journeyDp = flightJourneySettingsLocalStorage[1].journeyDp;
     journeyRegion = flightJourneySettingsLocalStorage[1].journeyRegion;
 // TO DO: We need one more variable for number of participants

  // Push the values taken from the form into the journeyFlightSettings array 
  journeyFlightSettings.push(new flightSettings (journeyName, highestDpDate, lowestRtDate, lowestUserBudget, journeyDp,journeyRegion));
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
var button = document.getElementById("button")

button.onclick = function () {
  if (finalFlightSettings[1].journeyDp == "Helsinki Airport - HEL") {
    window.location.href = "https://www.google.dk/flights/?lite=0#flt=HEL.r/m/02j9z."+finalFlightSettings[1].highestDpDate+"r/m/02j9z.HEL."+finalFlightSettings[1].lowestRtDate+";c:EUR;e:1;px:2;sd:1;t:e"
  }}
  //else 


//console.log(setURL());

/*-------------------------------------------------------------------------------------------------------------------------------*/
