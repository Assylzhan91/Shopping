import React from 'react'
import {render} from 'react-dom'
import {createBrowserHistory} from 'history'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {routerMiddleware, ConnectedRouter} from "connected-react-router"
import thunk from 'redux-thunk'
import createRootReducer from 'reducers/rootReducer'

import routes from 'routes'
import {composeWithDevTools} from "redux-devtools-extension"
import 'index.css'



const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
