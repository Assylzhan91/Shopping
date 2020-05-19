import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col, Image, Form} from 'react-bootstrap'
import {Button, Icon} from '@blueprintjs/core'
import { connect } from 'react-redux'
import { fetchPhoneById, addPhoneToBasket} from 'actions'
import { getPhoneById } from 'selectors/selectors'
import BasketCart from "../../components/BasketCart"
import {heightAuto} from "actions"



class Phone extends Component {
  
  componentDidMount() {
    const {match, heightAuto} = this.props
    this.props.fetchPhoneById(match.params.id)
    window.addEventListener('resize', ()=> heightAuto(767))
    heightAuto(767)
  }
  
  renderFields(){
    const {phone} =  this.props
    const {
      cpu, camera, 
      size, weight, 
      display, battery,
      memory
    } =  phone
    const pickPhoneDate = {cpu, camera, size, weight, display, battery, memory}
    const columnField = Object.entries(pickPhoneDate)
    
    return columnField.map(([key, value])=>(
      <div className='column' key={key}>
          <div className='ab-details-title'>
            <p>{key}</p>
          </div>
          <div className='ab-details-info'>
            <p>{value}</p>
          </div>
      </div>
    ))
    
  }
  
  renderContent(){
    const {phone, tabletWidth} =  this.props
    const textAlign = tabletWidth ? 'text-center': ''
    return (
      <div className='thumbnail'>
        <Row>
          <Col md={6} className={textAlign}>
            <Image 
              src = {phone.image}
              thumbnail = {true}
              alt = {phone.name}
            />
          </Col>
          <Col md={6}>
            {this.renderFields()}
          </Col>
        </Row>
        <div className='caption-full'>
          <h4 className='text-success'>${phone.price}</h4>
          <h4 className='text-primary'>{phone.name}</h4>
          <p className='text-muted'>
            {phone.description}
          </p>
        </div>
      </div>
    )
  }
  
  renderSidebar(){
    const {phone, addPhoneToBasket} = this.props
    
    return (
      <div>
        <p className='lead'>Quick shop</p>
        <BasketCart/>
        <Form.Group>
          <h1>{phone.name}</h1>
          <h2>{phone.price}</h2>
        </Form.Group>
        <Link 
          to='/'
          className='btn btn-info btn-block btn-block mb-3 d-flex align-items-center justify-content-center'
        >
          <Icon
            icon='home'
            className='mr-1'
          /> Back to Store  
        </Link>
        <Button
          type='button'
          fill
          onClick={()=>addPhoneToBasket(phone.id)}
          text='Add to Cart'
        />
      </div>
    )
  }
  
  
  render() {
    const {phone} =  this.props
    
    return (
      <div className='view-container pt-5'>
        <Container>
          <Row>
            <Col md={9}>
              { phone && this.renderContent() }
            </Col>
            
            <Col md={3}>
              { phone && this.renderSidebar() }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state =>{

  return {
    phone: getPhoneById(state, state.phonePageReducer.ids),
    tabletWidth: state.phones.isMobileWidth,
  }
}

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket,
  heightAuto
}



export  default connect(mapStateToProps, mapDispatchToProps)(Phone)
