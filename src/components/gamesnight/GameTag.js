import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GamesNightTag from '../styledcomponents/GamesNightTag'

const BookmarkIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-content: center;

  &.bookmarked {
    color: #fe1251;
  }
`

export default class GameTag extends Component {
  render() {
    const { id, title, isGameBookmarked, onToggleBookmarkGame } = this.props
    return (
      <GamesNightTag>
        {title}
        <BookmarkIcon
          data-cy={'BookmarkGame' + id}
          onClick={onToggleBookmarkGame}
          className={isGameBookmarked ? 'bookmarked' : ''}
        >
          <FontAwesomeIcon icon="heart" />
        </BookmarkIcon>
      </GamesNightTag>
    )
  }
}
