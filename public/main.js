const main = () => {
}




//make a deck
//52 cards
//create players, player and computer
//deal cards -- need two cards and check the card not used again

const playGame = () => {
  console.log("I am at play game");
  deal();
}

const deal = () => {
  let playerArray = [];
  let computerArray = [];

  for (var i = 0; i < 1; i++) {
    // %13 to account for 4 suits ....
    let card1 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
    let card2 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
    playerArray.push(card1);
    playerArray.push(card2);
  }

  checkCard(playerArray);

  for (var i = 0; i < 1; i++) {
    let card1 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
    let card2 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
    computerArray.push(card1);
    computerArray.push(card2);
  }
  checkCard(computerArray);
  console.log(playerArray, computerArray);
  displayPlayerHand(playerArray)
  displayComputerHand(computerArray);

}

const checkCard = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === 11 || array[i] === 12) {
      array[i] = 10;
    }
    else if (array[i] === 1) {
      array[i] = 11;
    }
  }
}

//-- display player and computer hands
//-- 2 cards face down to dealer, 2 cards face up to player
//-- buttons to' hit or stay for player

const displayPlayerHand = (PlayerHand) => {
  console.log("Player hands function")
  let playerhand = PlayerHand;

  const _playerHandSection = document.createElement("section");
  _playerHandSection.textContent = "Your cards are: " + PlayerHand;
  document.querySelector(".player-hand").appendChild(_playerHandSection);

  const _computerHandSection = document.createElement("section");
  _computerHandSection.textContent = "Dealer cards are:";
  document.querySelector(".dealer-hand").appendChild(_computerHandSection);

  scoreCard(PlayerHand);
}

let computerhand = [];

const displayComputerHand = (ComputerHand) => {
  console.log("Computer hands function")
  let computerhand = ComputerHand;  

  const _computerHandSection = document.createElement("section");
  _computerHandSection.textContent = "Dealer cards are hidden";
  document.querySelector(".dealer-hand").appendChild(_computerHandSection);

  computerhand = ComputerHand;
}
// (a) Let's say that scores between 1 and 13 represent Hearts.

// (b) Let's say that scores between 14 to 26 represent Diamonds.

// (c) Let's say that scores between 27 to 39 represent Clubs.

// (d) Let's say that scores between 40 to 52 represent Spades.

//-- after initial deal, playing the game
//-- player decides to hit, or stay 
//--calculate hand score--  bust? - game over?

let pHand = [];
let cHand = [];
let newHand = [];
let newHandSum = 0;

const sum = (hand) => {
  let initialSum = 0;
  console.log("I am in the sum function and this is the hand " + hand);
  for (var i = 0; i < hand.length; i++) {
    initialSum += hand[i];
  }
  newHandSum = initialSum;
  console.log(newHandSum + " =hand has been summed")
  return newHandSum;
}

//--calculate hand score--  bust? - game over?
const scoreCard = (PlayerHand) => {
  console.log("this is score card top " + PlayerHand);

  sum(PlayerHand)
  console.log(newHandSum + " = new hand in score card function");
  let playerHandSum = newHandSum;
  if (playerHandSum > 21) {
    bust();
  }
  else if (playerHandSum === 21) {
    blackJack();
  }
  else {
    const _playerHandSection = document.createElement("section");
    _playerHandSection.textContent = "Card total is " + playerHandSum + " -Hit or Stay?";
    document.querySelector(".player-hand").appendChild(_playerHandSection);
  }
  pHand = PlayerHand;
  pHandSum = playerHandSum;
  console.log("this is in score card function bottom for the player" + playerHandSum)

}
//display results -- after player stands, determine winner, who is closest to 21

computerPlay = (computerhand) => {

  sum(computerhand);
  let computerHandSum = newHandSum;

  if (computerHandSum > 21) {
    document.createElement("section");
    _computerHandBusts.textContent = "Dealer busted. Player wins! ";
    document.querySelector(".dealer-cards").appendChild(_computerHandBusts);
  }
  else if (computerHandSum === pHandSum) {
    document.createElement("section");
    _computerAndPlayerTie.textContent = "Dealer and Player tie! ";
    document.querySelector(".dealer-cards").appendChild(_computerAndPlayerTie);
  }
  else {
    const _computerHandSection =
      document.querySelector(".dealer-cards").style.backgroundColor = "white";

    document.createElement("section");
    _computerHandSection.textContent = "Dealer total is " + computerHandSum;
    document.querySelector(".dealer-cards").appendChild(_computerHandSection);
    dealerHit();

  }
  cHandSum = computerHandSum;
}


const stay = () => {
  computerPlay(computerhand)
}

//after player stands with their hand, computer takes cards according to rules
//--  computer hits until it reaches 18 or busts

const dealerHit = () => {
  console.log("this is in the dealer hit function, *****computer hand total = " + cHandSum);

  if (cHandSum <= 18) {
    for (var i = 0; i < 1; i++) {
      let newCard = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
      cHand.push(newCard);
    }
    console.log(cHand + "= computer hand after getting another card")
    cHand = ComputerHand;

    checkCard(cHand);
    displayComputerHand(cHand)
    computerPlay(cHand);
  }
}


const hit = () => {
  console.log("this is in hit function, **** player*hand total = " + pHandSum);
  if (pHandSum > 21) {
    bust();
  }
  else if (pHandSum === 21) {
    blackJack();
  }
  else if (pHandSum < 22) {
    for (var i = 0; i < 1; i++) {
      let newCard = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
      pHand.push(newCard);
    }
    console.log(pHand + "= after hit clicked")

    checkCard(pHand);
    displayPlayerHand(pHand);
  }
}
const bust = () => {

  const _loseMessage = document.createElement("section");
  _loseMessage.textContent = "Sorry you busted!";
  document.querySelector(".bust").appendChild(_loseMessage);

}

const blackJack = () => {
  const _winMessage = document.createElement("section");
  _winMessage.textContent = "Congratulations you win!";
  document.querySelector(".bust").appendChild(_winMessage);

}

//--button to play again, reset hands and reshuffle


document.addEventListener('DOMContentLoaded', main)
