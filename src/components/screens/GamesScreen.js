import React, { Component } from 'react'
import uid from 'uid'

import Header from '../Header'
import CardsContainer from '../styledcomponents/CardsContainer'
import GameCard from '../GameCard'

export default class GamesScreen extends Component {
  state = {
    games: [
      {
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
            id: uid(),
            name: 'Frauke',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Alex',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
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
            id: uid(),
            name: 'Frauke',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Alex',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
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
            id: uid(),
            name: 'Frauke',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Alex',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jan',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: true
          }
        ]
      },
      {
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
            id: uid(),
            name: 'Frauke',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Alex',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Tom',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jan',
            likesGame: true,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: uid(),
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
        id: uid(),
        title: 'Scrabble',
        imgScr:
          'https://cf.geekdo-images.com/original/img/lVqLm3lRviB_an3_gAqhvSJ6riA=/0x0/pic404651.jpg',
        numPlayers: '2-4',
        playingTime: '45',
        age: '6+',
        isExpanded: false,
        players: [
          {
            id: uid(),
            name: 'Frauke',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Alex',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jerry',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Tom',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Kelly',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Hans',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Melanie',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Benno',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Lukas',
            likesGame: false,
            ownsGame: false
          },
          {
            id: uid(),
            name: 'Chris',
            likesGame: false,
            ownsGame: false
          }
        ]
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Header text={'Games'} />
        <CardsContainer>{this.renderAllGames()}</CardsContainer>
      </React.Fragment>
    )
  }

  renderAllGames() {
    return this.state.games
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleGame)
  }

  renderSingleGame = game => (
    <GameCard
      key={game.id}
      {...game}
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
