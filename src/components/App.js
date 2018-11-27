import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import uid from 'uid'
import styled from 'styled-components'

import GamesScreen from './screens/GamesScreen'
import PlayersScreen from './screens/PlayersScreen'
import PlayGroupScreen from './screens/PlayGroupScreen'
import Navigation from './Navigation'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" render={() => <GamesScreen />} />
          <Route path="/players/" render={() => <PlayersScreen />} />
          <Route path="/playgroup/" render={() => <PlayGroupScreen />} />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }
}
