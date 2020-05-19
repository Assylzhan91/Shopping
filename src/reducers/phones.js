import * as R from "ramda"

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS,
  IS_RESIZE_MOBILE_WIDTH,
} from "actions/actionTypes"
import {CHANGE_GRID_SYSTEM} from "../actions/actionTypes";

const initialState = {
  isMobileWidth: false,
  countArr: 3,
  colMd9: 9,
  colMd3: 3,
  heightLinkPhone: false
}

export default (state = initialState, {type, payload, colMd9, colMd3,heightLinkPhone})=>{
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
      
      case CHANGE_GRID_SYSTEM:
       
      return {
        ...state,
        countArr: payload,
        colMd9,
        colMd3,
        heightLinkPhone
      }
    default: 
      return  state
  }

}
