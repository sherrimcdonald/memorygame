
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

//Function to check if two cards match when selected 
var checkForMatch = function (){
    if  (cardsInPlay[0] === cardsInPlay[1]) { 
	alert("You found a match!");
    }else {
    alert("Sorry, try again.");
   }
 }

//Function that fires flipping of the cards from back side to front.
var flipCard = function() {

var cardId = this.getAttribute('data-id');

this.setAttribute('src',cards[cardId].cardImage);

cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2) {

	checkForMatch();
  }
};

//Function to load card images to the board.
var createBoard = function(){
	for(var i = 0; i < cards.length; i++) {
		
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement);

	}
};
createBoard();


//Refreshes browser's page to reload the game in HTML button.
function reloadGame() {
	window.location.reload();
};