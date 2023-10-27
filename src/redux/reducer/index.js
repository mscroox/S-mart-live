/** @format */

import { combineReducers } from "redux"
import handleCart from "./handleCart"
import userState from "./userState"

const rootReducers = combineReducers({
  handleCart,
  userState,
})

export default rootReducers
