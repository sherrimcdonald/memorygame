//Fires when HTML document has been completely loaded and parsed.
document.addEventListener("DOMContentLoaded", function(event) {

//Creates a cards array object
var cards = [
 {
 	rank: "queen",
 	suit: "hearts",
 	cardImage: 'images/queen-of-hearts.png'
 },

 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: 'images/queen-of-diamonds.png'
 },

 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: 'images/king-of-hearts.png'
 },

 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: 'images/king-of-diamonds.png'
 }


];

//Defines and initiates an array to pass in the values from cards object.
var cardsInPlay = [];

//Function to check when two cards are selected, if they match
var checkForMatch = function() {

	if(cardsInPlay[0] === cardsInPlay[1]){
		
		alert("You found a match");
	  }else {
		alert("Sorry try again");
		}

  };

//Function that fires flipping of the cards from back side to front.
var flipCard = function() {

var cardId = this.getAttribute('data-id');

this.setAttribute('src',cards[cardId].cardImage);

cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2) {

	checkForMatch();
  }
};
console.log("User Flipped" + cards[cardID].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardID].suit);

//Function that loads card images to the board.
var createBoard = function(){
	for(var i = 0; i < cards.length; i++) {
		
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement);

	}
};
//Fires above function. 
createBoard();

});

//Refreshes browser's page to reload the game in HTML button.
function reloadGame() {
	window.location.reload();
};