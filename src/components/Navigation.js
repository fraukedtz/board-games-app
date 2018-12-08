import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faDice,
  faChessPawn,
  faStar,
  faHeart,
  faTrophy
} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown, faDice, faChessPawn, faStar, faHeart, faTrophy)

const Box = styled.div`
  display: flex;
  font-size: ${props => props.size || 12}px;
  justify-content: center;
`

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  text-align: center;
`

const Nav = styled.nav`
  display: flex;

  a:any-link {
    align-items: center;
    background: #333;
    color: #7f7f7f;
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    &.active {
      color: #fefefe;
    }
  }
`

export default class Navigation extends Component {
  render() {
    return (
      <Nav>
        <NavLink exact activeClassName="active" to="/">
          <Container>
            <Box size={22}>
              <FontAwesomeIcon icon="dice" />
            </Box>
            <Box>Games</Box>
          </Container>
        </NavLink>
        <NavLink activeClassName="active" to="/players/">
          <Container>
            <Box size={22}>
              <FontAwesomeIcon icon="chess-pawn" />
            </Box>
            <Box>Players</Box>
          </Container>
        </NavLink>
        <NavLink activeClassName="active" to="/gamesnight/">
          <Container>
            <Box size={22}>
              <FontAwesomeIcon icon="star" />
            </Box>
            <Box>Plan</Box>
          </Container>
        </NavLink>
        <NavLink activeClassName="active" to="/mygamesnight/">
          <Container>
            <Box size={22}>
              <FontAwesomeIcon icon="heart" />
            </Box>
            <Box>Night</Box>
          </Container>
        </NavLink>
      </Nav>
    )
  }
}
