import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import uid from 'uid'
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
    gameEvenings: [],
    players: [
      {
        id: 1,
        name: 'Frauke',
        imgScr: 'https://source.unsplash.com/1600x900/?cat',
        userName: '@frauks',
        isExpanded: false,
        isBookmarked: true,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 2,
        name: 'Alexander',
        imgScr: 'https://source.unsplash.com/1600x900/?beach',
        userName: '@alex',
        isExpanded: false,
        isBookmarked: true,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 3,
        name: 'Jerry',
        imgScr: 'https://source.unsplash.com/1600x900/?developer',
        userName: '@jerry',
        isExpanded: false,
        isBookmarked: false,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 4,
        name: 'Tom',
        imgScr: 'https://source.unsplash.com/1600x900/?dog',
        userName: '@tom',
        isExpanded: false,
        isBookmarked: false,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 5,
        name: 'Kelly',
        imgScr: 'https://source.unsplash.com/1600x900/?ocean',
        userName: '@kelly',
        isExpanded: false,
        isBookmarked: true,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 6,
        name: 'Hans',
        imgScr: 'https://source.unsplash.com/1600x900/?autumn',
        userName: '@hans',
        isExpanded: false,
        isBookmarked: true,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 7,
        name: 'Jan',
        imgScr: 'https://source.unsplash.com/1600x900/?creative',
        userName: '@jan',
        isExpanded: false,
        isBookmarked: false,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 8,
        name: 'Melanie',
        imgScr: 'https://source.unsplash.com/1600x900/?summer',
        userName: '@melanie',
        isExpanded: false,
        isBookmarked: false,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 9,
        name: 'Benno',
        imgScr: 'https://source.unsplash.com/1600x900/?nature',
        userName: '@benno',
        isExpanded: false,
        isBookmarked: false,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 10,
        name: 'Lukas',
        imgScr: 'https://source.unsplash.com/1600x900/?sport',
        userName: '@lukas',
        isExpanded: false,
        isBookmarked: false,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: 11,
        name: 'Chris',
        imgScr: 'https://source.unsplash.com/1600x900/?business',
        userName: '@chris',
        isExpanded: false,
        isBookmarked: false,
        games: [
          {
            id: 1,
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 2,
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 3,
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: 4,
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: 5,
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      }
    ],
    games: [
      {
        id: 1,
        title: 'The Settlers of Catan',
        imgScr:
          'https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg',
        numPlayers: '3-4',
        playingTime: '60-120',
        age: '10+',
        isExpanded: false,
        players: [
          {
            id: 1,
            name: 'Frauke',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 2,
            name: 'Alex',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 3,
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 4,
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 5,
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 6,
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 7,
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 8,
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 9,
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 10,
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: 11,
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
        id: 2,
        title: 'UNO',
        imgScr:
          'https://cf.geekdo-images.com/original/img/z3OFp3362X0ZPf5CIc5vfxzwDsg=/0x0/pic981505.jpg',
        numPlayers: '2-10',
        playingTime: '30',
        age: '6+',
        isExpanded: false,
        players: [
          {
            id: 1,
            name: 'Frauke',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 2,
            name: 'Alex',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 3,
            name: 'Jerry',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 4,
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 5,
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 6,
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 7,
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 8,
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 9,
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 10,
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: 11,
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
        id: 3,
        title: 'Monopoly',
        imgScr:
          'https://cf.geekdo-images.com/original/img/KzMGdogea21FKDqAG_dRw0j6S-k=/0x0/pic227097.jpg',
        numPlayers: '2-8',
        playingTime: '60-180',
        age: '8+',
        isExpanded: false,
        players: [
          {
            id: 1,
            name: 'Frauke',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 2,
            name: 'Alex',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 3,
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 4,
            name: 'Tom',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 5,
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 6,
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 7,
            name: 'Jan',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 8,
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 9,
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 10,
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: 11,
            name: 'Chris',
            likesGame: true,
            ownsGame: true
          }
        ]
      },
      {
        id: 4,
        title: 'Qwirkle',
        imgScr:
          'https://cf.geekdo-images.com/original/img/FnLhG5NDbel24voh8nbdYXAYji0=/0x0/pic309353.jpg',
        numPlayers: '2-4',
        playingTime: '45',
        age: '6+',
        isExpanded: false,
        players: [
          {
            id: 1,
            name: 'Frauke',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 2,
            name: 'Alex',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 3,
            name: 'Jerry',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 4,
            name: 'Tom',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 5,
            name: 'Kelly',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 6,
            name: 'Hans',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 7,
            name: 'Jan',
            likesGame: true,
            ownsGame: true
          },
          {
            id: 8,
            name: 'Melanie',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 9,
            name: 'Benno',
            likesGame: true,
            ownsGame: false
          },
          {
            id: 10,
            name: 'Lukas',
            likesGame: false,
            ownsGame: true
          },
          {
            id: 11,
            name: 'Chris',
            likesGame: true,
            ownsGame: false
          }
        ]
      },
      {
        id: 5,
        title: 'Scrabble',
        imgScr:
          'https://cf.geekdo-images.com/original/img/lVqLm3lRviB_an3_gAqhvSJ6riA=/0x0/pic404651.jpg',
        numPlayers: '2-4',
        playingTime: '45',
        age: '6+',
        isExpanded: false,
        players: [
          {
            id: 1,
            name: 'Frauke',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 2,
            name: 'Alex',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 3,
            name: 'Jerry',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 4,
            name: 'Tom',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 5,
            name: 'Kelly',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 6,
            name: 'Hans',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 7,
            name: 'Jan',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 8,
            name: 'Melanie',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 9,
            name: 'Benno',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 10,
            name: 'Lukas',
            likesGame: false,
            ownsGame: false
          },
          {
            id: 11,
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
                onToggleBookmark={this.toggleBookmarkPlayer}
              />
            )}
          />
          <Route
            path="/playgroup/"
            render={() => (
              <GamesEveningScreen
                bookmarkedPlayers={this.state.players.filter(
                  player => player.isBookmarked
                )}
                newArray={this.state.bookmarkedPlayers}
                onToggleExpand={this.toggleExpandPlayerCard}
                onToggleBookmark={this.toggleBookmarkPlayer}
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

  toggleBookmarkPlayer = id => {
    const { players } = this.state
    const index = players.findIndex(p => p.id === id)
    const player = players[index]
    const updatedPlayers = [
      ...players.slice(0, index),
      { ...player, isBookmarked: !player.isBookmarked },
      ...players.slice(index + 1)
    ]

    this.setState({
      players: updatedPlayers
    })

    // !player.isBookmarked
    //   ? this.addBookmarkedPlayer(player)
    //   : this.removeBookmarkedPlayer(player.id)
  }

  // addBookmarkedPlayer(player) {
  //   this.setState({
  //     bookmarkedPlayers: [{ ...player }, ...this.state.bookmarkedPlayers]
  //   })
  // }

  // removeBookmarkedPlayer(id) {
  //   const { bookmarkedPlayers } = this.state
  //   const index = bookmarkedPlayers.findIndex(player => player.id === id)
  //   this.setState({
  //     bookmarkedPlayers: [
  //       ...bookmarkedPlayers.slice(0, index),
  //       ...bookmarkedPlayers.slice(index + 1)
  //     ]
  //   })
  // }
}
