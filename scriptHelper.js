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

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        // do something
    } else if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty")
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
