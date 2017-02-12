//alert("JS file is connected to HTML! Woo!")
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

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {

  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);


    board.appendChild(cardElement);
  }

}


//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='http://i.imgur.com/djvf7oP.png'>"; // king
  } else {
    this.innerHTML = "<img src='http://i.imgur.com/ojMScDI.png'>"; //queen
  }

  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}

function isMatch (cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}
createBoard ();