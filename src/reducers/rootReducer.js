import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"

import phones from "./phones"
import phonePageReducer from "./phonesPage"

export default  history => combineReducers({
  phones,
  phonePageReducer,
  router: connectRouter(history)
})
