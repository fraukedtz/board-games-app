import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducer'
import * as Actions from '../duck/actions'

import styled from 'styled-components'

import GamesScreen from './screens/GamesScreen'
import PlayersScreen from './screens/PlayersScreen'
import PlanGamesNightScreen from './screens/PlanGamesNightScreen'
import MyGamesNightScreen from './screens/MyGamesNightScreen'
import Navigation from './Navigation'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`

const store = configureStore({ reducer })

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => (
              <GamesScreen
                games={state.games}
                onToggleExpand={this.toggleExpandGamesCard}
                searchQuery={state.searchQueryGames}
                setSearchQuery={this.setSearchQuery}
              />
            )}
          />
          <Route
            path="/players/"
            render={() => (
              <PlayersScreen
                players={state.players}
                onToggleExpand={this.toggleExpandPlayerCard}
                searchQuery={state.searchQueryPlayers}
                setSearchQuery={this.setSearchQuery}
                onToggleBookmark={this.toggleBookmark}
                gamesNight={state.gamesNight}
              />
            )}
          />
          <Route
            path="/plangamesnight/"
            render={() => (
              <PlanGamesNightScreen
                gamesNight={state.gamesNight}
                onToggleBookmark={this.toggleBookmark}
                onToggleBookmarkGame={this.toggleBookmarkGame}
              />
            )}
          />
          <Route
            path="/mygamesnight/"
            render={() => (
              <MyGamesNightScreen
                gamesNight={state.gamesNight}
                games={state.games}
                addWinnerToGame={this.addWinnerToGame}
              />
            )}
          />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }

  toggleExpandGamesCard = id => {
    store.dispatch(Actions.toggleExpandGamesCard(id))
  }

  toggleExpandPlayerCard = id => {
    store.dispatch(Actions.toggleExpandPlayerCard(id))
  }

  setSearchQuery = (id, query) => {
    store.dispatch(Actions.setSearchQuery({ id, query }))
  }

  toggleBookmark = player => {
    store.dispatch(Actions.toggleBookmark(player))
  }

  toggleBookmarkGame = game => {
    store.dispatch(Actions.toggleBookmarkGame(game))
  }

  addWinnerToGame = (gameId, playerId) => {
    store.dispatch(Actions.addWinnerToGame({ gameId, playerId }))
  }
}
