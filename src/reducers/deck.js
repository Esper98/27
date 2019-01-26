import { CREATE_DECK, DRAW_CARDS } from '../actions/types'

const initialState = {
    deck: [{}, {}],
}

export default function deckReducer (state = initialState, action) {
  
  switch (action.type) {

    case CREATE_DECK:
        return {
            ...state,
            deck: action.payload,
        }
    case DRAW_CARDS:
        return {
            ...state,
            cards: action.payload,
        }
    default:
      return state
  }
}