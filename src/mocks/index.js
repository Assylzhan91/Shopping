import phones from "mocks/phones"

export async function fetchPhones() {
  return new Promise((resolve, reject) =>{
    resolve(phones)
    // reject('err') 
  })
}
