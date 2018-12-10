import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import GamesScreen from './screens/GamesScreen'
import PlayersScreen from './screens/PlayersScreen'
import PlanGamesNightScreen from './screens/PlanGamesNightScreen'
import MyGamesNightScreen from './screens/MyGamesNightScreen'
import Navigation from './Navigation'

import ImgCatan from '../images/games/catan.jpg'
import ImgUno from '../images/games/uno.jpg'
import ImgScrabble from '../images/games/scrabble.jpg'
import ImgQwirkle from '../images/games/qwirkle.jpg'
import ImgMonopoly from '../images/games/monopoly.jpg'

import ImgAlex from '../images/players/alex.jpeg'
import ImgChris from '../images/players/chris.jpeg'
import ImgFrauke from '../images/players/frauke.jpeg'
import ImgHans from '../images/players/hans.jpeg'
import ImgJan from '../images/players/jan.jpeg'
import ImgJerry from '../images/players/jerry.jpg'
import ImgKelly from '../images/players/kelly.jpeg'
import ImgLukas from '../images/players/lukas.jpeg'
import ImgMelanie from '../images/players/melanie.jpeg'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`

export default class App extends Component {
  state = {
    searchQueryGames: '',
    searchQueryPlayers: '',
    gamesNight: {
      players: this.loadBookmarkedPlayers() || [],
      games: this.loadBookmarkedGames() || []
    },
    players: [
      {
        id: '1',
        name: 'Frauke',
        imgScr: ImgFrauke,
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
            id: '4',
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
            id: '4',
            title: 'Qwirkle'
          }
        ]
      },
      {
        id: '2',
        name: 'Alex',
        imgScr: ImgAlex,
        userName: '@alexx',
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
            title: 'Qwirkle',
            isOwned: false
          },
          {
            id: '3',
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
        imgScr: ImgJerry,
        userName: '@badabam',
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
            id: '4',
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
            id: '4',
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
        imgScr: ImgChris,
        userName: '@chriscar',
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
            id: '3',
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
            id: '3',
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
        imgScr: ImgKelly,
        userName: '@kellyk',
        isExpanded: false,
        likedGames: [
          {
            id: '2',
            title: 'UNO',
            isOwned: false
          },
          {
            id: '3',
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
        imgScr: ImgHans,
        userName: '@hansjo',
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
            id: '3',
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
            id: '3',
            title: 'Monopoly'
          }
        ]
      },
      {
        id: '7',
        name: 'Jan',
        imgScr: ImgJan,
        userName: '@janno',
        isExpanded: false,
        likedGames: [
          {
            id: '1',
            title: 'The Settlers of Catan',
            isOwned: false
          },
          {
            id: '4',
            title: 'Qwirkle',
            isOwned: true
          },
          {
            id: '3',
            title: 'Monopoly',
            isOwned: false
          }
        ],
        ownedGames: [
          {
            id: '4',
            title: 'Qwirkle'
          }
        ]
      },
      {
        id: '8',
        name: 'Melanie',
        imgScr: ImgMelanie,
        userName: '@mel',
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
        imgScr: ImgLukas,
        userName: '@luks',
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
        imgScr: ImgCatan,
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
        imgScr: ImgUno,
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
        imgScr: ImgMonopoly,
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
        imgScr: ImgQwirkle,
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
        imgScr: ImgScrabble,
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
    this.saveBookmarkedGames()
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
                searchQuery={this.state.searchQueryGames}
                setSearchQuery={this.setSearchQuery}
              />
            )}
          />
          <Route
            path="/players/"
            render={() => (
              <PlayersScreen
                players={this.state.players}
                onToggleExpand={this.toggleExpandPlayerCard}
                searchQuery={this.state.searchQueryPlayers}
                setSearchQuery={this.setSearchQuery}
                onToggleBookmark={this.toggleBookmark}
                gamesNight={this.state.gamesNight}
              />
            )}
          />
          <Route
            path="/plangamesnight/"
            render={() => (
              <PlanGamesNightScreen
                gamesNight={this.state.gamesNight}
                onToggleBookmark={this.toggleBookmark}
                onToggleBookmarkGame={this.toggleBookmarkGame}
              />
            )}
          />
          <Route
            path="/mygamesnight/"
            render={() => (
              <MyGamesNightScreen
                gamesNight={this.state.gamesNight}
                addWinnerToGame={this.addWinnerToGame}
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

  setSearchQuery = (id, query) => {
    id === 'games'
      ? this.setState({
          searchQueryGames: query
        })
      : id === 'players'
      ? this.setState({
          searchQueryPlayers: query
        })
      : this.setState({
          searchQueryGames: '',
          searchQueryPlayers: ''
        })
  }

  toggleBookmark = player => {
    const { gamesNight } = this.state
    const newbookmarkedPlayers = gamesNight.players.some(
      p => p.id === player.id
    )
      ? this.deletePlayerFromBookmarkedPlayers(player.id)
      : this.addPlayerToBookmarkedPlayers(player)

    this.setState({
      gamesNight: {
        ...gamesNight,
        players: newbookmarkedPlayers
      }
    })
  }

  deletePlayerFromBookmarkedPlayers = playerId => {
    const { gamesNight } = this.state
    const index = gamesNight.players.findIndex(p => p.id === playerId)
    const newbookmarkedPlayers = [
      ...gamesNight.players.slice(0, index),
      ...gamesNight.players.slice(index + 1)
    ]

    return newbookmarkedPlayers
  }

  addPlayerToBookmarkedPlayers = player => {
    const { gamesNight } = this.state
    const newbookmarkedPlayers = gamesNight.players.some(
      p => p.id === player.id
    )
      ? [...gamesNight.players]
      : [...gamesNight.players, player]

    return newbookmarkedPlayers
  }

  toggleBookmarkGame = game => {
    const { gamesNight } = this.state
    const newbookmarkedGames = gamesNight.games.some(g => g.id === game.id)
      ? this.deleteGameFromBookmarkedGames(game.id)
      : this.addGameToBookmarkedGames(game)

    this.setState({
      gamesNight: {
        ...gamesNight,
        games: newbookmarkedGames
      }
    })
  }

  deleteGameFromBookmarkedGames = gameId => {
    const { gamesNight } = this.state
    const index = gamesNight.games.findIndex(g => g.id === gameId)
    const newbookmarkedGames = [
      ...gamesNight.games.slice(0, index),
      ...gamesNight.games.slice(index + 1)
    ]

    return newbookmarkedGames
  }

  addGameToBookmarkedGames = game => {
    const { gamesNight } = this.state
    const newbookmarkedGames = gamesNight.games.some(g => g.id === game.id)
      ? [...gamesNight.games]
      : [...gamesNight.games, game]

    return newbookmarkedGames
  }

  addWinnerToGame = (gameId, playerId) => {
    const { gamesNight } = this.state

    const index = gamesNight.games.findIndex(game => game.id === gameId)
    const game = gamesNight.games[index]

    const updatedGames = [
      ...gamesNight.games.slice(0, index),
      { ...game, winnerId: playerId },
      ...gamesNight.games.slice(index + 1)
    ]

    this.setState({
      gamesNight: {
        ...gamesNight,
        games: updatedGames
      }
    })
  }

  saveBookmarkedPlayers() {
    localStorage.setItem(
      'board-games-app--bookmarkedPlayers',
      JSON.stringify(this.state.gamesNight.players)
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

  saveBookmarkedGames() {
    localStorage.setItem(
      'board-games-app--bookmarkedGames',
      JSON.stringify(this.state.gamesNight.games)
    )
  }

  loadBookmarkedGames() {
    try {
      return (
        JSON.parse(localStorage.getItem('board-games-app--bookmarkedGames')) ||
        []
      )
    } catch (err) {
      return []
    }
  }
}
