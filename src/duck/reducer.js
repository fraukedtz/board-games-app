import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'

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

const toggleExpandPlayerCard = (state, action) => {
  const { payload } = action
  const id = payload

  const { players } = state
  const index = players.findIndex(p => p.id === id)
  const player = players[index]
  const updatedPlayers = [
    ...players.slice(0, index),
    { ...player, isExpanded: !player.isExpanded },
    ...players.slice(index + 1)
  ]

  return {
    ...state,
    players: updatedPlayers
  }
}

const toggleBookmark = (state, action) => {
  const { payload } = action
  const player = payload

  const { gamesNight } = state
  const newbookmarkedPlayers = gamesNight.players.some(p => p.id === player.id)
    ? deletePlayerFromBookmarkedPlayers(player.id, state)
    : addPlayerToBookmarkedPlayers(player, state)

  return {
    ...state,
    gamesNight: {
      ...gamesNight,
      players: newbookmarkedPlayers
    }
  }
}

function deletePlayerFromBookmarkedPlayers(playerId, state) {
  const { gamesNight } = state
  const index = gamesNight.players.findIndex(p => p.id === playerId)
  const newbookmarkedPlayers = [
    ...gamesNight.players.slice(0, index),
    ...gamesNight.players.slice(index + 1)
  ]

  return newbookmarkedPlayers
}

function addPlayerToBookmarkedPlayers(player, state) {
  const { gamesNight } = state
  const newbookmarkedPlayers = gamesNight.players.some(p => p.id === player.id)
    ? [...gamesNight.players]
    : [...gamesNight.players, player]

  return newbookmarkedPlayers
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

const setSearchQuery = (state, action) => {
  const { payload } = action
  const { id, query } = payload

  switch (id) {
    case 'games':
      return {
        ...state,
        searchQueryGames: query
      }
    case 'players':
      return {
        ...state,
        searchQueryPlayers: query
      }
    default:
      return {
        ...state,
        searchQueryGames: '',
        searchQueryPlayers: ''
      }
  }
}

export default createReducer(initialState, {
  toggleExpandGamesCard,
  toggleExpandPlayerCard,
  toggleBookmark,
  toggleBookmarkGame,
  addWinnerToGame,
  setSearchQuery
})
