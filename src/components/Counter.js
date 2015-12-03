import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const {increment, decrement, counter} = this.props

    return (
      <div>
        <p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </p>

        <p>Clicked: {counter} times</p>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired
}

export default Counter
