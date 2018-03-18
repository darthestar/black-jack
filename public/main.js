const main = () => {
}




//make a deck
//52 cards
//create players, player and computer
//deal cards -- need two cards and check the card not used again
const computerPlayButton = document.querySelector(".play");
const hitButton = document.querySelector(".hit");
const stayButton = document.querySelector(".stay");

const hidePlay = () => {
  computerPlayButton.classList.add("hide");
  
}

const hidePlayerButtons=()=>{
  stayButton.classList.add("hide");
  hitButton.classList.add("hide");
}

const playGame = () => {
  console.log("I am at play game");
  deal();
}
let computerhand = [];

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
  displayComputerHand();
  computerhand = computerArray;
  hidePlay();

}

const checkCard = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === 11 || array[i] === 12) {
      array[i] = 10;
      if (array[i] === 1) {
        array[i] = 11;
      }
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

  scoreCard(PlayerHand);
}


const displayComputerHand = () => {
  console.log("Computer hands function")

  const _computerHandSection = document.createElement("section");
  _computerHandSection.textContent = "Dealer cards are hidden";
  document.querySelector(".dealer-hand").appendChild(_computerHandSection);
}
// (a) Let's say that scores between 1 and 13 represent Hearts.

// (b) Let's say that scores between 14 to 26 represent Diamonds.

// (c) Let's say that scores between 27 to 39 represent Clubs.

// (d) Let's say that scores between 40 to 52 represent Spades.

//-- after initial deal, playing the game
//-- player decides to hit, or stay 
//--calculate hand score--  bust? - game over?

let pHand = [];
// let cHand = [];
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

computerPlay = (newComputerHandSum) => {
  console.log("computer play total = " + newComputerHandSum)
  let computerHandSum = newComputerHandSum;

  if (computerHandSum > 21) {
    hidePlayerButtons();
    
    const _computerTotalSection =
      document.createElement("section");
    _computerTotalSection.textContent = "Dealer total is " + computerHandSum;
    document.querySelector(".dealer-cards").appendChild(_computerTotalSection);
    cHandSum = computerHandSum;
    const _computerHandBust =
      document.querySelector(".dealer-cards").style.color = "darkgreen";
    const _computerHandBusts = document.createElement("section");
    _computerHandBusts.textContent = "Dealer busted. Player wins! $$";
    document.querySelector(".dealer-cards").appendChild(_computerHandBusts);
  }
  else if (computerHandSum === pHandSum && (computerHandSum >= 18)) {
    hidePlayerButtons();
    
    const _computerTotalSection =
      document.createElement("section");
    _computerTotalSection.textContent = "Dealer total is " + computerHandSum;
    document.querySelector(".dealer-cards").appendChild(_computerTotalSection);
    cHandSum = computerHandSum;
    const _computerAndPlayerTie = document.createElement("section");
    _computerAndPlayerTie.textContent = "Dealer and Player tie! ";
    document.querySelector(".dealer-cards").appendChild(_computerAndPlayerTie);
  }
  else if (computerHandSum > pHandSum && (computerHandSum > 17)) {
    hidePlayerButtons();
    
    const _computerDealerWins =
      document.querySelector(".dealer-cards").style.color = "red";

    const _computerDealerTotal = document.createElement("section");
    _computerDealerTotal.textContent = "Dealer total is " + computerHandSum;
    document.querySelector(".dealer-cards").appendChild(_computerDealerTotal);

    const _computerDealerWin = document.createElement("section");
    _computerDealerWin.textContent = "Dealer Wins! ";
    document.querySelector(".dealer-cards").appendChild(_computerDealerWin);
  }

  else if (computerHandSum < pHandSum && (computerHandSum > 17)) {
    hidePlayerButtons();
    
    const _playerWon =
      document.querySelector(".dealer-cards").style.color = "darkgreen";

    const _playerWins = document.createElement("section");
    _playerWins.textContent = "Dealer total is " + computerHandSum;
    document.querySelector(".dealer-cards").appendChild(_computerDealerTotal);

    const playerWins2 = document.createElement("section");
    playerWins2.textContent = "Player WINS! ";
    document.querySelector(".dealer-cards").appendChild(_computerDealerWin);
  }
  
  else {
    const _computerHandSection =
      document.querySelector(".dealer-cards").style.backgroundColor = "white";

    const _computerTotalSection =
      document.createElement("section");
    _computerTotalSection.textContent = "Dealer total is " + computerHandSum;
    document.querySelector(".dealer-cards").appendChild(_computerTotalSection);
    cHandSum = computerHandSum;
    dealerHit(computerhand);
  }
}


const stay = () => {
  console.log("this is in stay function, computer hand is = " + computerhand);
  sum(computerhand);
  newComputerHandSum = newHandSum;
  computerPlay(newComputerHandSum);
}

//after player stands with their hand, computer takes cards according to rules
//--  computer hits until it reaches 18 or busts

const dealerHit = (computerhand) => {
  console.log("this is in the dealer hit function, *****computer hand total = " + cHandSum + "computer cards are " + computerhand);

  if (cHandSum <= 18) {
    for (var i = 0; i < 1; i++) {
      let newCard = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
      computerhand.push(newCard);
    }
    console.log(computerhand + "= computer hand after getting another card")

    checkCard(computerhand);
    sum(computerhand);
    computerPlay(newHandSum);
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
  hidePlayerButtons();

  const _loseMessage = document.createElement("section");
  _loseMessage.textContent = "Sorry you busted!";
  document.querySelector(".bust").appendChild(_loseMessage);
}

const blackJack = () => {
  hidePlayerButtons();
  
  const _winMessage = document.createElement("section");
  _winMessage.textContent = "Congratulations you win!";
  document.querySelector(".bust").appendChild(_winMessage);
}

//--button to play again, reset hands and reshuffle

// const hide = () => {
//   player1Buttons.classList.add("hide");
//   player2Buttons.classList.add("hide");
//   computerButton.classList.add("hide");
// }

document.addEventListener('DOMContentLoaded', main)
