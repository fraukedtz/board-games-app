import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import Card from './Card'
import GameDetails from '../styledcomponents/GameDetails'
import ToggleIcon from './ToggleIcon'
import Separator from './Separator'
import TagListHeading from './TagListHeading'
import TagList from './TagList'
import CardContent from './CardContent'
import ExpandCardContent from './ExpandCardContent'

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

const Title = styled.h2`
  align-items: center;
  display: flex;
  grid-column-start: span 3;
  margin: 0;
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
      id,
      title,
      imgScr,
      numPlayers,
      playingTime,
      age,
      isExpanded,
      onClick
    } = this.props

    return (
      <Card data-cy="GameCard">
        <ImageContainer>
          <Image src={imgScr} alt="" />
        </ImageContainer>
        <CardContent>
          <Title>{title}</Title>
          <ToggleIcon
            data-cy={'Toggle' + id}
            onClick={onClick}
            className={isExpanded ? 'rotate' : ''}
          >
            <FontAwesomeIcon icon="angle-down" />
          </ToggleIcon>
          <GameDetails>{numPlayers} Players</GameDetails>
          <GameDetails>{playingTime} Min</GameDetails>
          <GameDetails>Age: {age}</GameDetails>
          <ExpandCardContent
            data-cy={'ExpandContent' + id}
            className={isExpanded ? 'expand' : ''}
          >
            <Separator />
            <TagListHeading text="Keen players" />
            <TagList>
              {this.props.keenPlayers.length >= 1 ? (
                this.renderkeenPlayers()
              ) : (
                <span>No players selected</span>
              )}
            </TagList>
            <TagListHeading text="Game owners" />
            <TagList>
              {this.props.owners.length >= 1 ? (
                this.renderOwnedByPlayers()
              ) : (
                <span>No players selected</span>
              )}
            </TagList>
          </ExpandCardContent>
        </CardContent>
      </Card>
    )
  }

  renderkeenPlayers() {
    return this.props.keenPlayers
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleKeenPlayer)
  }

  renderOwnedByPlayers() {
    return this.props.owners
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleOwnerPlayer)
  }

  renderSingleKeenPlayer = player => (
    <li key={player.key} className={player.ownsGame ? 'owns' : ''}>
      {player.name}
    </li>
  )

  renderSingleOwnerPlayer = player => (
    <li key={player.key} className={'owns'}>
      {player.name}
    </li>
  )
}
