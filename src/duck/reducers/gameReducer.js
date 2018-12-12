import { createReducer } from 'redux-starter-kit'
import initialState from '../initialState'

const toggleExpandGamesCard = (state, action) => {
  const { payload } = action
  const id = payload

  const { games } = state
  const index = games.findIndex(g => g.id === id)
  const game = games[index]
  const updatedGames = [
    ...games.slice(0, index),
    { ...game, isExpanded: !game.isExpanded },
    ...games.slice(index + 1)
  ]

  return {
    ...state,
    games: updatedGames
  }
}

const toggleBookmarkGame = (state, action) => {
  const { payload } = action
  const game = payload

  const { gamesNight } = state
  const newbookmarkedGames = gamesNight.games.some(g => g.id === game.id)
    ? deleteGameFromBookmarkedGames(game.id, state)
    : addGameToBookmarkedGames(game, state)

  return {
    ...state,
    gamesNight: {
      ...gamesNight,
      games: newbookmarkedGames
    }
  }
}

function deleteGameFromBookmarkedGames(gameId, state) {
  const { gamesNight } = state
  const index = gamesNight.games.findIndex(g => g.id === gameId)
  const newbookmarkedGames = [
    ...gamesNight.games.slice(0, index),
    ...gamesNight.games.slice(index + 1)
  ]

  return newbookmarkedGames
}

function addGameToBookmarkedGames(game, state) {
  const { gamesNight } = state
  const newbookmarkedGames = gamesNight.games.some(g => g.id === game.id)
    ? [...gamesNight.games]
    : [...gamesNight.games, game]

  return newbookmarkedGames
}

const addWinnerToGame = (state, action) => {
  const { payload } = action
  const { gameId, playerId } = payload

  const { gamesNight } = state

  const index = gamesNight.games.findIndex(game => game.id === gameId)
  const game = gamesNight.games[index]

  const updatedGames = [
    ...gamesNight.games.slice(0, index),
    { ...game, winnerId: playerId },
    ...gamesNight.games.slice(index + 1)
  ]

  return {
    ...state,
    gamesNight: {
      ...gamesNight,
      games: updatedGames
    }
  }
}

export default createReducer(initialState, {
  toggleExpandGamesCard,
  toggleBookmarkGame,
  addWinnerToGame
})
