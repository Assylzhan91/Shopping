import React from 'react'
import {Container, Row, Col, Table, Image, Button} from 'react-bootstrap'
import {Icon, Intent} from '@blueprintjs/core'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './basket.module.scss'


import {
  getBasketPhonesWithCount,
  getTotalBasketPrice
} from 'selectors/selectors'
import {
  removeItemFromBasket, 
  cleanBasket, 
  basketCheckout
} from "actions"



const Basket = ({
  phones, 
  totalPrice, 
  removeItemFromBasket, 
  cleanBasket, 
  basketCheckout
}) => {
  const isBasketEmpty = phones.length === 0
  const renderContent = ()=>(
    <div>
      { isBasketEmpty && <div>Your shopping cart is empty</div>}
      <Table className='cf'  bordered striped responsive >
        <tbody>
        { phones.map((phone, index)=>{
          return (
            <tr key={index} className='item-checout'>
              <td className='first-column-checkout'>
                <Image src={phone.image} alt={phone.name} thumbnail/>
              </td>
              
              <td>
                <h3 className={styles.text}>
                  {phone.name}
                </h3>
              </td>
              <td>${phone.price}</td>
              <td>{phone.count}</td>
              <td>
                <Icon
                  icon='trash'
                  iconSize={20}
                  intent={Intent.DANGER}
                  tagName='div'
                  className='delete-cart'
                  onClick={()=> removeItemFromBasket(phone.id)}
                />
              </td>
            </tr>
          )
        })}
        </tbody>
      </Table>
      
      {!isBasketEmpty && <Row>
        <div className='total-user-checkout ml-auto'>
          <b>Total: </b>
          ${totalPrice}
        </div>
      </Row>}
    </div>
  )
  
  const renderSidebar = ()=>(
    <div>
        <Link to={'/'} className = 'btn btn-info mb-2'>
          <Icon
            icon='info-sign'
          />
          {'  '}
          <span>Continue shopping</span>
        </Link>
      
      {!isBasketEmpty && <>
        <Button variant='danger' onClick={cleanBasket} className='mb-2'>
          <Icon
            icon='trash'
          />{'  '}
          Clean cart
        </Button>
        <Button variant='success' onClick={()=>basketCheckout(phones)} className='mb-2'>
          <Icon
            icon='envelope'
          />
          {'  '}
          Checkout
        </Button>
      </>}
    </div>
  )
  return (
    <div className='view-container'>
      <Container>
        <Row className='mt-3'>
          <Col md={9}>
            {renderContent()}
          </Col>

          <Col md={3}>
            {renderSidebar()}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = state =>{
 
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
}

const mapDispatchToProps ={
  removeItemFromBasket,
  cleanBasket,
  basketCheckout
}



export default connect(mapStateToProps, mapDispatchToProps)(Basket)
