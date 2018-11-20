import React from 'react'
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import StyleBox from './StyleBox'
import Game from '../components/Game'

storiesOf('Game', module).add('card with text', () => (
  <React.Fragment>
    <Game
      data={{
        title: text('Game title', 'The Settlers of Catan'),
        imgScr:
          'https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg',
        numPlayers: text('Number of players', '2-3'),
        playingTime: text('Game duration', '60-120'),
        age: text('Age', '10+'),
        isExpanded: false,
        players: array('Players', [
          { name: 'Frauke', likesGame: true, ownsGame: true },
          { name: 'Alex', likesGame: true, ownsGame: true },
          { name: 'Jerry', likesGame: true, ownsGame: true },
          { name: 'Tom', likesGame: true, ownsGame: false },
          { name: 'Kelly', likesGame: true, ownsGame: false },
          { name: 'Hans', likesGame: true, ownsGame: false }
        ])
      }}
    />
    {/* <StyleBox h={40} /> */}
  </React.Fragment>
))
