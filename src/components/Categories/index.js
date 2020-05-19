import React from 'react'
import {ListGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import classNames from 'classnames'

import {getCategories, getActiveCategoryId} from 'selectors/selectors'

const Categories = ({categories, activeCategoryId}) => {

  const  renderCategories = (category, index) => {
    const listClass = classNames(
      'list-group-item', 
      {'active': category.id ===  activeCategoryId}
      )
    return (
      <Link to={`/categories/${parseInt(category.id)}`}
            key={index}
            className = {listClass}
      >
        {category.name}
      </Link>
    )
  }

  const getAllcategory = ()=> {
    const linkClass =  classNames(
      'list-group-item',
      {'active': activeCategoryId === undefined }
    )
    
    return (
      <Link to='/' className={linkClass}>
        All
      </Link>  
    )
  }
  return (
    <div className='well'>
      <h4>Brand</h4>
      <ListGroup>
        {getAllcategory()}
        {categories.map((category, index)=> renderCategories(category, index))}  
      </ListGroup>
    </div>
  )
}

const mapStateToProps = (state, ownProps) =>{
  return {
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Categories)

