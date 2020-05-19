import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Phones from 'containers/Phones'
import Phone from 'containers/Phone'
import Basket from 'containers/Basket'


export default (
  <Switch>
    <Route path='/' component={Phones} exact/>
    <Route path='/categories/:id' component={Phones}/>
    <Route path='/phones/:id' component={Phone}/>
    <Route path='/basket' component={Basket}/>
  </Switch>
)
