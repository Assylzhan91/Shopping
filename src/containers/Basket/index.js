import React from 'react'
import {Container, Row, Col, Table, Image} from 'react-bootstrap'
import {Icon, Intent} from '@blueprintjs/core'
import {connect} from 'react-redux'
import styles from './basket.module.scss'


import {
  getBasketPhonesWithCount,
  getTotalBasketPrice
} from 'selectors/selectors'
import {removeItemFromBasket} from "actions"



const Basket = ({phones, totalPrice, removeItemFromBasket}) => {
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
    <div>Sidebar</div>
  )
  return (
    <div className='view-container'>
      <Container>
        <Row>
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
  removeItemFromBasket
}



export default connect(mapStateToProps, mapDispatchToProps)(Basket)
