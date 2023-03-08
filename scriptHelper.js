// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (isNaN(testInput) === false){
    return "Is a Number";
   } else if (isNaN(testInput) === true) {
    return "Is not a Number";
   } else if (testInput === undefined || testInput === null) {
    return "Empty";
   } else {
    let x = `Error parsing input ${testInput}`
    return x;
   }
}
//document.getElementById("update");
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuel = document.getElementById("fuelLevel;");
    let cargo = document.getElementById("cargoMass");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    let entries = [pilot, copilot, fuelLevel, cargoLevel]
    let validatedEntries
    for (i=0; i < entries.length; i++){
       validatedEntries.push(validateInput(entries[i])); //runs each entry thru validate input and pushes to an array validatedEntries
    }; 
    if (validatedEntries[0] === "Is a Number" || validatedEntries[0] === "Empty" || validatedEntries[1] === "Is a Number" || validatedEntries[1] === "Empty")
    {//checks pilot and copilot number if they're valid, if not throws something for user to do
        alert("All fields require valid input.");
    } else 
    {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");
        if (cargoLevel >= 10000 || fuelLevel < 10000)
        {
            list.style.visibility = "visible";
            if (fuelLevel < 10000){
                fuel.innerHTML = "Not enough fuel for the journey"
            }
            if (cargoLevel >= 10000){
                cargo.innerHTML = "Too much mass for the shuttle to take off"
            }
            launchStatus.style.color = "red";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
