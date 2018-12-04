import React, { Component } from 'react'

import styled from 'styled-components'
import Header from '../Header'
import CardsContainer from '../card/CardsContainer'
import PlayerTag from '../card/PlayerTag'
import Card from '../card/Card'
import TagListHeading from '../card/TagListHeading'
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

export default class GamesEveningScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'Games Evening'} />
        <CardsContainer>
          <Card padding={20}>
            <h2>{'My Games Evening'}</h2>
            <Separator margin={20} />
            {this.props.bookmarkedPlayers.length > 0 ? null : (
              <React.Fragment>
                Let's go - start adding players to your games session by
                bookmarking players on the players screen! 😎
              </React.Fragment>
            )}

            <SubHeading text="Selected Players" />
            {this.props.bookmarkedPlayers.length > 0 ? (
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
    return this.props.bookmarkedPlayers
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
    const { bookmarkedPlayers } = this.props
    return bookmarkedPlayers.some(p => p.id === player.id)
  }

  renderAllGames() {
    const { bookmarkedPlayers } = this.props
    let likedGamesBySelectedPlayers = []

    bookmarkedPlayers.forEach(function(element) {
      let likedGames = element.games.filter(g => g.likedByPlayer)

      likedGames.forEach(function(element) {
        const newArray = likedGamesBySelectedPlayers.some(
          g => g.id === element.id
        )
          ? [...likedGamesBySelectedPlayers]
          : [...likedGamesBySelectedPlayers, element]

        likedGamesBySelectedPlayers = newArray
      })
    })

    return likedGamesBySelectedPlayers
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  // renderAllGames() {
  //   const { likedGamesBookmarkedPlayers } = this.props

  //   return likedGamesBookmarkedPlayers
  //     .sort((a, b) => (a.title < b.title ? -1 : 1))
  //     .map(this.renderSingleGame)
  // }

  renderSingleGame = game => <GameTag key={game.id} {...game} />
}
