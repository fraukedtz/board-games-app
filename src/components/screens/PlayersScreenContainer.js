import PlayersScreen from './PlayersScreen'
import { connect } from 'react-redux'
import {
  toggleExpandPlayerCard,
  toggleBookmark,
  setSearchQuery
} from '../../duck/actions'

const mapStateToProps = state => ({
  players: state.players,
  searchQuery: state.searchQueryPlayers,
  gamesNight: state.gamesNight
})

const mapDispatchToProps = {
  onToggleExpand: toggleExpandPlayerCard,
  onToggleBookmark: toggleBookmark,
  setSearchQuery: (id, query) => setSearchQuery({ id, query })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersScreen)
