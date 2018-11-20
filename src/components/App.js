import React, { Component } from 'react'
import uid from 'uid'
import styled from 'styled-components'
import Game from './Game'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 20px;
`

export default class App extends Component {
  game = {
    key: uid(),
    id: uid(),
    title: 'The Settlers of Catan',
    numPlayers: '3-4',
    playingTime: '60-120',
    age: '10+',
    players: [
      {
        key: uid(),
        id: uid(),
        name: 'Frauke',
        likesGame: true,
        ownsGame: true
      },
      { key: uid(), id: uid(), name: 'Alex', likesGame: true, ownsGame: true },
      { key: uid(), id: uid(), name: 'Jerry', likesGame: true, ownsGame: true },
      { key: uid(), id: uid(), name: 'Tom', likesGame: true, ownsGame: false },
      {
        key: uid(),
        id: uid(),
        name: 'Kelly',
        likesGame: true,
        ownsGame: false
      },
      { key: uid(), id: uid(), name: 'Hans', likesGame: true, ownsGame: false },
      { key: uid(), id: uid(), name: 'Jan', likesGame: false, ownsGame: false },
      {
        key: uid(),
        id: uid(),
        name: 'Melanie',
        likesGame: true,
        ownsGame: false
      },
      {
        key: uid(),
        id: uid(),
        name: 'Benno',
        likesGame: true,
        ownsGame: false
      },
      { key: uid(), id: uid(), name: 'Lukas', likesGame: false, ownsGame: true }
    ]
  }

  render() {
    return (
      <Wrapper>
        <Game data={this.game} />
      </Wrapper>
    )
  }
}
