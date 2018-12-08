import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import Card from './Card'
import ToggleIcon from './ToggleIcon'
import Separator from './Separator'
import TagListHeading from './TagListHeading'
import TagList from './TagList'
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
const BookmarkIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  grid-row-start: span 2;
  justify-content: center;

  &.bookmarked {
    color: deeppink;
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
    const {
      id,
      name,
      imgScr,
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
            <Image src={imgScr} alt="" />
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

  renderOwnedGames() {
    return this.props.ownedGames
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleOwnedGame)
  }

  renderSingleLikedGame = game => (
    <li key={game.key} className={game.isOwned ? 'owns' : ''}>
      {game.title}
    </li>
  )

  renderSingleOwnedGame = game => (
    <li key={game.key} className={'owns'}>
      {game.title}
    </li>
  )
}
