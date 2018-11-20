import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr auto;
  padding: 10px;

  span {
    align-items: center;
    color: grey;
    display: flex;
    font-size: 14px;
  }
`
const ImageContainer = styled.div`
  grid-row-start: span 2;
  line-height: 0;
  width: 100%;
`

const Image = styled.img`
  height: 80px;
  object-fit: cover;
  /* opacity: 0.7; */
  width: 100%;
`

const Title = styled.h2`
  align-items: center;
  display: flex;
  grid-column-start: span 3;
  margin: 0;
`

const Taglist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    background: #eaeaea;
    border-radius: 5px;
    color: #5c5c5c;
    display: inline-block;
    margin: 5px 10px 5px 0;
    padding: 5px;
  }

  .owns {
    background: #dff6fc;
  }
`
const AdditionalContent = styled.section`
  display: grid;
  grid-column-start: span 4;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
`

const Heading = styled.h4`
  margin: 0;
`

export default class Game extends Component {
  render() {
    const { title, numPlayers, playingTime, age } = this.props.data
    return (
      <Wrapper>
        <ImageContainer>
          <Image src="https://source.unsplash.com/random" alt="" />
        </ImageContainer>
        <Title>{title}</Title>
        <span>{numPlayers} Players</span>
        <span>{playingTime} Min</span>
        <span>Age: {age}</span>
        <AdditionalContent>
          <Heading>Keen players:</Heading>
          <Taglist>{this.renderLikedByPlayers()}</Taglist>
          <Heading>Owners:</Heading>
          <Taglist>{this.renderOwnedByPlayers()}</Taglist>
        </AdditionalContent>
      </Wrapper>
    )
  }

  renderLikedByPlayers() {
    return this.props.data.players
      .filter(p => p.likesGame)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderOwnedByPlayers() {
    return this.props.data.players
      .filter(p => p.ownsGame)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderSinglePlayer = player => (
    <li className={player.ownsGame ? 'owns' : ''}>{player.name}</li>
  )
}
