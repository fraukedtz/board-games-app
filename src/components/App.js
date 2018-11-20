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
        imgScr:
          'https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg',
        numPlayers: '3-4',
        playingTime: '60-120',
        age: '10+',
        isExpanded: false,
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
        title: 'UNO',
        imgScr:
          'https://cf.geekdo-images.com/original/img/z3OFp3362X0ZPf5CIc5vfxzwDsg=/0x0/pic981505.jpg',
        numPlayers: '2-10',
        playingTime: '30',
        age: '6+',
        isExpanded: false,
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
        imgScr:
          'https://cf.geekdo-images.com/original/img/KzMGdogea21FKDqAG_dRw0j6S-k=/0x0/pic227097.jpg',
        numPlayers: '2-8',
        playingTime: '60-180',
        age: '8+',
        isExpanded: false,
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
        imgScr:
          'https://cf.geekdo-images.com/original/img/FnLhG5NDbel24voh8nbdYXAYji0=/0x0/pic309353.jpg',
        numPlayers: '2-4',
        playingTime: '45',
        age: '6+',
        isExpanded: false,
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

  renderSingleGame = game => (
    <Game
      key={game.key}
      data={game}
      onClick={() => this.toggleExpand(game.id)}
    />
  )

  toggleExpand = id => {
    const { games } = this.state
    const index = games.findIndex(g => g.id === id)
    const game = games[index]
    const updatedGames = [
      ...games.slice(0, index),
      { ...game, isExpanded: !game.isExpanded },
      ...games.slice(index + 1)
    ]
    this.setState({
      games: updatedGames
    })
  }
}
