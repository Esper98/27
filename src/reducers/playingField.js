import { ADD_TO_PLAYINGFIELD } from '../actions/types'

const initialState = {
    playingField: [],
}

export default function playingFieldReducer (state = initialState, action) {
  
  switch (action.type) {

    case ADD_TO_PLAYINGFIELD:
        return {
            ...state,
            playingField: action.payload,
        }
    default:
      return state
  }
}