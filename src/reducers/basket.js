import {
  ADD_PHONE_TO_BASKET
} from "actions/actionTypes"

const initialState = []


export default (state = initialState, {type, payload})=>{
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return [
        ...state,
        payload
      ]
    default:
      return  state
  }

}
