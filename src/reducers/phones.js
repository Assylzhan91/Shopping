import * as R from "ramda"

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS,
  IS_RESIZE_MOBILE_WIDTH,
} from "actions/actionTypes"

const initialState = {
  isMobileWidth: false
}

export default (state = initialState, {type, payload})=>{
  switch (type){
    case FETCH_PHONES_SUCCESS:
      let newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues)
    
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, moreValues)
    
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)
    
    case IS_RESIZE_MOBILE_WIDTH:
      return {
        ...state,
        isMobileWidth: payload
      }
    default: 
      return  state
  }

}
