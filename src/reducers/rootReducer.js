import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"

import phones from "./phones"
import phonesPageReducer from "./phonesPage"
import phonePageReducer from "./phonePage"
import basketReducer from "./basket"

export default  history => combineReducers({
  phones,
  phonesPageReducer,
  phonePageReducer,
  basketReducer,
  router: connectRouter(history)
})
