import { CREATE_HAND } from './types';

var hand;

export function createHand(cards) {
    hand = cards;
    return{
      type: CREATE_HAND,
      payload: hand
    }
}