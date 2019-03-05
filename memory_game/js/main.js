
//Create cards array

var cards = ["queen", "queen", "king", "king"];
//Defines and initiates an array to pass in the values from cards object.
var cardsInPlay = [];

//Function to check if two cards match when selected 
var checkForMatch = function (){
    if  (cardsInPlay[0] === cardsInPlay[1]) { 
	alert("You found a match!");
    }else {
    alert("Sorry, try again.");
   }
 }

//Function that fires flipping of the cards from back side to front.
var flipCard = function(cardID) {
	console.log("User flipped " + cards[cardID])
	cardsInPlay.push(cards[cardID]);  
	if (cardsInPlay.length === 2) {
	checkForMatch();  
	  
  }
}

flipCard(0);
flipCard(2);


