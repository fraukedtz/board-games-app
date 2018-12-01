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
// const ImageContainer = styled.div`
//   /* grid-row-start: span 2; */
//   height: 25px;
//   width: 25px;
// `

// const Image = styled.img`
//   border-radius: 50%;
//   height: 100%;
//   object-fit: cover;
//   width: 100%;
// `

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
    const { name, imgScr, isBookmarked, onToggleBookmark } = this.props
    return (
      <Wrapper>
        {/* <ImageContainer>
          <Image src={imgScr} alt="" />
        </ImageContainer> */}
        {name}
        <BookmarkIcon
          data-cy="Bookmark"
          onClick={onToggleBookmark}
          className={isBookmarked ? 'bookmarked' : ''}
        >
          <FontAwesomeIcon icon="star" />
        </BookmarkIcon>
      </Wrapper>
    )
  }
}
