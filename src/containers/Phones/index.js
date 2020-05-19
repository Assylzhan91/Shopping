import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Layout from 'containers/Layout'
import {connect} from 'react-redux'
import * as R from 'ramda'
import {Row, Col, Button, Figure} from 'react-bootstrap'

import style from './phones.module.scss'
import classNames from 'classnames'

import {
  fetchPhones, 
  loadMorePhones, 
  heightAuto, 
  addPhoneToBasket,
  fetchCategories,
  changeGridSystem
} from "actions"
import {getPhones} from "selectors/selectors"




class  App extends  Component{
  state = {
    countArr: 3
  }

  componentDidMount() {
    this.props.fetchPhones()
    this.props.fetchCategories()
    window.addEventListener('resize', ()=> {
      this.props.heightAuto(575)
      this.props.changeGridSystem()
    })
    this.props.heightAuto(575)
    
  }
  
  renderPhone(phone, idx){
    const shortDecription = `${R.take(55, phone.description)}...`
    const {addPhoneToBasket, heightLinkPhone} = this.props
    
    return (
    <div md={4} lg={4} sm={4} className={`book-list d-flex flex-column`} key={idx}>
        <Figure className={`thumbnail d-flex flex-column`}>
          <Figure.Image
            src={phone.image} 
            thumbnail 
            alt={phone.name}
          />
          <Figure.Caption>
            <h4 >${phone.price}</h4>
            <h4 >
              <Link to={`/phones/${phone.id}`}
                    style={{
                      height:  heightLinkPhone ? '55px' : null,
                      display: 'block'
                    }}
              >
                {phone.name}
              </Link>
            </h4>
            <p>{shortDecription}</p>
            <div className="btn-wrapper d-flex buttons">
              <Button 
                onClick={()=> addPhoneToBasket(phone.id)}
                variant="outline-warning">
                Buy now
              </Button>
              
              <Button variant="outline-danger  ml-3">
                <Link to={`/phones/${phone.id}`}>
                 Details...
                </Link>
              </Button>
              
            </div>
          </Figure.Caption>
          
        </Figure>
      </div>
    )
  }
  
  render() {
    let  {phones, loadMorePhones, isMobileWidth} = this.props
    
    const cls = classNames('books', {
      [style.item]:  isMobileWidth
    })
      
      
    
    const splitArr = (arr, chunks) =>
    arr.reduce((acc, n, i) => ((acc[i % chunks] = acc[i % chunks] || []).push(n), acc), []);

    const renderPhones =  splitArr(phones, this.props.countArr).map((subArr, sunIndex)=> {
      
      return (
        <div className={cls} key={sunIndex}>
          {
            subArr.map((phone, idx)=> this.renderPhone(phone, idx))
          }
        </div>
      )
    })
    
    return (
      <Layout>
        <h2>{this.props.countArr}</h2>
        <div className='books-wrapper d-flex'>
          {renderPhones}  
        </div>
        <Row>
          <Col md={12}>
            <Button onClick={loadMorePhones}>
              Load more
            </Button>
          </Col>
        </Row>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps)=>{
  return { 
    phones: getPhones(state, ownProps),
    isMobileWidth: state.phones.isMobileWidth,
    countArr: state.phones.countArr,
    heightLinkPhone: state.phones.heightLinkPhone,
  }
}
const mapDispatchToProps = ({
  fetchPhones,
  loadMorePhones,
  heightAuto,
  addPhoneToBasket,
  fetchCategories,
  changeGridSystem
})



export default connect(mapStateToProps, mapDispatchToProps)(App) 
