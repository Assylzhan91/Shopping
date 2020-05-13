import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE
} from "./actionTypes"

import {fetchPhones as fetchPhonesApi} from "mocks/index"


export function fetchPhones(){
  return  async (dispatch)=>{
    dispatch(fetchPhonesStart())
    
    try {
      const phones = await fetchPhonesApi()
      
      dispatch(fetchPhonesSuccess(phones)) 
    }
    catch (err) {
      dispatch(fetchPhonesFailure(err, true))
    }
  }
}


export function fetchPhonesStart(phones) {
  return {  
    type: FETCH_PHONES_START
  }
}

export function fetchPhonesSuccess(phones) {
  return {
    type: FETCH_PHONES_SUCCESS,
    payload: phones
  }
}

export function fetchPhonesFailure(err, isError) {
  return {
    type: FETCH_PHONES_FAILURE,
    payload: err,
    isError
  }
}
