import { ADD_TO_PILE } from './types';
var pile = [];
var topCard;

export function addToPile(cards) {
    //todo make parameter array and add all to pile
    //pile.push(card)

    cards.forEach(card => {
        pile.pop(card);
        topCard = card;
    });
    return{
      type: ADD_TO_PILE,
      payload: pile,
      topCard: topCard
    }
}

export function clearPile(){
    cards = pile;
    pile = ['?']
    return cards;
}