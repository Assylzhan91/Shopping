import React from 'react'
import BasketCart from 'components/BasketCart'
import Search from 'components/Search'
import Categories from 'components/Categories'

const Sidebar = props => {
  
  return (
    <div>
      <BasketCart/> 
      <Search/> 
      <Categories/> 
    </div>
  )
}

export default Sidebar

