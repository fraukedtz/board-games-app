import React, { Component } from 'react'

import CardsContainer from '../card/CardsContainer'
import Card from '../card/Card'
import Separator from '../card/Separator'
import PlayerTagWithImg from '../card/PlayerTagWithImg'
import GameTagWithWinner from '../card/GameTagWithWinner'
import Heading from '../card/Heading'
import SubHeading from '../card/SubHeading'
import GamesContainer from '../styledcomponents/GamesContainer'
import PlayersContainer from '../styledcomponents/PlayersContainer'

export default class MyGamesNightScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <CardsContainer>
          <Card padding={20}>
            <Heading text="My Games Night" />
            <Separator margin={20} />
            {this.props.gamesNight.players.length > 0 ? (
              <React.Fragment>
                <SubHeading text="Players" />
                <PlayersContainer>{this.renderAllPlayers()}</PlayersContainer>
                <SubHeading text="Games" />
                {this.props.gamesNight.games.length > 0 ? (
                  <React.Fragment>
                    <GamesContainer>{this.renderAllGames()}</GamesContainer>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    No games selected - choose which games you would like to
                    play together!
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                It's empty here - start planing your games evening by selecting
                players and choosing games that you would like to play together!
                😎
              </React.Fragment>
            )}
          </Card>
        </CardsContainer>
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

  renderSingleGame = game => (
    <GameTagWithWinner
      key={game.id}
      {...game}
      players={this.props.gamesNight.players}
      addWinnerToGame={this.props.addWinnerToGame}
    />
  )
}
