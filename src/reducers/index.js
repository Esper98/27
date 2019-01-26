import { combineReducers } from 'redux';

// Reducers
import deck from './deck';
import hand from './hand';

export default combineReducers({
    deck, hand
});