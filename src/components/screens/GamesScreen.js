import React, { Component } from 'react'

import Header from '../Header'
import CardsContainer from '../card/CardsContainer'
import GameCard from '../card/GameCard'

export default class GamesScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'Games'} />
        <CardsContainer>{this.renderAllGames()}</CardsContainer>
      </React.Fragment>
    )
  }

  renderAllGames() {
    return this.props.games
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderSingleGame = game => (
    <GameCard
      key={game.id}
      {...game}
      onClick={() => this.props.onToggleExpand(game.id)}
    />
  )
}
