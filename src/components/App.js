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
  state = {
    games: [
      {
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
          {
            key: uid(),
            id: uid(),
            name: 'Alex',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
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
          {
            key: uid(),
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        title: 'Keyforge',
        numPlayers: '2',
        playingTime: '15-45',
        age: '14+',
        players: [
          {
            key: uid(),
            id: uid(),
            name: 'Frauke',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Alex',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
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
          {
            key: uid(),
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        title: 'Monopoly',
        numPlayers: '2-8',
        playingTime: '60-180',
        age: '8+',
        players: [
          {
            key: uid(),
            id: uid(),
            name: 'Frauke',
            likesGame: false,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Alex',
            likesGame: false,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
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
          {
            key: uid(),
            id: uid(),
            name: 'Lukas',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: true
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        title: 'Qwirkle',
        numPlayers: '2-4',
        playingTime: '45',
        age: '6+',
        players: [
          {
            key: uid(),
            id: uid(),
            name: 'Frauke',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Alex',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Tom',
            likesGame: false,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            key: uid(),
            id: uid(),
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
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
          {
            key: uid(),
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            key: uid(),
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      }
    ]
  }

  render() {
    return <Wrapper>{this.renderAllGames()}</Wrapper>
  }

  renderAllGames() {
    return this.state.games
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderSingleGame = game => <Game data={game} />
}
