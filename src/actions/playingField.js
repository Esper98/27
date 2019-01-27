import { ADD_TO_PLAYINGFIELD, REMOVE_FROM_PLAYINGFIELD } from './types';

var playingField = [];

export function addToPlayingField(card) {
    playingField.push(card)
    return{
        type: ADD_TO_PLAYINGFIELD,
        payload: playingField
    }
}
export function removeFromPlayingField(card) {
    console.log(playingField)
    var index = playingField.indexOf(card);
    if (index > -1) {
        playingField.splice(index, 1);
    }
    console.log(playingField)
    return{
        type: REMOVE_FROM_PLAYINGFIELD,
        payload: playingField
    }
}