import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import StyleBox from './StyleBox'
import Game from '../components/Game'

storiesOf('Game', module).add('default', () => (
  <React.Fragment>
    <Game
      title={text('Game title:', 'The Settlers of Catan')}
      numPlayers={text('Number of players', '2-3')}
      playingTime={text('Game duration:', '60-120')}
      age={text('Age:', '10+')}
    />
    {/* <StyleBox h={40} /> */}
  </React.Fragment>
))
