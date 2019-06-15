var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessLeft = document.getElementById("guessLeft");
var guessSoFar = document.getElementById("guessSoFar");

var totalGuess = 9;
var winCounter = 0;
var lossCounter = 0;
var userGuess = [];
var letterArray = [];



// The array will be populated with  A-Z using a for loop.
// Here 65 and 90 are character code of A and Z respectively.
// This will be used to store the letters from which computer can make a choice

function generateLetterArray(){
    for (var i=65;i<=90;i++){
        letterArray.push( String.fromCharCode(i));
    }
}
//Main Process Here

//Generate a array of A-Z
generateLetterArray();
console.log(letterArray);

//Let the Computer make a random choice:
var computerChoice = letterArray[Math.floor(Math.random() * letterArray.length)];
console.log(computerChoice);
document.querySelector("#computerMadeItsChoice").innerHTML = "Computer made its choide, make yours";
