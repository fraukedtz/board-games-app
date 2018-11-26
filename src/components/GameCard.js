import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import Card from './styledcomponents/Card'
import GameDetails from './styledcomponents/GameDetails'
import ToggleIcon from './ui/ToggleIcon'
import Separator from './styledcomponents/Separator'
import TagListHeading from './ui/TagListHeading'
import TagList from './styledcomponents/TagList'
import CardContent from './styledcomponents/CardContent'
import CardTitle from './ui/CardTitle'

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

// const Title = styled.h2`
//   align-items: center;
//   display: flex;
//   font-family: 'Questrial', sans-serif;
//   grid-column-start: span 3;
//   margin: 0;
// `

const AdditionalContent = styled.section`
  display: grid;
  grid-column-start: span 4;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;

  &.expand {
    max-height: 800px;
  }
`

export default class GameCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imgScr: PropTypes.string,
    numPlayers: PropTypes.string.isRequired,
    playingTime: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    imgScr:
      'https://cf.geekdo-images.com/original/img/z3OFp3362X0ZPf5CIc5vfxzwDsg=/0x0/pic981505.jpg'
  }

  render() {
    const {
      title,
      imgScr,
      numPlayers,
      playingTime,
      age,
      isExpanded,
      onClick
    } = this.props

    return (
      <Card>
        <ImageContainer>
          <Image src={imgScr} alt="" />
        </ImageContainer>
        <CardContent>
          <CardTitle text={title} width="3" />
          <ToggleIcon onClick={onClick} className={isExpanded ? 'rotate' : ''}>
            <FontAwesomeIcon icon="angle-down" />
          </ToggleIcon>
          <GameDetails>{numPlayers} Players</GameDetails>
          <GameDetails>{playingTime} Min</GameDetails>
          <GameDetails>Age: {age}</GameDetails>
          <AdditionalContent className={isExpanded ? 'expand' : ''}>
            <Separator />
            <TagListHeading text="Keen players" />
            <TagList>
              {this.countSelectedPlayers('like') >= 1 ? (
                this.renderLikedByPlayers()
              ) : (
                <span>No players selected</span>
              )}
            </TagList>
            <TagListHeading text="Game owners" />
            <TagList>
              {this.countSelectedPlayers('own') >= 1 ? (
                this.renderOwnedByPlayers()
              ) : (
                <span>No players selected</span>
              )}
            </TagList>
          </AdditionalContent>
        </CardContent>
      </Card>
    )
  }

  countSelectedPlayers(criteria) {
    let length

    if (criteria === 'like') {
      length = this.props.players.filter(p => p.likesGame).length
    } else if (criteria === 'own') {
      length = this.props.players.filter(p => p.ownsGame).length
    } else {
      length = 0
    }

    return length
  }

  renderLikedByPlayers() {
    return this.props.players
      .filter(p => p.likesGame)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderOwnedByPlayers() {
    return this.props.players
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
