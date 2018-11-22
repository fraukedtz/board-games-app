import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  align-items: center;
  background: #333;
  color: #fefefe;
  display: flex;
  font-family: 'Questrial', sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  justify-content: center;
  width: 100%;
`

export default class Header extends Component {
  render() {
    return <Wrapper>{this.props.text}</Wrapper>
  }
}
