import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Phones from 'containers/Phones'
import {Container, Row, Col} from 'react-bootstrap'

const routes = (
  <Switch>
    <Route path='/' component={Phones} exact/>
  </Switch>
)

const Layout = props => {
  
  return (
    <Container className='mt-4'>
      <Row>
        <Col md={3}>
          Sidebar
        </Col>
        <Col md={9}>
          {routes}
        </Col>
      </Row>
    </Container>
  )
}

export default Layout

