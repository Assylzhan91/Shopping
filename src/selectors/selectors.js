import * as R from "ramda"


export const getPhoneById = (state, id)=> R.prop(id, state.phones)


export const getActiveCategoryId = ownProps => R.path(['match', 'params', 'id'], ownProps)


export const getPhones = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps)
  
  const applySearch = item => R.contains(
    state.phonesPageReducer.search,
    R.prop('name', item)
  )
  
  const applyCategory = item => R.contains(
    activeCategoryId,
    R.prop('categoryId', item)
  )
  
  
  return R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map( id => getPhoneById(state, id)),
  )(state.phonesPageReducer.ids)
}


export const getRenderedPhonesLength = state =>R.length(state.phonesPageReducer.ids)


export const getTotalBasketCount = state => state.basketReducer.length


export const getTotalBasketPrice = state => {
  return R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getPhoneById(state, id))
  )(state.basketReducer)

}


export const getCategories = state => Object.values(state.categoriesReducer)


export const getBasketPhonesWithCount = state => {
  
  const phoneCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basketReducer)
  
  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)
  const uniqueIds = R.uniq(state.basketReducer)
  
  const phones =  R.compose(
    R.map(phoneWithCount),
    R.map(id => getPhoneById(state, id))
  )(uniqueIds)

  return phones
}
