
import { CREATE_DECK } from './types';

export function createDeck() {
    var deck = ["3", "X", "1", "3", "X", "3"]; 

    return{
      type: CREATE_DECK,
      payload: deck
    }
}