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
  SEARCH_PHONE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE, 
  CHANGE_GRID_SYSTEM,
  REMOVE_ITEM_FROM_BASKET,  
} from "./actionTypes"

import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhoneByIdApi,
  fetchCategories as fetchCategoriesApi
} from "mocks"

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



export function fetchCategories(){
  return  async (dispatch)=>{
    dispatch({
      type: FETCH_CATEGORIES_START
    })

    try {
      const categories = await fetchCategoriesApi()

      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
      })
    }
    catch (err) {
      dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        payload: err,
        isError: true
      })
    }
  }
}

export function removeItemFromBasket(id){
  return dispatch=>{
    dispatch({
      type: REMOVE_ITEM_FROM_BASKET,
      payload: id
    })
  }
}


export function changeGridSystem(){
  return (dispatch, ownProps) =>{
    let colMd9 = ownProps().phones.colMd9
    let colMd3 = ownProps().phones.colMd3
    let heightLinkPhone = ownProps().phones.heightLinkPhone
    

    let countArr = 3
    if(window.innerWidth < 1199 && window.innerWidth >= 575){
      heightLinkPhone = true
    }
    else if(window.innerWidth <= 574){
       heightLinkPhone = false
    }
    else{
      heightLinkPhone = false
    }
    
    if(window.innerWidth < 991 && window.innerWidth > 769){
      countArr = 2
      colMd9 = 8
      colMd3 = 4
    }
   
    else if(window.innerWidth >= 575 && window.innerWidth < 769){
      countArr = 2
    }
    else if(window.innerWidth <= 574){
      countArr = 1
      colMd9 = 9
      colMd3 = 3
    }
    else{
      countArr = 3
      colMd9 = 9
      colMd3 = 3
    }


    dispatch({type: CHANGE_GRID_SYSTEM, payload: countArr, colMd9, colMd3, heightLinkPhone})
  }
}



