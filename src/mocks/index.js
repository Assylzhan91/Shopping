import * as R from "ramda"
import phones from "mocks/phones"

export async function fetchPhones() {
  return new Promise((resolve, reject) =>{
    resolve(phones)
    // reject('err') 
  })
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
