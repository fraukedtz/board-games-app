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
  faHeart
} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown, faDice, faChessPawn, faStar, faHeart)

const Nav = styled.nav`
  display: flex;

  a:any-link {
    align-items: center;
    background: #333;
    color: #7f7f7f;
    display: flex;
    font-size: 26px;
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
          <FontAwesomeIcon icon="dice" />
        </NavLink>
        <NavLink activeClassName="active" to="/players/">
          <FontAwesomeIcon icon="chess-pawn" />
        </NavLink>
        <NavLink activeClassName="active" to="/gamesevening/">
          <FontAwesomeIcon icon="star" />
        </NavLink>
      </Nav>
    )
  }
}
