import * as R from "ramda"
import axios from "axios"

import phones from "mocks/phones"
import categories from "mocks/categories"

export async function fetchPhones() {
  const getData =  await axios.get('http://www.mocky.io/v2/5ec3e45c300000e4b039c511')
  return  JSON.parse(getData.phones)
}

export async function loadMorePhones() {
  return new Promise((resolve, reject) =>{
    resolve(phones)
    // reject('err') 
  })
}


export async function fetchPhoneById(id) {
  return new Promise((resolve, reject) =>{
    const phone = R.find(R.propEq('id', id), phones)
    resolve(phone)
    // reject('err') 
  })
}

export async function fetchCategories() {
  return new Promise((resolve, reject) =>{
    resolve(categories)
    // reject('err') 
  })
}
