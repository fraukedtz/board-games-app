import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GamesNightTag from '../styledcomponents/GamesNightTag'
import BookmarkIcon from '../styledcomponents/BookmarkIcon'

export default class PlayerTag extends Component {
  render() {
    const { id, name, isPlayerBookmarked, onToggleBookmark } = this.props
    return (
      <GamesNightTag>
        {name}
        <BookmarkIcon
          data-cy={'Bookmark' + id}
          onClick={onToggleBookmark}
          className={isPlayerBookmarked ? 'bookmarked' : ''}
        >
          <FontAwesomeIcon icon="star" />
        </BookmarkIcon>
      </GamesNightTag>
    )
  }
}
