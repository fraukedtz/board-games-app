import React, { Component } from 'react'
import CardsContainer from '../card/CardsContainer'
import GameCard from '../card/GameCard'
import Input from '../Input'

export default class GamesScreen extends Component {
  render() {
    const { setSearchQuery, searchQuery } = this.props
    return (
      <React.Fragment>
        <Input
          id="games"
          text="Search game title..."
          setSearchQuery={setSearchQuery}
        />
        <CardsContainer>{this.renderGames(searchQuery)}</CardsContainer>
      </React.Fragment>
    )
  }

  renderGames(query) {
    return query === '' ? this.renderAllGames() : this.renderSearchGames(query)
  }

  renderAllGames() {
    return this.props.games
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderSearchGames = query => {
    const filteredGames = this.props.games.filter(game => {
      return game.title.toLowerCase().indexOf(query.toLowerCase()) > -1
    })

    return filteredGames.length >= 1
      ? filteredGames.map(this.renderSingleGame)
      : `No results found for "${query}"`
  }

  renderSingleGame = game => (
    <GameCard
      key={game.id}
      {...game}
      onClick={() => this.props.onToggleExpand(game.id)}
    />
  )
}
