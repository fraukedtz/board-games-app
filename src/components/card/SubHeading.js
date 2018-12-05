import React, { Component } from 'react'

export default class SubHeading extends Component {
  render() {
    const { text } = this.props
    return <h4>{text}</h4>
  }
}
