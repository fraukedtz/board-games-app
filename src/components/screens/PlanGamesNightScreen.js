import React, { Component } from 'react'

import Header from '../Header'
import Container from '../gamesnight/Container'
import SubHeading from '../gamesnight/SubHeading'
import PlayersContainer from '../styledcomponents/PlayersContainer'
import PlayerTag from '../gamesnight/PlayerTag'
import GamesContainer from '../styledcomponents/GamesContainer'
import GameTag from '../gamesnight/GameTag'

export default class PlanGamesNightScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'Plan Games Night'} />
        <Container>
          {this.props.gamesNight.players.length > 0 ? null : (
            <React.Fragment>
              Let's go - start adding players to your games night by bookmarking
              players on the players screen!{' '}
              <span role="img" aria-label="smiling face with sunglasses">
                😎
              </span>
            </React.Fragment>
          )}

          <SubHeading text="Selected Players" />
          {this.props.gamesNight.players.length > 0 ? (
            <React.Fragment>
              <PlayersContainer>{this.renderAllPlayers()}</PlayersContainer>
              <SubHeading text="Games that players like" />
              Choose which games you want to play
              <GamesContainer>{this.renderAllGames()}</GamesContainer>
            </React.Fragment>
          ) : (
            <React.Fragment>
              It's lonely here - no players selected.
            </React.Fragment>
          )}
        </Container>
      </React.Fragment>
    )
  }

  renderAllPlayers() {
    return this.props.gamesNight.players
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderSinglePlayer = player => (
    <PlayerTag
      key={player.id}
      {...player}
      isPlayerBookmarked={this.isPlayerBookmarked(player)}
      onToggleBookmark={() => this.props.onToggleBookmark(player)}
    />
  )

  isPlayerBookmarked(player) {
    const { gamesNight } = this.props
    return gamesNight.players.some(p => p.id === player.id)
  }

  renderAllGames() {
    const { gamesNight } = this.props
    let likedGamesBySelectedPlayers = []

    gamesNight.players.map(player => {
      player.likedGames.forEach(game => {
        likedGamesBySelectedPlayers.push(game)
      })
    })

    return likedGamesBySelectedPlayers
      .reduce((acc, item) => {
        return acc.some(g => g.id === item.id)
          ? acc
          : [...acc, { id: item.id, title: item.title, winnerId: '' }]
      }, [])
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderSingleGame = game => (
    <GameTag
      key={game.id}
      {...game}
      isGameBookmarked={this.isGameBookmarked(game)}
      onToggleBookmarkGame={() => this.props.onToggleBookmarkGame(game)}
    />
  )

  isGameBookmarked(game) {
    const { gamesNight } = this.props
    return gamesNight.games.some(g => g.id === game.id)
  }
}
