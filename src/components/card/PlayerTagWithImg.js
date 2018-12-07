import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: teal;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  background: #eaeaea;
  border-radius: 5px;
  padding: 10px;
`

const ImageContainer = styled.div`
  height: 30px;
  width: 30px;
`
const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export default class PlayerTagWithImg extends Component {
  render() {
    const { name, imgScr } = this.props
    return (
      <Wrapper>
        <ImageContainer>
          <Image src={imgScr} alt="" />
        </ImageContainer>
        {name}
      </Wrapper>
    )
  }
}