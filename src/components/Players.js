import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'
import Player from './Player'

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  /* grid-template-columns: repeat(auto-fill, 350px); */
  padding: 20px;
`

export default class Players extends Component {
  state = {
    players: [
      {
        key: uid(),
        id: uid(),
        name: 'Frauke',
        imgScr: 'https://source.unsplash.com/1600x900/?cat',
        userName: '@frauks',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Alex',
        imgScr: 'https://source.unsplash.com/1600x900/?beach',
        userName: '@alex',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Jerry',
        imgScr: 'https://source.unsplash.com/1600x900/?developer',
        userName: '@jerry',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Tom',
        imgScr: 'https://source.unsplash.com/1600x900/?dog',
        userName: '@tom',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Kelly',
        imgScr: 'https://source.unsplash.com/1600x900/?ocean',
        userName: '@kelly',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Hans',
        imgScr: 'https://source.unsplash.com/1600x900/?autumn',
        userName: '@hans',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Jan',
        imgScr: 'https://source.unsplash.com/1600x900/?creative',
        userName: '@jan',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: false,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Melanie',
        imgScr: 'https://source.unsplash.com/1600x900/?summer',
        userName: '@melanie',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Benno',
        imgScr: 'https://source.unsplash.com/1600x900/?nature',
        userName: '@benno',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Lukas',
        imgScr: 'https://source.unsplash.com/1600x900/?sport',
        userName: '@lukas',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: false,
            ownedByPlayer: true
          },
          {
            key: uid(),
            id: uid(),
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ]
      },
      {
        key: uid(),
        id: uid(),
        name: 'Chris',
        imgScr: 'https://source.unsplash.com/1600x900/?city',
        userName: '@chris',
        isExpanded: false,
        games: [
          {
            key: uid(),
            id: uid(),
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            key: uid(),
            id: uid(),
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            key: uid(),
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
    return <Wrapper>{this.renderAllPlayers()}</Wrapper>
  }

  renderAllPlayers() {
    return this.state.players
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSinglePlayer)
  }

  renderSinglePlayer = player => (
    <Player
      key={player.key}
      data={player}
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
