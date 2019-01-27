import { combineReducers } from 'redux';

// Reducers
import deck from './deck';
import hand from './hand';
import playingField from './playingField';

export default combineReducers({
    deck, hand, playingField
});