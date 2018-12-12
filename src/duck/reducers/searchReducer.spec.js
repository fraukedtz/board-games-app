import reducer from './searchReducer'
import * as Actions from '../actions'

describe('reducer', () => {
  let state

  it('set search query', () => {
    state = {
      searchQueryGames: '',
      searchQueryPlayers: ''
    }

    let id = 'games'
    let query = 'settlers'
    expect(state.searchQueryGames).toBe('')
    state = reducer(state, Actions.setSearchQuery({ id, query }))
    expect(state.searchQueryGames).toBe('settlers')

    id = 'players'
    query = 'frauke'
    expect(state.searchQueryPlayers).toBe('')
    state = reducer(state, Actions.setSearchQuery({ id, query }))
    expect(state.searchQueryPlayers).toBe('frauke')
  })
})
