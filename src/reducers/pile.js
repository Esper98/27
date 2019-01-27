import { ADD_TO_PILE } from '../actions/types'

const initialState = {
    pile: ['-'],
    topCard: ['-']
}

export default function pileReducer (state = initialState, action) {
  
  switch (action.type) {

    case ADD_TO_PILE:
        return {
            ...state,
            pile: action.payload,
            topCard: action.topCard
        }
    default:
      return state
  }
}