import React, { Component } from 'react'
import uid from 'uid'

import Header from '../Header'
import CardsContainer from '../card/CardsContainer'
import PlayerCard from '../card/PlayerCard'

export default class PlayersScreen extends Component {
  state = {
    players: [
      {
        id: uid(),
        name: 'Frauke',
        imgScr: 'https://source.unsplash.com/1600x900/?cat',
        userName: '@frauks',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Alex',
        imgScr: 'https://source.unsplash.com/1600x900/?beach',
        userName: '@alex',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Jerry',
        imgScr: 'https://source.unsplash.com/1600x900/?developer',
        userName: '@jerry',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Tom',
        imgScr: 'https://source.unsplash.com/1600x900/?dog',
        userName: '@tom',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Kelly',
        imgScr: 'https://source.unsplash.com/1600x900/?ocean',
        userName: '@kelly',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Hans',
        imgScr: 'https://source.unsplash.com/1600x900/?autumn',
        userName: '@hans',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Jan',
        imgScr: 'https://source.unsplash.com/1600x900/?creative',
        userName: '@jan',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Melanie',
        imgScr: 'https://source.unsplash.com/1600x900/?summer',
        userName: '@melanie',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Benno',
        imgScr: 'https://source.unsplash.com/1600x900/?nature',
        userName: '@benno',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Lukas',
        imgScr: 'https://source.unsplash.com/1600x900/?sport',
        userName: '@lukas',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Chris',
        imgScr: 'https://source.unsplash.com/1600x900/?business',
        userName: '@chris',
        isExpanded: false,
        games: [
          {
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Header text={'Players'} />
        <CardsContainer>{this.renderAllPlayers()}</CardsContainer>
      </React.Fragment>
    )
  }

  renderAllPlayers() {
    return this.state.players
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderSinglePlayer = player => (
    <PlayerCard
      key={player.id}
      {...player}
      onClick={() => this.toggleExpand(player.id)}
    />
  )

  toggleExpand = id => {
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
}
