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
var users = JSON.parse(localStorage.getItem("users"));

if(userJourneySettings === null){
  userJourneySettings = [];
  // Default Option 
  userJourneySettings.push(new userSettings ("userBudget", "2018-01-01", "2019-12-31", "journeyId"))
}   
// Defining varibales - as we get them from the Journey Settings page and push them into local Storage

function createUserSettings() { 
    let userBudget = document.getElementById("userJourneyBudget").value;
    let userDpDate = document.getElementById("dpDate").value;
    let userRtDate = document.getElementById("rtDate").value;
    //JourneyId is now the the journey Id of the logged in user
    let journeyId = localStorage.getItem("loggedInUserJourneyId")
    
    // Push the values taken from the form into the userJourneySettings array 
    userJourneySettings.push(new userSettings (userBudget, userDpDate, userRtDate, journeyId));
    
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Check for lowest userBudget in localStorage
// Loop throug userJourneySettings and get the lowest Budget
var lowest = null;
var highestDpDate = null;
var lowestRtDate = null;
// Try to assign Journey ID to Journey Budget
for (let i = 0; i < userJourneySettings.length; i++) {
  
    // Is it really checking for all Budgets in local storage with the journeyId
    if (journeyId == userJourneySettings[i].journeyId) {   
       
      
      if (userJourneySettings[i].userBudget != 0) {
        if(lowest == null){
        lowest = userJourneySettings[i].userBudget;
        
        
        } else if(userJourneySettings[i].userBudget < lowest){
          lowest = userJourneySettings[i].userBudget;
          console.log(userJourneySettings)
          debugger
          
        }
      }
    }
  }
          
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Get highest shared Departure Date
// Function loops through userJourneySettings out of local storage to find shared date - STIIL THE SAME FUNCTION
                                   
      for (let i = 0; i < userJourneySettings.length; i++) {
                                      if (userJourneySettings[i].userDpDate != 0) {
                                        
                                          if(highestDpDate == null){
                                          highestDpDate = userJourneySettings[i].userDpDate;
                                          
                                          }
                                                 else if(userJourneySettings[i].userDpDate > highestDpDate){
                                                  highestDpDate = userJourneySettings[i].userDpDate;
                                                  }
                                                
                                      }
                                    }
                                  
                                  
/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Get lowest shared Return Date - STIIL THE SAME FUNCTION
// Function loops through userJourneySettings out of local storage to find lowest shared date 
                                                      
                                                          for (let i = 0; i < userJourneySettings.length; i++) {
                                                              if (userJourneySettings[i].userRtDate != 0) {
                                                                  if(lowestRtDate == null){
                                                                    lowestRtDate = userJourneySettings[i].userRtDate;
                                                                  
                                                                  }
                                                                              else if(userJourneySettings[i].userRtDate < lowestRtDate){
                                                                                  lowestRtDate = userJourneySettings[i].userRtDate;
                                                                              } 
                                                              }
                                                          }

createFlightSettings(lowest, lowestRtDate, highestDpDate)
}


