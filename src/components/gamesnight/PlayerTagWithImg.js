import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  background: #eaeaea;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 2fr;
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
    const { name, imgSrc } = this.props
    return (
      <Wrapper data-cy="PlayerTag">
        <ImageContainer>
          <Image src={imgSrc} alt="" />
        </ImageContainer>
        {name}
      </Wrapper>
    )
  }
}
