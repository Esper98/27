import { combineReducers } from 'redux';

// Reducers
import deck from './deck';
import hand from './hand';
import pile from './pile';


export default combineReducers({
    deck, hand, pile
});