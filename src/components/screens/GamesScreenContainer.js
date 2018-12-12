import GamesScreen from './GamesScreen'
import { connect } from 'react-redux'
import { toggleExpandGamesCard, setSearchQuery } from '../../duck/actions'

const mapStateToProps = state => ({
  games: state.games,
  searchQuery: state.searchQueryGames
})

const mapDispatchToProps = {
  onToggleExpand: toggleExpandGamesCard,
  setSearchQuery: (id, query) => setSearchQuery({ id, query })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesScreen)
