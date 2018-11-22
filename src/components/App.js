import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
// import uid from 'uid'
import styled from 'styled-components'

import Games from './Games'
import Players from './Players'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown)

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;

  nav {
    display: flex;
  }

  a:any-link {
    align-items: center;
    background: #fefefe;
    color: #333;
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    &:first-child {
      border-right: 1px solid white;
    }

    &.active {
      background: #333;
      color: #fefefe;
    }
  }
`
const Header = styled.section`
  align-items: center;
  background: #333;
  color: #fefefe;
  display: flex;
  font-family: 'Questrial', sans-serif;
  font-size: 1.5em;
  justify-content: center;
  width: 100%;
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header>HEADING</Header>
          <Route exact path="/" render={() => <Games />} />
          <Route path="/players/" render={() => <Players />} />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              Games
            </NavLink>
            <NavLink activeClassName="active" to="/players/">
              Players
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }
}
