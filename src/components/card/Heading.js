import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.h2`
  margin-top: 0;
`

export default class Heading extends Component {
  render() {
    const { text } = this.props
    return <Wrapper>{text}</Wrapper>
  }
}
