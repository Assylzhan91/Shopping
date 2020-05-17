import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from '@blueprintjs/core'
import {connect} from "react-redux"
import {
  getTotalBasketCount,
  getTotalPrice
} from "selectors/selectors"


const BasketCart = ({totalBasketCount, totalPrice}) => {
  return (
    <div className='cart'>
      <div className='dropdown'>
        <Link
          to='/basket'
          id='dLabel'
          className='btn btn-inverse btn-block btn-lg'
        >
          <Icon
            icon='shopping-cart'
            className='p-0'
          />
          
          <span>{totalBasketCount} item(s) - ${totalPrice}</span>
        </Link>
      </div>  
    </div>
  )
}

const mapStateToProps = state=>{
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalPrice(state),
  }
}

export default connect(mapStateToProps)(BasketCart)

