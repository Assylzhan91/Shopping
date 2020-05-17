import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Sidebar from 'components/Sidebar'


const Layout = props => {
  
  return (
    <Container className='mt-4'>
      <Row>
        <Col md={3} className='sidebar'>
          <Sidebar/>
        </Col>
        <Col md={9}>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

export default Layout

