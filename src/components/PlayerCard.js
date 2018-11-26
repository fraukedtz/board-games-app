import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import Card from './styledcomponents/Card'
import ToggleIcon from './ui/ToggleIcon'
import Separator from './styledcomponents/Separator'
import TagListHeading from './ui/TagListHeading'
import TagList from './styledcomponents/TagList'
import CardContent from './styledcomponents/CardContent'

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

const Username = styled.span`
  color: #5f6368;
  display: flex;
  font-size: 14px;
`

const Title = styled.h2`
  align-self: flex-end;
  display: flex;
  font-family: 'Questrial', sans-serif;
  grid-column-start: span 2;
  margin: 0;
`

const AdditionalContent = styled.section`
  display: grid;
  grid-column-start: span 4;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  /* margin-bottom: 20px; */
  max-height: 0;
  overflow: hidden;
  /* padding: 0 20px; */
  transition: max-height 0.3s;

  &.expand {
    max-height: 800px;
  }
`

export default class PlayerCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    imgScr: PropTypes.string,
    userName: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    imgScr:
      'https://cf.geekdo-images.com/original/img/z3OFp3362X0ZPf5CIc5vfxzwDsg=/0x0/pic981505.jpg'
  }

  render() {
    const { name, imgScr, userName, isExpanded, onClick } = this.props
    return (
      <Card>
        <CardContent>
          <ImageContainer>
            <Image src={imgScr} alt="" />
          </ImageContainer>
          <Title>{name}</Title>
          <ToggleIcon onClick={onClick} className={isExpanded ? 'rotate' : ''}>
            <FontAwesomeIcon icon="angle-down" />
          </ToggleIcon>
          <Username>{userName}</Username>
          {/* </CardContent> */}
          <AdditionalContent className={isExpanded ? 'expand' : ''}>
            <Separator />
            <TagListHeading text="I like to play" />
            <TagList>
              {this.countSelectedGames('like') >= 1 ? (
                this.renderLikedGames()
              ) : (
                <span>No games selected</span>
              )}
            </TagList>
            <TagListHeading text="I own" />
            <TagList>
              {this.countSelectedGames('own') >= 1 ? (
                this.renderOwnedGames()
              ) : (
                <span>No games selected</span>
              )}
            </TagList>
          </AdditionalContent>
        </CardContent>
      </Card>
    )
  }

  countSelectedGames(criteria) {
    let length

    if (criteria === 'like') {
      length = this.props.games.filter(g => g.likedByPlayer).length
    } else if (criteria === 'own') {
      length = this.props.games.filter(g => g.ownedByPlayer).length
    } else {
      length = 0
    }

    return length
  }

  renderLikedGames() {
    return this.props.games
      .filter(g => g.likedByPlayer)
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderOwnedGames() {
    return this.props.games
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
