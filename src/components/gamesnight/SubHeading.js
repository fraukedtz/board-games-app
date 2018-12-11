import React, { Component } from 'react'

export default class SubHeading extends Component {
  render() {
    const { text } = this.props
    return <h3>{text}</h3>
  }
}
