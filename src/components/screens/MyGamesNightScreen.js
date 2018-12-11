import React, { Component } from 'react'

import Header from '../Header'
import Container from '../gamesnight/Container'
import PlayersContainer from '../styledcomponents/PlayersContainer'
import PlayerTagWithImg from '../gamesnight/PlayerTagWithImg'
import GamesContainer from '../styledcomponents/GamesContainer'
import GameTagWithWinner from '../gamesnight/GameTagWithWinner'

export default class MyGamesNightScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'My Games Night'} />
        <Container>
          {this.props.gamesNight.players.length > 0 ? (
            <React.Fragment>
              <PlayersContainer margin="20">
                {this.renderAllPlayers()}
              </PlayersContainer>
              {this.props.gamesNight.games.length > 0 ? (
                <GamesContainer>{this.renderAllGames()}</GamesContainer>
              ) : (
                <React.Fragment>
                  No games selected - choose which games you would like to play
                  together!
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              It's empty here - start planing your games night by selecting
              players and choosing games that you'd like to play together!{' '}
              <span role="img" aria-label="smiling face with sunglasses">
                😎
              </span>
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
    <PlayerTagWithImg key={player.id} {...player} />
  )

  renderAllGames() {
    return this.props.gamesNight.games
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  imgSrc = gameId => {
    const game = this.props.games.find(g => g.id === gameId)
    return game.imgSrc
  }

  renderSingleGame = game => (
    <GameTagWithWinner
      key={game.id}
      imgSrc={this.imgSrc(game.id)}
      {...game}
      players={this.props.gamesNight.players}
      addWinnerToGame={this.props.addWinnerToGame}
    />
  )
}
