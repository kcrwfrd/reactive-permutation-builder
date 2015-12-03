import {combineReducers} from 'redux'
import counter from './counter'
import widget from './widget'

const rootReducer = combineReducers({
  counter,
  widget
})

export default rootReducer
