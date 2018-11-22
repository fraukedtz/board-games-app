import React, { Component } from 'react'
import styled from 'styled-components'

import DefaultText from './DefaultText'

export const Wrapper = styled.section`
  align-self: start;
  background-color: #fefefe;
  border-radius: 5px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`
const ImageContainer = styled.div`
  line-height: 0;
  width: 100%;
`

const Image = styled.img`
  border-radius: 5px 5px 0 0;
  height: 120px;
  object-fit: cover;
  width: 100%;
`

const Content = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: auto;
  padding: 20px;

  span {
    align-items: center;
    color: #5f6368;
    display: flex;
    font-size: 14px;
  }
`

const Title = styled.h2`
  align-items: center;
  display: flex;
  font-family: 'Questrial', sans-serif;
  grid-column-start: span 3;
  margin: 0;
`
const ToggleIcon = styled.div`
  align-items: center;
  display: flex;
  grid-row-start: span 2;
  justify-content: center;
  transition: transform 1s ease-in-out;

  i {
    font-size: 20px;
  }

  &.rotate {
    transform: rotate(180deg);
  }
`

const AdditionalContent = styled.section`
  display: grid;
  grid-column-start: span 4;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s;

  &.expand {
    max-height: 800px;
  }
`
const Separator = styled.div`
  border-top: 1px solid #dadce0;
`

const Heading = styled.h4`
  margin: 0;
`
const Taglist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    background: #eaeaea;
    border-radius: 5px;
    color: #5f6368;
    display: inline-block;
    margin: 5px 10px 5px 0;
    padding: 5px;
  }

  .owns {
    background: #dff6fc;
  }
`

export default class Game extends Component {
  render() {
    const {
      title,
      imgScr,
      numPlayers,
      playingTime,
      age,
      isExpanded
    } = this.props.data
    const { onClick } = this.props
    return (
      <Wrapper>
        <ImageContainer>
          <Image src={imgScr} alt="" />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <ToggleIcon onClick={onClick} className={isExpanded ? 'rotate' : ''}>
            <i className="fas fa-angle-down" />
          </ToggleIcon>
          <span>{numPlayers} Players</span>
          <span>{playingTime} Min</span>
          <span>Age: {age}</span>
          <AdditionalContent className={isExpanded ? 'expand' : ''}>
            <Separator />
            <Heading>Keen players</Heading>
            <Taglist>
              {this.countSelectedPlayers('like') >= 1 ? (
                this.renderLikedByPlayers()
              ) : (
                <DefaultText text={'No players selected'} />
              )}
            </Taglist>
            <Heading>Game owners</Heading>
            <Taglist>
              {this.countSelectedPlayers('own') >= 1 ? (
                this.renderOwnedByPlayers()
              ) : (
                <DefaultText text={'No players selected'} />
              )}
            </Taglist>
          </AdditionalContent>
        </Content>
      </Wrapper>
    )
  }

  countSelectedPlayers(criteria) {
    let length

    if (criteria === 'like') {
      length = this.props.data.players.filter(p => p.likesGame).length
    } else if (criteria === 'own') {
      length = this.props.data.players.filter(p => p.ownsGame).length
    } else {
      length = 0
    }

    return length
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
    <li key={player.key} className={player.ownsGame ? 'owns' : ''}>
      {player.name}
    </li>
  )
}
