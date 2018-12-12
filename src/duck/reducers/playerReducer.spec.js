import reducer from './playerReducer'
import * as Actions from '../actions'

describe('reducer', () => {
  let state

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
})
