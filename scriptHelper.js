// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget"); 
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
   if (isNaN(testInput) === false){
    return "Is a Number";
   } else if (isNaN(testInput) === true) {
    return "Is not a Number";
   } else if (testInput === undefined || testInput === null || testInput === "") {
    return "Empty";
   } else {
    let x = `Error parsing input ${testInput}`
    return x;
   }
}
//document.getElementById("update");
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    let entries = [pilot, copilot, fuelLevel, cargoLevel];
    let validatedEntries = [];
    for (i=0; i < entries.length; i++){
       validatedEntries.push(validateInput(entries[i])); //runs each entry thru validate input and pushes to an array validatedEntries
    }; 
    if (validatedEntries[0] === "Is a Number" || validatedEntries[1] === "Is a Number" || validatedEntries[2] === "Is not a Number" || validatedEntries[3] === "Is not a Number" || validatedEntries.includes("Empty"))
    {//checks pilot and copilot number if they're valid, if not throws something for user to do. I never stopped to consider whether or not I should, only that I could.
        alert("All fields require valid input!");
    } else if (entries[2] == 0 || entries[3] == 0) {
        alert("Fuel or Cargo cannot be zero!");
    } else 
    {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");
        if (cargoLevel >= 10000 || fuelLevel < 10000)
        {
            list.style.visibility = "visible";
            if (fuelLevel < 10000){
                fuelStatus.innerHTML = "Not enough fuel for the journey"
            }
            if (cargoLevel >= 10000){
                cargoStatus.innerHTML = "Too much mass for the shuttle to take off"
            }
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red";
        } else {
        launchStatus.innerHTML = "Shuttle ready for launch"
        launchStatus.style.color = "green";
        }
    }
    //console.log(entries);
}

async function myFetch() { //fetches planets, throws error if issue with site.
    let planets = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });
    //console.log(planets);
    return planets;
    
    // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    // response.json().then(function(json) {
    //     const destination = document.getElementById("destination");
    //     destination.addEventListener("click", function(){
    //         destination.innerHTML = `
    //         <div>
    //             <h3>Planet ${json[0].name}</h3>
    //             <img src=${json[0].image} height=250></img>
    //         </div>
    //         `;
    //     });
    // });
    // });

}

function pickPlanet(planets) { //randomizes planets and chooses
    let pickedPlanet = Math.floor(Math.random() * planets.length)
    //Math.floor(Math.random() * 10)
    return planets[pickedPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
