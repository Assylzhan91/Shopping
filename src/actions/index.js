import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONE_BY_ID_FAILURE,
  IS_RESIZE_MOBILE_WIDTH,
  ADD_PHONE_TO_BASKET,
  SEARCH_PHONE
} from "./actionTypes"

import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhoneByIdApi,
} from "mocks/index"

import {getRenderedPhonesLength} from "selectors/selectors"


export function fetchPhones(){
  return  async (dispatch)=>{
    dispatch({
      type: FETCH_PHONES_START
    })
    
    try {
      const phones = await fetchPhonesApi()
      
      dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: phones
      })
    }
    catch (err) {
      dispatch({
        type: FETCH_PHONES_FAILURE,
        payload: err,
        isError: true
      })
    }
  }
}


export function loadMorePhones(){
  return  async (dispatch, getState)=>{

    const offset = getRenderedPhonesLength(getState())

    dispatch({
      type: LOAD_MORE_PHONES_START
    })

    try {
      const phones = await loadMorePhonesApi({offset})

      dispatch({
        type: LOAD_MORE_PHONES_SUCCESS,
        payload: phones
      })
    }
    catch (err) {
      dispatch({
        type: LOAD_MORE_PHONES_FAILURE,
        payload: err,
        isError: true
      })
    }
  }
}


export function fetchPhoneById(id){
  return  async dispatch=>{
    dispatch({
      type: FETCH_PHONE_BY_ID_START
    })

    try {
      const phone = await fetchPhoneByIdApi(id)

      dispatch({
        type: FETCH_PHONE_BY_ID_SUCCESS,
        payload: phone
      })
    }
    catch (err) {
      dispatch({
        type: FETCH_PHONE_BY_ID_FAILURE,
        payload: err,
        isError: true
      })
    }
  }
}


export function heightAuto(width){
  return  dispatch => {
    let localVar = false
      if(window.innerWidth <= width){
        localVar = true
      } 
    return  dispatch({type: IS_RESIZE_MOBILE_WIDTH, payload: localVar})
  }
}


export function addPhoneToBasket(id){
  
  return  dispatch => (
    dispatch({type: ADD_PHONE_TO_BASKET, payload: id})
  )
}


export function searchPhone(value){
  return  dispatch => (
    dispatch({type: SEARCH_PHONE, payload: value})
  )
}
