import React, { Component } from 'react'
import styled from 'styled-components'

export default class SubHeading extends Component {
  render() {
    const { text } = this.props
    return <h4>{text}</h4>
  }
}
