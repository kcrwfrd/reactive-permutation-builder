import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'
import WidgetList from './WidgetList'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <WidgetList />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
