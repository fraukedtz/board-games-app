import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { configureStore } from 'redux-starter-kit'
import styled from 'styled-components'
import reducer from '../duck/reducer'
import Navigation from './Navigation'
import GamesScreenContainer from './screens/GamesScreenContainer'
import MyGamesNightScreenContainer from './screens/MyGamesNightScreenContainer'
import PlanGamesNightScreenContainer from './screens/PlanGamesNightScreenContainer'
import PlayersScreenContainer from './screens/PlayersScreenContainer'

import {
  saveBookmarkedPlayers,
  saveBookmarkedGames
} from '../services/localStorage'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`

const store = configureStore({ reducer })
store.subscribe(
  () => (
    saveBookmarkedPlayers(store.getState().gamesNight.players),
    saveBookmarkedGames(store.getState().gamesNight.games)
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Wrapper>
            <Route exact path="/" component={GamesScreenContainer} />
            <Route path="/players/" component={PlayersScreenContainer} />
            <Route
              path="/plangamesnight/"
              component={PlanGamesNightScreenContainer}
            />
            <Route
              path="/mygamesnight/"
              component={MyGamesNightScreenContainer}
            />
            <Navigation />
          </Wrapper>
        </Router>
      </Provider>
    )
  }
}
