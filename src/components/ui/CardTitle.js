import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
  align-items: center;
  display: flex;
  font-family: 'Questrial', sans-serif;
  grid-column-start: span ${props => props.width || '3'};
  margin: 0;
`

export default class CardTitle extends Component {
  render() {
    return <Heading>{this.props.text}</Heading>
  }
}
