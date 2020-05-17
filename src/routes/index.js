import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Phones from 'containers/Phones'
import Phone from 'containers/Phone'

export default (
  <Switch>
    <Route path='/' component={Phones} exact/>
    <Route path='/phones/:id' component={Phone}/>
  </Switch>
)
