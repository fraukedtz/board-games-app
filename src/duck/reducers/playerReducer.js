import { createReducer } from 'redux-starter-kit'
import initialState from '../initialState'

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

export default createReducer(initialState, {
  toggleExpandPlayerCard,
  toggleBookmark
})
