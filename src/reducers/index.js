import {combineReducers} from 'redux'
import counter from './counter'
import widgets from './widgets'

const rootReducer = combineReducers({
  counter,
  widgets
})

export default rootReducer
