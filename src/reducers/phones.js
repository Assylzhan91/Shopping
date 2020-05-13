import {
  FETCH_PHONES_SUCCESS
} from "actions/actionTypes"

const initialState = {
  phoneList: []
}

export default (state = initialState, {type, payload})=>{
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return {
        ...state, 
        phoneList: payload
      }
      
    default: 
      return  state
  }

}
