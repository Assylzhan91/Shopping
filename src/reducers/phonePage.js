import * as R from "ramda";
import {
  FETCH_PHONE_BY_ID_SUCCESS
} from "actions/actionTypes"

const initialState = {
  ids: null
}


export default (state = initialState, {type, payload})=>{
  switch (type) {
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.merge(state, {
        ids: R.prop('id', payload)
      })
    default:
      return  state
  }

}
