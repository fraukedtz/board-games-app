import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import ImgDefault from '../../images/players/default.png'
import Card from './Card'
import BookmarkIcon from '../styledcomponents/BookmarkIcon'
import ToggleIcon from '../styledcomponents/ToggleIcon'
import Separator from '../styledcomponents/Separator'
import TagListHeading from './TagListHeading'
import TagList from '../styledcomponents/TagList'
import CardContent from './CardContent'
import ExpandCardContent from './ExpandCardContent'

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
  grid-column-start: span 1;
  margin: 0;
`

export default class PlayerCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    userName: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    imgSrc: ImgDefault
  }

  render() {
    const {
      id,
      name,
      imgSrc,
      userName,
      isExpanded,
      onClick,
      isPlayerBookmarked,
      onToggleBookmark
    } = this.props
    return (
      <Card data-cy="PlayerCard">
        <CardContent>
          <ImageContainer>
            <Image src={imgSrc} alt="" />
          </ImageContainer>
          <Title>{name}</Title>
          <BookmarkIcon
            data-cy={'Bookmark' + id}
            onClick={onToggleBookmark}
            className={isPlayerBookmarked ? 'bookmarked' : null}
          >
            <FontAwesomeIcon icon="star" />
          </BookmarkIcon>
          <ToggleIcon
            data-cy={'Toggle' + id}
            onClick={onClick}
            className={isExpanded ? 'rotate' : ''}
          >
            <FontAwesomeIcon icon="angle-down" />
          </ToggleIcon>
          <Username>{userName}</Username>
          <ExpandCardContent
            data-cy={'ExpandContent' + id}
            className={isExpanded ? 'expand' : ''}
          >
            <Separator />
            <TagListHeading text="I like to play" />
            <TagList>
              {this.props.likedGames.length >= 1 ? (
                this.renderLikedGames()
              ) : (
                <span>No games selected</span>
              )}
            </TagList>
            <TagListHeading text="I own" />
            <TagList>
              {this.props.ownedGames.length >= 1 ? (
                this.renderOwnedGames()
              ) : (
                <span>No games selected</span>
              )}
            </TagList>
          </ExpandCardContent>
        </CardContent>
      </Card>
    )
  }

  renderLikedGames() {
    return this.props.likedGames
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleLikedGame)
  }

  renderSingleLikedGame = game => (
    <li key={game.key} className={game.isOwned ? 'owns' : ''}>
      {game.title}
    </li>
  )

  renderOwnedGames() {
    return this.props.ownedGames
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleOwnedGame)
  }

  renderSingleOwnedGame = game => (
    <li key={game.key} className={'owns'}>
      {game.title}
    </li>
  )
}
