 import * as R from "ramda"
 
  import {
  ADD_PHONE_TO_BASKET,
  REMOVE_ITEM_FROM_BASKET,
  CLEAN_BASKET
} from "actions/actionTypes"

const initialState = []


export default (state = initialState, {type, payload})=>{
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return [
        ...state,
        payload
      ]
    case REMOVE_ITEM_FROM_BASKET:
      return  R.without(R.of(payload), state)
    case CLEAN_BASKET:
      
      return  initialState
      
    default:
      return  state
  }

}
