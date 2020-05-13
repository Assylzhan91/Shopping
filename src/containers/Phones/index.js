import React, {Component} from 'react'
import {Row, Col, Button, Image, Figure } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as R from 'ramda'

import {fetchPhones} from "actions"
import {getPhones} from "selectors/selectors"



class  App extends  Component{
  
  componentDidMount() {
    this.props.fetchPhones()

  }
  
  renderPhone(phone, idx){
    const shortDecription = `${R.take(55, phone.description)}...`
    return (
      <Col md={4} lg={4} sm={4} className="book-list">
        <Figure className='thumbnail'>
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
            <div className="btn-wrapper d-flex">
              <Button variant="outline-warning">
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
    let  {phones} = this.props
    return (
      <Row className="books">
        {
          phones.map((phone, idx)=> this.renderPhone(phone, idx))
        }
      </Row>
    )
  }
}

const mapStateToProps = (state)=>{
  return { 
    phones: getPhones(state)
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchPhones: () => dispatch(fetchPhones())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App) 
