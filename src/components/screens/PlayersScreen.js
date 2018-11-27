import React, { Component } from 'react'

import Header from '../Header'
import CardsContainer from '../card/CardsContainer'
import PlayerCard from '../card/PlayerCard'

export default class PlayersScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'Players'} />
        <CardsContainer>{this.renderAllPlayers()}</CardsContainer>
      </React.Fragment>
    )
  }

  renderAllPlayers() {
    return this.props.players
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderSinglePlayer = player => (
    <PlayerCard
      key={player.id}
      {...player}
      onClick={() => this.props.onToggleExpand(player.id)}
      onClickBookmark={() => this.props.onToggleBookmark(player.id)}
    />
  )
}
