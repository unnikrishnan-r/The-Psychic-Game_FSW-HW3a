// ******************VARIABLES WILL BE DEFINED HERE ************************************************
//Variables to map values back to screen
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessLeft = document.getElementById("guessLeft");
var guessSoFar = document.getElementById("guessSoFar");

//Counter Variables
var totalGuess = 9;
var winCounter = 0;
var lossCounter = 0;

//Variables for storing computer and user choice
var currentUserChoice;
var computerChoice;

//Array to store the user guess in a game
var userGuess = [];

//Array to store letters for computer to choose from
var letterArray = [];

//Variable to determine whether a game has started (first time) or for restarting
var hasGameStarted = false;


// ******************FUNCTIONS WILL BE DEFINED HERE ************************************************

// The array will be populated with  A-Z using a for loop.
// Here 65 and 90 are character code of A and Z respectively.
// This will be used to store the letters from which computer can make a choice

function generateLetterArray() {
    for (var i = 65; i <= 90; i++) {
        letterArray.push(String.fromCharCode(i));
    }
}
//Validate the user choice.
//If Win - Increment the Win counter and restart the game
//If Incorrect Guess - Decrement the guess counter. If Guess becomes 0, increment loss counter and restart
function validateUserGuess() {
    if (currentUserChoice === computerChoice.toLowerCase()) {
        winCounter++;
        restartGame();
    } else {
        totalGuess--;
        guessLeft.textContent = totalGuess;
        guessSoFar.textContent = userGuess;
        if (totalGuess === 0) {
            lossCounter++;
            restartGame();
        }
    }
}

// Restarts the game by resetting the variables and populating Win/Loss counter on the screen.
function restartGame() {
    winsText.textContent = winCounter;
    lossesText.textContent = lossCounter;
    totalGuess = 9;
    userGuess = [];
    hasGameStarted = false;
    document.querySelector("#computerMadeItsChoice").innerHTML = "Press any key to restart the game";
}

// ******************MAIN PROCESS STARTS HERE ************************************************

//Generate a array of A-Z
generateLetterArray();
console.log(letterArray);
document.querySelector("#computerMadeItsChoice").innerHTML = "Press any key to start the game";

// Captures key press by user
document.onkeyup = function (event) {
    //Checks if this is the key press indicating to start the ganme
    if (totalGuess === 9 && !hasGameStarted) {
        //Let the Computer make a random choice:
        computerChoice = letterArray[Math.floor(Math.random() * letterArray.length)];
        console.log(computerChoice);
        document.querySelector("#computerMadeItsChoice").innerHTML = "Computer made its choice, make yours";
        hasGameStarted = true;
        return;

    }

    //Populating the user choice variables and arrays
    currentUserChoice = event.key.toLowerCase();
    userGuess.push(currentUserChoice);

    //Calls the function to validate the User Guess.
    validateUserGuess();
}