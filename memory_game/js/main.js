
//Create cards array

var cards = ["queen", "queen", "king", "king"];

//Defines and initiates an array to pass in the values from cards object.
var cardsInPlay = [];

//Create a variable to represent the first card that the user flipped.
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

if (cardsInPlay.length === 2) {
	if  (cardsInPlay[0] === cardsInPlay[2]){ 
	alert("You found a match.");
    }else {
    alert("Sorry, try again.");
   }
};

