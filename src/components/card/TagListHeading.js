import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h4`
  margin: 0;
  padding: ${props => props.padding || 0}px;
`

export default class TagListHeading extends Component {
  render() {
    const { text } = this.props
    return <Heading>{text}</Heading>
  }
}
