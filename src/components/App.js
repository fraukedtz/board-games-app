import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
// import uid from 'uid'
import styled from 'styled-components'

import Games from './Games'
import Players from './Players'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faDice,
  faChessPawn
} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown, faDice, faChessPawn)

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;

  nav {
    display: flex;
    position: sticky;
    bottom: 0;
  }

  a:any-link {
    align-items: center;
    background: #333;
    color: #7f7f7f;
    display: flex;
    font-size: 30px;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    &:first-child {
      /* border-right: 1px solid white; */
    }

    &.active {
      color: #fefefe;
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" render={() => <Games />} />
          <Route path="/players/" render={() => <Players />} />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              <FontAwesomeIcon icon="dice" />
            </NavLink>
            <NavLink activeClassName="active" to="/players/">
              <FontAwesomeIcon icon="chess-pawn" />
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }
}
