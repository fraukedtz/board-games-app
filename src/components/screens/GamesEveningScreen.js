import React, { Component } from 'react'

import styled from 'styled-components'
import Header from '../Header'
import CardsContainer from '../card/CardsContainer'
import PlayerTag from '../card/PlayerTag'
import Card from '../card/Card'
import TagListHeading from '../card/TagListHeading'
import GameTag from '../card/GameTag'

const Title = styled.h2`
  margin: 0;
`
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
            <Title>{'Games Evening 1'}</Title>
            <TagListHeading text="Selected Players" />
            <PlayersContainer>{this.renderAllPlayers()}</PlayersContainer>
            <TagListHeading text="Games that players like" />
            <GamesContainer>{this.renderAllGames()}</GamesContainer>
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
      onToggleBookmark={() => this.props.onToggleBookmark(player)}
    />
  )

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

  renderSingleGame = game => <GameTag key={game.id} {...game} />
}
