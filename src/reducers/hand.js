import { CREATE_HAND } from '../actions/types'

const initialState = {
    hand: null,
}

export default function handReducer (state = initialState, action) {
  
  switch (action.type) {

    case CREATE_HAND:
        return {
            ...state,
            hand: action.payload,
        }
    default:
      return state
  }
}