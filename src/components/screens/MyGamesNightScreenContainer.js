import MyGamesNightScreen from './MyGamesNightScreen'
import { connect } from 'react-redux'
import { addWinnerToGame } from '../../duck/actions'

const mapStateToProps = state => ({
  gamesNight: state.gamesNight,
  games: state.games
})

const mapDispatchToProps = {
  addWinnerToGame: (gameId, playerId) => addWinnerToGame({ gameId, playerId })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGamesNightScreen)
