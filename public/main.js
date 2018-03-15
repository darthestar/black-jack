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

//   // 4 suits ....
const deal = () => {

  let playerArray = [];
  let computerArray = [];

  for (var i = 0; i < 1; i++) {
    let card1 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
    let card2 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)

    playerArray.push(card1);
    playerArray.push(card2);
  }

  console.log("this is after player push");
  checkCard(playerArray);
  console.log(playerArray);

  for (var i = 0; i < 1; i++) {
    let card1 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)
    let card2 = (Math.ceil(Math.random() * Math.ceil(52)) % 13)

    computerArray.push(card1);
    computerArray.push(card2);
  }

  console.log("this is after computer push");


  console.log(computerArray);
  console.log(playerArray, computerArray);
  checkCard(computerArray);
  playerHands(playerArray, computerArray);

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
//   playerhand = {
//     card1 = '',
//     card2 = '',
//   }

//-- create player and computer hands
// const displayHands
//-- 2 cards face down to dealer, 2 cards face up to player
//-- buttons to' hit or stay for player

const playerHands = (PlayerHand, ComputerHand) => {
  console.log("Player hands function")
  let playerhand = PlayerHand;
  let computerhand = ComputerHand;

  const _playerHandSection = document.createElement("section");
  _playerHandSection.textContent = "Your cards are: " + PlayerHand;
  document.querySelector(".player-hand").appendChild(_playerHandSection);

  const _computerHandSection = document.createElement("section");
  _computerHandSection.textContent = "Dealer cards are:" + ComputerHand;
  document.querySelector(".dealer-hand").appendChild(_computerHandSection);
  scoreCard(PlayerHand, ComputerHand);
}
// (a) Let's say that scores between 1 and 13 represent Hearts.

// (b) Let's say that scores between 14 to 26 represent Diamonds.

// (c) Let's say that scores between 27 to 39 represent Clubs.

// (d) Let's say that scores between 40 to 52 represent Spades.
// const assign10Value = (finalCard) => {
//   if (finalCard === 0 || finalCard === 11 || finalCard === 12) {
//     finalCard = 10
//   }
// }



const scoreCard = (PlayerHand, ComputerHand) => {
  let playerHandSum = 0;
  for (var i = 0; i < 2; i++) {
    playerHandSum += PlayerHand[i];
  }
  console.log("hand sum" + playerHandSum)
  const _playerHandSection = document.createElement("section");
  _playerHandSection.textContent = "Card total is " + playerHandSum + " -Hit or Stay? \r\n" ;
  document.querySelector(".player-hand").appendChild(_playerHandSection);
};



//-- //play the game 
//-- player decides to hit, or stay 
//--calculate hand score--  bust? - game over?
//twoRandomScores=()=>{
//   let score1= Math.random()*10;
//   let score2 = Math.random()*10;

//   let sum = score1 + score2;
//   return sum;
// }

//--  computer hits until it reaches 18 or busts
//--calculate hand score--  bust? - game over?

//display results -- winner, who is closest to 21


//--button to play again, reset hands and reshuffle


document.addEventListener('DOMContentLoaded', main)
