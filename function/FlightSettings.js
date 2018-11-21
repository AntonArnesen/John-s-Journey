
/*-------------------------------------------------------------------------------------------------------------------------------*/
// TO DO: MAKE A FUNCTION OUT OF IT, OTHERWISE IT WILL ALWAYS ADD A NEW ITEM TO LOCAL STORAGE WHEN YOU REFRESH 
// SECTION: Create Flight Setting Class
// Combine all values needed to select flights from local storage

class flightSettings {

  constructor(lowestUserBudget,lowestRtDate, highestDpDate, journeyId, journeyName, journeyDp,journeyRegion) {
    this.lowestUserBudget = lowestUserBudget;
    this.lowestRtDate = lowestRtDate;
    this.highestDpDate = highestDpDate;
    this.journeyId = journeyId;
    this.journeyName = journeyName;
    this.journeyDp = journeyDp;
    this.journeyRegion = journeyRegion;
    // this.journeyParticipantcounts = journeyParticipantcounts;  
    // add participants by name to this class
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
  // How should the system know for which journey we are checking??? [1] -> müsste es selber herausfinden

function createFlightSettings(lowestUserBudget, lowestRtDate, highestDpDate) {
    console.log(`Buget is:${lowestUserBudget} return: ${lowestRtDate} departure: ${highestDpDate}`)
        journeyId = localStorage.getItem("loggedInUserJourneyId");
        var journey = getJourney(journeyId);
        journeyName = journey.journeyName;
        journeyDp = journey.journeyDp;
        journeyRegion = journey.journeyRegion;
        // TO DO: We need one more variable for number of participants

      // Push the values taken from the form into the journeyFlightSettings array 
          journeyFlightSettings.push(new flightSettings (lowestUserBudget,lowestRtDate, highestDpDate, journeyId, journeyName, journeyDp,journeyRegion));
            if(debug == 1){
              console.log(journeyFlightSettings);
          }

  // Push journeyFlightSettings into local storage
localStorage.setItem('journeyFlightSettings',JSON.stringify(journeyFlightSettings));

}
function getJourney(journeyId) {
  for (let i = 0; i < createdJourney.length; i++) { // Loop through journey
    if (journeyId == createdJourney[i].journeyId) { // if logged in user Id is = journey Id than return the journey 
      return createdJourney[i];
    }
  }
}
/*-------------------------------------------------------------------------------------------------------------------------------*/
// Recall Flight Settings from local storage 
// Redirect to page with all your information presented
// Manipulate URL to show the right flight options

// Try to set URL specific for every 

/*
var finalFlightSettings = JSON.parse(localStorage.getItem("journeyFlightSettings"));
var button = document.getElementById("button")

button.onclick = function () {
  if (finalFlightSettings[1].journeyDp == "Helsinki Airport - HEL") {
    window.location.href = "https://www.google.dk/flights/?lite=0#flt=HEL.r/m/02j9z."+finalFlightSettings[1].highestDpDate+"r/m/02j9z.HEL."+finalFlightSettings[1].lowestRtDate+";c:EUR;e:1;px:2;sd:1;t:e"
  }}
  //else 


//console.log(setURL());
*/
/*-------------------------------------------------------------------------------------------------------------------------------*/
