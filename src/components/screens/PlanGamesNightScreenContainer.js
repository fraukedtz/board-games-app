import PlanGamesNightScreen from './PlanGamesNightScreen'
import { connect } from 'react-redux'
import { toggleBookmark, toggleBookmarkGame } from '../../duck/actions'

const mapStateToProps = state => ({
  gamesNight: state.gamesNight
})

const mapDispatchToProps = {
  onToggleBookmark: toggleBookmark,
  onToggleBookmarkGame: toggleBookmarkGame
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanGamesNightScreen)
