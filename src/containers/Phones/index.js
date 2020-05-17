import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Layout from 'containers/Layout'
import {connect} from 'react-redux'
import * as R from 'ramda'
import {Row, Col, Button, Figure} from 'react-bootstrap'

import style from './phones.module.scss'

import {fetchPhones, loadMorePhones, heightAuto, addPhoneToBasket} from "actions"
import {getPhones} from "selectors/selectors"




class  App extends  Component{

  componentDidMount() {
    this.props.fetchPhones()
    window.addEventListener('resize', ()=> this.props.heightAuto(575))
 

    this.props.heightAuto(575)
  }
  
  renderPhone(phone, idx){
    const shortDecription = `${R.take(55, phone.description)}...`
    const {addPhoneToBasket} = this.props
    
    return (
    <Col md={4} lg={4} sm={4} className={`book-list d-flex flex-column`} key={idx}>
        <Figure className={`thumbnail d-flex flex-column`}>
          <Figure.Image
            src={phone.image} 
            thumbnail 
            alt={phone.name}
          />
          <Figure.Caption>
            <h4 >${phone.price}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>
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
      </Col>
    )
  }
  
  render() {
    let  {phones, loadMorePhones, isMobileWidth} = this.props
    const cls = ['books']
      if(isMobileWidth){
        cls.push(style.item)
      }
    return (
      <Layout>
        <Row className={cls.join(' ')}>
          {
            phones.map((phone, idx)=> this.renderPhone(phone, idx))
          }
        </Row>
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

const mapStateToProps = (state)=>{
  return { 
    phones: getPhones(state),
    isMobileWidth: state.phones.isMobileWidth
  }
}
const mapDispatchToProps = ({
  fetchPhones,
  loadMorePhones,
  heightAuto,
  addPhoneToBasket
})



export default connect(mapStateToProps, mapDispatchToProps)(App) 
