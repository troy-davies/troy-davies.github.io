const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Skip', 'Reverse', 'Draw Two'];
let deck = [];
let playerHand = [];
let currentCard = null;

// Create a deck of UNO cards
function createDeck() {
    for (let color of colors) {
        for (let value of values) {
            deck.push({ color, value });
            if (value !== '0') { // Add a second copy for 1-9
                deck.push({ color, value });
            }
        }
    }
    shuffleDeck();
}

// Shuffle the deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Draw a card from the deck
function drawCard() {
    if (deck.length > 0) {
        const card = deck.pop();
        playerHand.push(card);
        displayPlayerHand();
        updateMessage(`You drew a ${card.color} ${card.value}`);
    } else {
        updateMessage("No more cards in the deck!");
    }
}

// Display player's hand
function displayPlayerHand() {
    const handDiv = document.getElementById('player-hand');
    handDiv.innerHTML = '';
    playerHand.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = `${card.color} ${card.value}`;
        handDiv.appendChild(cardDiv);
    });
}

// Update message
function updateMessage(msg) {
    document.getElementById('message').textContent = msg;
}

// Play a card (basic functionality)
function playCard() {
    if (playerHand.length > 0) {
        const card = playerHand.pop();
        currentCard = card;
        updateMessage(`You played a ${card.color} ${card.value}`);
        displayPlayerHand();
    } else {
        updateMessage("No cards to play!");
    }
}

// Event listeners
document.getElementById('draw-card').addEventListener('click', drawCard);
document.getElementById('play-card').addEventListener('click', playCard);

// Initialize the game
createDeck();
