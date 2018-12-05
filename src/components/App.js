import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import GamesScreen from './screens/GamesScreen'
import PlayersScreen from './screens/PlayersScreen'
import GamesEveningScreen from './screens/GamesEveningScreen'
import Navigation from './Navigation'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`

export default class App extends Component {
  state = {
    gamesEvening: {
      players: this.loadBookmarkedPlayers(),
      games: []
    },
    // bookmarkedPlayers: this.loadBookmarkedPlayers(),
    players: [
      {
        id: '1',
        name: 'Frauke',
        imgScr: 'https://source.unsplash.com/1600x900/?cat',
        userName: '@frauks',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: true
          },
          {
            id: '2',
            title: 'UNO',
            isOwned: false
          },
          {
            id: '3',
            title: 'Qwirkle',
            isOwned: true
          }
        ],
        ownedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan'
          },
          {
            id: '3',
            title: 'Qwirkle'
          }
        ]
      },
      {
        id: '2',
        name: 'Alex',
        imgScr: 'https://source.unsplash.com/1600x900/?beach',
        userName: '@alex',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: false
          },
          {
            id: '2',
            title: 'UNO',
            isOwned: true
          },
          {
            id: '3',
            title: 'Qwirkle',
            isOwned: false
          },
          {
            id: '4',
            title: 'Monopoly',
            isOwned: false
          }
        ],
        ownedGames: [
          {
            id: '2',
            title: 'UNO'
          }
        ]
      },
      {
        id: '3',
        name: 'Jerry',
        imgScr: 'https://source.unsplash.com/1600x900/?developer',
        userName: '@jerry',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: true
          },
          {
            id: '2',
            title: 'UNO',
            isOwned: false
          },
          {
            id: '3',
            title: 'Qwirkle',
            isOwned: true
          }
        ],
        ownedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan'
          },
          {
            id: '3',
            title: 'Qwirkle'
          },
          {
            id: '5',
            title: 'Scrabble'
          }
        ]
      },
      {
        id: '4',
        name: 'Chris',
        imgScr: 'https://source.unsplash.com/1600x900/?business',
        userName: '@chris',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: false
          },
          {
            id: '2',
            title: 'UNO',
            isOwned: false
          },
          {
            id: '4',
            title: 'Monopoly',
            isOwned: true
          },
          {
            id: '5',
            title: 'Scrabble',
            isOwned: true
          }
        ],
        ownedGames: [
          {
            id: '4',
            title: 'Monopoly'
          },
          {
            id: '5',
            title: 'Scrabble'
          }
        ]
      },
      {
        id: '5',
        name: 'Kelly',
        imgScr: 'https://source.unsplash.com/1600x900/?ocean',
        userName: '@kelly',
        isExpanded: false,
        likedGames: [
          {
            id: '2',
            title: 'UNO',
            isOwned: false
          },
          {
            id: '4',
            title: 'Monopoly',
            isOwned: false
          },
          {
            id: '5',
            title: 'Scrabble',
            isOwned: false
          }
        ],
        ownedGames: []
      },
      {
        id: '6',
        name: 'Hans',
        imgScr: 'https://source.unsplash.com/1600x900/?autumn',
        userName: '@hans',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: false
          },
          {
            id: '2',
            title: 'UNO',
            isOwned: false
          },
          {
            id: '4',
            title: 'Monopoly',
            isOwned: true
          },
          {
            id: '5',
            title: 'Scrabble',
            isOwned: false
          }
        ],
        ownedGames: [
          {
            id: '4',
            title: 'Monopoly'
          }
        ]
      },
      {
        id: '7',
        name: 'Jan',
        imgScr: 'https://source.unsplash.com/1600x900/?creative',
        userName: '@jan',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: false
          },
          {
            id: '3',
            title: 'Qwirkle',
            isOwned: true
          },
          {
            id: '4',
            title: 'Monopoly',
            isOwned: false
          }
        ],
        ownedGames: [
          {
            id: '3',
            title: 'Qwirkle'
          }
        ]
      },
      {
        id: '8',
        name: 'Melanie',
        imgScr: 'https://source.unsplash.com/1600x900/?summer',
        userName: '@melanie',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: false
          },
          {
            id: '2',
            title: 'UNO',
            isOwned: true
          },
          {
            id: '4',
            title: 'Monopoly',
            isOwned: false
          }
        ],
        ownedGames: [
          {
            id: '2',
            title: 'UNO'
          }
        ]
      },
      {
        id: '9',
        name: 'Lukas',
        imgScr: 'https://source.unsplash.com/1600x900/?sport',
        userName: '@lukas',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: false
          },
          {
            id: '2',
            title: 'UNO',
            isOwned: true
          }
        ],
        ownedGames: [
          {
            id: '2',
            title: 'UNO'
          }
        ]
      }
    ],
    games: [
      {
        id: '1',
        title: 'The Settlers of Catan',
        imgScr:
          'https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg',
        numPlayers: '3-4',
        playingTime: '60-120',
        age: '10+',
        isExpanded: false,
        keenPlayers: [
          {
            id: '1',
            name: 'Frauke',
            ownsGame: true
          },
          {
            id: '2',
            name: 'Alex',
            ownsGame: false
          },
          {
            id: '3',
            name: 'Jerry',
            ownsGame: true
          },
          {
            id: '6',
            name: 'Hans',
            ownsGame: false
          },
          {
            id: '7',
            name: 'Jan',
            ownsGame: false
          },
          {
            id: '8',
            name: 'Melanie',
            ownsGame: false
          },
          {
            id: '9',
            name: 'Lukas',
            ownsGame: false
          }
        ],
        owners: [
          {
            id: '1',
            name: 'Frauke'
          },
          {
            id: '3',
            name: 'Jerry'
          }
        ]
      },
      {
        id: '2',
        title: 'UNO',
        imgScr:
          'https://cf.geekdo-images.com/original/img/z3OFp3362X0ZPf5CIc5vfxzwDsg=/0x0/pic981505.jpg',
        numPlayers: '2-10',
        playingTime: '30',
        age: '6+',
        isExpanded: false,
        keenPlayers: [
          {
            id: '1',
            name: 'Frauke',
            ownsGame: false
          },
          {
            id: '2',
            name: 'Alex',
            ownsGame: true
          },
          {
            id: '3',
            name: 'Jerry',
            ownsGame: false
          },
          {
            id: '5',
            name: 'Kelly',
            ownsGame: false
          },
          {
            id: '6',
            name: 'Hans',
            ownsGame: false
          },
          {
            id: '8',
            name: 'Melanie',
            ownsGame: true
          },
          {
            id: '9',
            name: 'Lukas',
            ownsGame: true
          }
        ],
        owners: [
          {
            id: '2',
            name: 'Alex'
          },
          {
            id: '8',
            name: 'Melanie'
          },
          {
            id: '9',
            name: 'Lukas'
          }
        ]
      },
      {
        id: '3',
        title: 'Monopoly',
        imgScr:
          'https://cf.geekdo-images.com/original/img/KzMGdogea21FKDqAG_dRw0j6S-k=/0x0/pic227097.jpg',
        numPlayers: '2-8',
        playingTime: '60-180',
        age: '8+',
        isExpanded: false,
        keenPlayers: [
          {
            id: '2',
            name: 'Alex',
            ownsGame: false
          },
          {
            id: '4',
            name: 'Chris',
            ownsGame: true
          },
          {
            id: '5',
            name: 'Kelly',
            ownsGame: false
          },
          {
            id: '6',
            name: 'Hans',
            ownsGame: true
          },
          {
            id: '7',
            name: 'Jan',
            ownsGame: false
          },
          {
            id: '8',
            name: 'Melanie',
            ownsGame: false
          }
        ],
        owners: [
          {
            id: '4',
            name: 'Chris'
          },
          {
            id: '6',
            name: 'Hans'
          }
        ]
      },
      {
        id: '4',
        title: 'Qwirkle',
        imgScr:
          'https://cf.geekdo-images.com/original/img/FnLhG5NDbel24voh8nbdYXAYji0=/0x0/pic309353.jpg',
        numPlayers: '2-4',
        playingTime: '45',
        age: '6+',
        isExpanded: false,
        keenPlayers: [
          {
            id: '1',
            name: 'Frauke',
            ownsGame: true
          },
          {
            id: '2',
            name: 'Alex',
            ownsGame: false
          },
          {
            id: '3',
            name: 'Jerry',
            ownsGame: true
          },
          {
            id: '7',
            name: 'Jan',
            ownsGame: false
          }
        ],
        owners: [
          {
            id: '1',
            name: 'Frauke'
          },
          {
            id: '3',
            name: 'Jerry'
          }
        ]
      },
      {
        id: '5',
        title: 'Scrabble',
        imgScr:
          'https://cf.geekdo-images.com/original/img/lVqLm3lRviB_an3_gAqhvSJ6riA=/0x0/pic404651.jpg',
        numPlayers: '2-4',
        playingTime: '45',
        age: '6+',
        isExpanded: false,
        keenPlayers: [
          {
            id: '4',
            name: 'Chris',
            ownsGame: true
          },
          {
            id: '5',
            name: 'Kelly',
            ownsGame: false
          },
          {
            id: '6',
            name: 'Hans',
            ownsGame: false
          }
        ],
        owners: [
          {
            id: '3',
            name: 'Jerry'
          },
          { id: '4', name: 'Chris' }
        ]
      }
    ]
  }

  render() {
    this.saveBookmarkedPlayers()
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => (
              <GamesScreen
                games={this.state.games}
                onToggleExpand={this.toggleExpandGamesCard}
              />
            )}
          />
          <Route
            path="/players/"
            render={() => (
              <PlayersScreen
                players={this.state.players}
                onToggleExpand={this.toggleExpandPlayerCard}
                gamesEvening={this.state.gamesEvening}
                onToggleBookmark={this.toggleBookmark}
              />
            )}
          />
          <Route
            path="/gamesevening/"
            render={() => (
              <GamesEveningScreen
                gamesEvening={this.state.gamesEvening}
                onToggleBookmark={this.toggleBookmark}
              />
            )}
          />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }

  toggleExpandGamesCard = id => {
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

  toggleExpandPlayerCard = id => {
    const { players } = this.state
    const index = players.findIndex(p => p.id === id)
    const player = players[index]
    const updatedPlayers = [
      ...players.slice(0, index),
      { ...player, isExpanded: !player.isExpanded },
      ...players.slice(index + 1)
    ]
    this.setState({
      players: updatedPlayers
    })
  }

  toggleBookmark = player => {
    const { gamesEvening } = this.state
    const newbookmarkedPlayers = gamesEvening.players.some(
      p => p.id === player.id
    )
      ? this.deletePlayerFromBookmarkedPlayers(player.id)
      : this.addPlayerToBookmarkedPlayers(player)

    this.setState({
      gamesEvening: {
        ...gamesEvening,
        players: newbookmarkedPlayers
      }
    })
  }

  deletePlayerFromBookmarkedPlayers = playerId => {
    const { gamesEvening } = this.state
    const index = gamesEvening.players.findIndex(p => p.id === playerId)
    const newbookmarkedPlayers = [
      ...gamesEvening.players.slice(0, index),
      ...gamesEvening.players.slice(index + 1)
    ]

    return newbookmarkedPlayers
  }

  addPlayerToBookmarkedPlayers = player => {
    const { gamesEvening } = this.state
    const newbookmarkedPlayers = gamesEvening.players.some(
      p => p.id === player.id
    )
      ? [...gamesEvening.players]
      : [...gamesEvening.players, player]

    return newbookmarkedPlayers
  }

  saveBookmarkedPlayers() {
    localStorage.setItem(
      'board-games-app--bookmarkedPlayers',
      JSON.stringify(this.state.gamesEvening.players)
    )
  }

  loadBookmarkedPlayers() {
    try {
      return (
        JSON.parse(
          localStorage.getItem('board-games-app--bookmarkedPlayers')
        ) || []
      )
    } catch (err) {
      return []
    }
  }
}
