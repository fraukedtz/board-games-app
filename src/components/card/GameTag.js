import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookmarkIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-content: center;

  &.bookmarked {
    color: deeppink;
  }
`

const Wrapper = styled.div`
  align-items: center;
  background: #eaeaea;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

export default class GameTag extends Component {
  render() {
    const { title, isGameBookmarked, onToggleBookmarkGame } = this.props
    return (
      <Wrapper>
        {title}
        <BookmarkIcon
          data-cy="Bookmark"
          onClick={onToggleBookmarkGame}
          className={isGameBookmarked ? 'bookmarked' : ''}
        >
          <FontAwesomeIcon icon="heart" />
        </BookmarkIcon>
      </Wrapper>
    )
  }
}
