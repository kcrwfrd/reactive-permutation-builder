import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class WidgetList extends Component {
  render() {
    let {widgets} = this.props

    return (
      <ul>
        {widgets.map((widget, i) =>
          <li key={i}>{widget.name}</li>
        )}
      </ul>
    )
  }
}

WidgetList.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect((state) => ({
  widgets: state.widgets
}))(WidgetList)
