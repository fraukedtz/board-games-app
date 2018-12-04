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
  background: teal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eaeaea;
  border-radius: 5px;
  color: #5f6368;
  padding: 10px;
`

export default class PlayerTag extends Component {
  render() {
    const { name, isPlayerBookmarked, onToggleBookmark } = this.props
    return (
      <Wrapper>
        {name}
        <BookmarkIcon
          data-cy="Bookmark"
          onClick={onToggleBookmark}
          className={isPlayerBookmarked ? 'bookmarked' : ''}
        >
          <FontAwesomeIcon icon="star" />
        </BookmarkIcon>
      </Wrapper>
    )
  }
}
