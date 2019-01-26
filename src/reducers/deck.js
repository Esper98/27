import { CREATE_DECK } from '../actions/types'

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
    default:
      return state
  }
}