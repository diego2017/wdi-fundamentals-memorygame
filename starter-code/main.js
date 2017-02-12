console.log("JS file is connected to HTML! Woo!")
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardOne === cardTwo) {
//	alert('You found a match')
// } else if (cardThree === cardFour) {
// 	alert ('You found a match')
// } else if (cardOne !== cardThree) {
//	alert ('Sorry, try again')
//} 

var gameBoard = document.getElementById('game-board');
var createCards = function () {

	var cards = 4;
for (var i=0; i<cards.length; i++) {
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    gameBoard.appendChild(cardDiv);
  }
 }

	