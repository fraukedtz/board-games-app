import React, { Component } from 'react'

import styled from 'styled-components'
import Header from '../Header'
import CardsContainer from '../card/CardsContainer'
import PlayerTag from '../card/PlayerTag'
import Card from '../card/Card'
import TagListHeading from '../card/TagListHeading'
import Separator from '../card/Separator'

const Title = styled.h2`
  /* align-self: flex-end;
  display: flex; */
  /* font-family: 'Questrial', sans-serif; */
  /* grid-column-start: span 1; */
  margin: 0;
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
            {/* <Separator /> */}
            <TagListHeading text="Selected Players" />
            <PlayersContainer>{this.renderAllPlayers()}</PlayersContainer>
            {/* {this.renderAllNewPlayers()} */}
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

  // renderAllNewPlayers() {
  //   return this.props.newArray
  //     .sort((a, b) => (a.name < b.name ? -1 : 1))
  //     .map(this.renderSinglePlayer)
  // }

  // renderSinglePlayer = player => (
  //   <PlayerCard
  //     key={player.id}
  //     {...player}
  //     onClick={() => this.props.onToggleExpand(player.id)}
  //     onClickBookmark={() => this.props.onToggleBookmark(player.id)}
  //   />
  // )
}
