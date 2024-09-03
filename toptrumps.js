const cards = [
  {
    name: "Card 1",
    category: {
      attack: 80,
      defense: 60,
      speed: 70,
    },
  },
  {
    name: "Card 2",
    category: {
      attack: 70,
      defense: 80,
      speed: 60,
    },
  },
  // Add more cards here
];

const playerCards = [cards[0], cards[1]];
const categories = Object.keys(playerCards[0].category);

let currentCardPlayer1;
let currentCardPlayer2;

function initializeGame() {
  currentCardPlayer1 = playerCards[0];
  currentCardPlayer2 = playerCards[1];

  updateCards();
}

function updateCards() {
  const player1CardEl = document.querySelector(".player-1");
  const player2CardEl = document.querySelector(".player-2");

  player1CardEl.dataset.category = categories[0];
  player2CardEl.dataset.category = categories[0];
