import { createReducer } from 'redux-starter-kit'
import initialState from '../initialState'

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
  setSearchQuery
})
