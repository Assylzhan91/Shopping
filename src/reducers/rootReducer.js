import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"

import phones from "./phones"
import phonesPageReducer from "./phonesPage"
import phonePageReducer from "./phonePage"
import basketReducer from "./basket"
import categoriesReducer from "./categories"

export default  history => combineReducers({
  phones,
  phonesPageReducer,
  phonePageReducer,
  basketReducer,
  categoriesReducer,
  router: connectRouter(history)
})
