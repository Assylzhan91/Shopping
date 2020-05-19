import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Sidebar from 'components/Sidebar'
import {connect} from "react-redux";


const Layout = props => {
  
  return (
    <Container className='mt-4'>
      <Row>
        <Col md={props.colMd3} className='sidebar'>
          <Sidebar/>
        </Col>
        <Col md={props.colMd9}>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state)=>{

  return {
    colMd9: state.phones.colMd9,
    colMd3: state.phones.colMd3,
  }
}
export default connect(mapStateToProps)(Layout) 

