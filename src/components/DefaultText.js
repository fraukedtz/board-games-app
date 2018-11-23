import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DefaultText extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return <span>{this.props.text}</span>
  }
}
