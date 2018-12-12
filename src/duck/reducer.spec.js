import reducer from './reducer'
import * as Actions from './actions'

describe('reducer', () => {
  let state

  it('toggles expand GameCard', () => {
    state = {
      games: [
        {
          id: '1',
          isExpanded: false
        }
      ]
    }
    const id = state.games[0].id
    expect(state.games[0].isExpanded).toBe(false)
    state = reducer(state, Actions.toggleExpandGamesCard(id))
    expect(state.games[0].isExpanded).toBe(true)
  })

  it('toggles expand PlayerCard', () => {
    state = {
      players: [
        {
          id: '1',
          isExpanded: false
        }
      ]
    }
    const id = state.players[0].id
    expect(state.players[0].isExpanded).toBe(false)
    state = reducer(state, Actions.toggleExpandPlayerCard(id))
    expect(state.players[0].isExpanded).toBe(true)
  })

  it('toggle bookmark player', () => {
    state = {
      gamesNight: {
        players: []
      }
    }
    const player = { id: '1', name: 'Frauke' }
    expect(state.gamesNight.players).toHaveLength(0)
    state = reducer(state, Actions.toggleBookmark(player))
    expect(state.gamesNight.players).toHaveLength(1)
    state = reducer(state, Actions.toggleBookmark(player))
    expect(state.gamesNight.players).toHaveLength(0)
  })

  it('toggle bookmark game', () => {
    state = {
      gamesNight: {
        games: []
      }
    }
    const game = { id: '1', title: 'The Settlers of Catan' }
    expect(state.gamesNight.games).toHaveLength(0)
    state = reducer(state, Actions.toggleBookmarkGame(game))
    expect(state.gamesNight.games).toHaveLength(1)
    state = reducer(state, Actions.toggleBookmarkGame(game))
    expect(state.gamesNight.games).toHaveLength(0)
  })

  it('add winner to game', () => {
    state = {
      gamesNight: {
        games: [{ id: '3', title: 'Monopoly', winnerId: '' }]
      }
    }

    const gameId = state.gamesNight.games[0].id
    const playerId = '1'

    expect(state.gamesNight.games[0].winnerId).toBe('')
    state = reducer(state, Actions.addWinnerToGame({ gameId, playerId }))
    expect(state.gamesNight.games[0].winnerId).toBe('1')
  })

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
