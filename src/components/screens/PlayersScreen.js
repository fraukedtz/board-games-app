import React, { Component } from 'react'

import Input from '../Input'
import CardsContainer from '../card/CardsContainer'
import PlayerCard from '../card/PlayerCard'

export default class PlayersScreen extends Component {
  render() {
    const { setSearchQuery, searchQuery } = this.props
    return (
      <React.Fragment>
        <Input
          id="players"
          text="Search player name..."
          setSearchQuery={setSearchQuery}
        />
        <CardsContainer>{this.renderPlayers(searchQuery)}</CardsContainer>
      </React.Fragment>
    )
  }

  renderPlayers(query) {
    return query === ''
      ? this.renderAllPlayers()
      : this.renderSearchPlayers(query)
  }

  renderAllPlayers() {
    return this.props.players
      .slice()
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderSearchPlayers = query => {
    const filteredPlayers = this.props.players.filter(player => {
      return player.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    })

    return filteredPlayers.length >= 1
      ? filteredPlayers.map(this.renderSinglePlayer)
      : `No results found for "${query}"`
  }

  renderSinglePlayer = player => (
    <PlayerCard
      key={player.id}
      {...player}
      onClick={() => this.props.onToggleExpand(player.id)}
      isPlayerBookmarked={this.isPlayerBookmarked(player)}
      onToggleBookmark={() => this.props.onToggleBookmark(player)}
    />
  )

  isPlayerBookmarked(player) {
    const { gamesNight } = this.props
    return gamesNight.players.some(p => p.id === player.id)
  }
}
