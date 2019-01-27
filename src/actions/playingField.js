import { ADD_TO_PLAYINGFIELD } from './types';

var playingField = [];

export function addToPlayingField(card) {
    playingField.push(card)
    return{
      type: ADD_TO_PLAYINGFIELD,
      payload: playingField
    }
}