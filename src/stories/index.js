import React from 'react'
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// import StyleBox from './StyleBox'
import Game from '../components/Game'
import Player from '../components/Player'

library.add(faAngleDown)

storiesOf('Game', module).add('card with text', () => (
  <React.Fragment>
    {/* <StyleBox h={400} /> */}
    <Game
      data={{
        title: text('Game title', 'The Settlers of Catan'),
        imgScr:
          'https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg',
        numPlayers: text('Number of players', '2-3'),
        playingTime: text('Game duration', '60-120'),
        age: text('Age', '10+'),
        isExpanded: boolean('Expand/Collapse', false),
        onClick: action('onClick'),
        players: array('Players', [
          { name: 'Frauke', likesGame: true, ownsGame: true },
          { name: 'Alex', likesGame: true, ownsGame: true },
          { name: 'Jerry', likesGame: true, ownsGame: true },
          { name: 'Tom', likesGame: true, ownsGame: false },
          { name: 'Kelly', likesGame: true, ownsGame: false },
          { name: 'Chris', likesGame: true, ownsGame: false }
        ])
      }}
    />
    <Game
      data={{
        title: text('Game title2', 'The Settlers of Catan'),
        imgScr:
          'https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg',
        numPlayers: text('Number of players2', '2-3'),
        playingTime: text('Game duration2', '60-120'),
        age: text('Age2', '10+'),
        isExpanded: boolean('Expand/Collapse2', true),
        players: array('Players2', [
          { name: 'Frauke', likesGame: true, ownsGame: true },
          { name: 'Alex', likesGame: true, ownsGame: true },
          { name: 'Jerry', likesGame: true, ownsGame: true },
          { name: 'Tom', likesGame: true, ownsGame: false },
          { name: 'Kelly', likesGame: true, ownsGame: false },
          { name: 'Chris', likesGame: true, ownsGame: false }
        ])
      }}
    />
    <Game
      data={{
        title: text('Game title3', 'The Settlers of Catan'),
        imgScr:
          'https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg',
        numPlayers: text('Number of players3', '2-3'),
        playingTime: text('Game duration3', '60-120'),
        age: text('Age2', '10+'),
        isExpanded: boolean('Expand/Collapse3', true),
        players: array('Players3', [])
      }}
    />
  </React.Fragment>
))

storiesOf('Player', module).add('card with text', () => (
  <React.Fragment>
    {/* <StyleBox h={400} /> */}
    <Player
      onClick={action('onClick')}
      data={{
        name: text('Player name', 'Chris'),
        imgScr: 'https://source.unsplash.com/1600x900/?city',
        userName: text('Username', '@Kelly'),
        isExpanded: boolean('Expand/Collapse', false),
        games: array('Games', [
          {
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ])
      }}
    />
    <Player
      onClick={action('onClick2')}
      data={{
        name: text('Player name2', 'Chris'),
        imgScr: 'https://source.unsplash.com/1600x900/?city',
        userName: text('Username2', '@Kelly'),
        isExpanded: boolean('Expand/Collapse2', true),
        games: array('Games2', [
          {
            title: 'The Settlers of Catan',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            title: 'UNO',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            title: 'Qwirkle',
            likedByPlayer: true,
            ownedByPlayer: false
          },
          {
            title: 'Monopoly',
            likedByPlayer: true,
            ownedByPlayer: true
          },
          {
            title: 'Scrabble',
            likedByPlayer: false,
            ownedByPlayer: false
          }
        ])
      }}
    />
    <Player
      onClick={action('onClick3')}
      data={{
        name: text('Player name3', 'Chris'),
        imgScr: 'https://source.unsplash.com/1600x900/?city',
        userName: text('Username3', '@Kelly'),
        isExpanded: boolean('Expand/Collapse3', true),
        games: array('Games3', [])
      }}
    />
  </React.Fragment>
))
