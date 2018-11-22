import React, { Component } from 'react'
import styled from 'styled-components'

import DefaultText from './DefaultText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.section`
  align-self: start;
  background-color: #fefefe;
  border-radius: 5px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`

const Content = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: auto;
  padding: 20px;

  span {
    color: #5f6368;
    display: flex;
    font-size: 14px;
  }
`

const ImageContainer = styled.div`
  grid-row-start: span 2;
  height: 80px;
  width: 80px;
`

const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

const Title = styled.h2`
  align-self: flex-end;
  display: flex;
  font-family: 'Questrial', sans-serif;
  grid-column-start: span 2;
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
  margin-bottom: 20px;
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;
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

export default class Player extends Component {
  render() {
    const { name, imgScr, userName, isExpanded } = this.props.data
    const { onClick } = this.props
    return (
      <Wrapper>
        <Content>
          <ImageContainer>
            <Image src={imgScr} alt="" />
          </ImageContainer>
          <Title>{name}</Title>
          <ToggleIcon onClick={onClick} className={isExpanded ? 'rotate' : ''}>
            <FontAwesomeIcon icon="angle-down" />
          </ToggleIcon>
          <span>{userName}</span>
        </Content>
        <AdditionalContent className={isExpanded ? 'expand' : ''}>
          <Separator />
          <Heading>I like to play</Heading>
          <Taglist>
            {this.countSelectedGames('like') >= 1 ? (
              this.renderLikedGames()
            ) : (
              <DefaultText text={'No games selected'} />
            )}
          </Taglist>
          <Heading>I own</Heading>
          <Taglist>
            {this.countSelectedGames('own') >= 1 ? (
              this.renderOwnedGames()
            ) : (
              <DefaultText text={'No games selected'} />
            )}
          </Taglist>
        </AdditionalContent>
      </Wrapper>
    )
  }

  countSelectedGames(criteria) {
    let length

    if (criteria === 'like') {
      length = this.props.data.games.filter(g => g.likedByPlayer).length
    } else if (criteria === 'own') {
      length = this.props.data.games.filter(g => g.ownedByPlayer).length
    } else {
      length = 0
    }

    return length
  }

  renderLikedGames() {
    return this.props.data.games
      .filter(g => g.likedByPlayer)
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderOwnedGames() {
    return this.props.data.games
      .filter(g => g.ownedByPlayer)
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderSingleGame = game => (
    <li key={game.key} className={game.ownedByPlayer ? 'owns' : ''}>
      {game.title}
    </li>
  )
}
