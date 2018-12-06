import React, { Component } from 'react'

import styled from 'styled-components'
import Header from '../Header'
import CardsContainer from '../card/CardsContainer'
import PlayerTag from '../card/PlayerTag'
import Card from '../card/Card'
import GameTag from '../card/GameTag'
import SubHeading from '../card/SubHeading'
import Separator from '../card/Separator'

const GamesContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  margin: 10px 0 20px 0;
`

const PlayersContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  margin: 10px 0 20px 0;
`

export default class GamesNightScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'Games Night'} />
        <CardsContainer>
          <Card padding={20}>
            <h2>{'My Games Night'}</h2>
            <Separator margin={20} />
            {this.props.gamesNight.players.length > 0 ? null : (
              <React.Fragment>
                Let's go - start adding players to your games session by
                bookmarking players on the players screen! 😎
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
          : [...acc, { id: item.id, title: item.title }]
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
