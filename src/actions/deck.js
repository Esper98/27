
import { CREATE_DECK } from './types';
import { clearPile } from './pile';

var deck;

export function createDeck() {
	deck = ["3", "X", "1", "3", "X", "3", "1","X", "3", "1"];
	shuffleCards(deck);
	return {
		type: CREATE_DECK,
		payload: deck
	}
}

function shuffleCards(cards) {
	var j, x, i;
	for (i = cards.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = cards[i];
		cards[i] = cards[j];
		cards[j] = x;
	}
}

export function refillDeck(cards) {
	deck = cards;
	shuffleCards(deck);
}

export function drawCards(amount) {
	cards = [];
	for (let i = 0; i < amount; i++) {
		if (deck.length > 0) {
			refillDeck(clearPile());
		}
		cards.push(deck.pop());
	}
	return cards;
}