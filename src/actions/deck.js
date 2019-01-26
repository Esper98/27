
import { CREATE_DECK } from './types';
import { DRAW_CARDS } from './types';

var deck;

export function createDeck() {
    deck = ["3", "X", "1", "3", "X", "3"]; 

    return{
      type: CREATE_DECK,
      payload: deck
    }
}

export function drawCards() {
  cards = [];
  cards.push(deck.pop());

  return{
    type: DRAW_CARDS,
    payload: cards
  }
}