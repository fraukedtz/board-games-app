import React from 'react'
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons'

// import StyleBox from './StyleBox'
import GameCard from '../components/card/GameCard'
import PlayerCard from '../components/card/PlayerCard'

library.add(faAngleDown, faStar)

storiesOf('GameCard', module).add('card with text', () => (
  <React.Fragment>
    {/* <StyleBox h={400} /> */}
    <GameCard
      title={text('Game title', 'The Settlers of Catan')}
      imgSrc="https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg"
      numPlayers={text('Number of players', '2-3')}
      playingTime={text('Game duration', '60-120')}
      age={text('Age', '10+')}
      isExpanded={boolean('Expand/Collapse', false)}
      onClick={action('onClick')}
      players={array('Players', [
        { name: 'Frauke', likesGame: true, ownsGame: true },
        { name: 'Alex', likesGame: true, ownsGame: true },
        { name: 'Jerry', likesGame: true, ownsGame: true },
        { name: 'Tom', likesGame: true, ownsGame: false },
        { name: 'Kelly', likesGame: true, ownsGame: false },
        { name: 'Chris', likesGame: true, ownsGame: false }
      ])}
    />
    <GameCard
      title={text('Game title2', 'The Settlers of Catan')}
      imgSrc="https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg"
      numPlayers={text('Number of players2', '2-3')}
      playingTime={text('Game duration2', '60-120')}
      age={text('Age2', '10+')}
      isExpanded={boolean('Expand/Collapse2', true)}
      onClick={action('onClick2')}
      players={array('Players2', [
        { name: 'Frauke', likesGame: true, ownsGame: true },
        { name: 'Alex', likesGame: true, ownsGame: true },
        { name: 'Jerry', likesGame: true, ownsGame: true },
        { name: 'Tom', likesGame: true, ownsGame: false },
        { name: 'Kelly', likesGame: true, ownsGame: false },
        { name: 'Chris', likesGame: true, ownsGame: false }
      ])}
    />
    <GameCard
      title={text('Game title3', 'The Settlers of Catan')}
      imgSrc="https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg"
      numPlayers={text('Number of players3', '2-3')}
      playingTime={text('Game duration3', '60-120')}
      age={text('Age2', '10+')}
      isExpanded={boolean('Expand/Collapse3', true)}
      onClick={action('onClick3')}
      players={array('Players3', [])}
    />
  </React.Fragment>
))

storiesOf('PlayerCard', module).add('card with text', () => (
  <React.Fragment>
    {/* <StyleBox h={400} /> */}
    <PlayerCard
      name={text('Player name', 'Chris')}
      imgSrc="https://source.unsplash.com/1600x900/?city"
      userName={text('Username', '@chris')}
      isExpanded={boolean('isExpanded', false)}
      onClick={action('onClick')}
      isBookmarked={boolean('isBookmarked', true)}
      onClickBookmark={action('onClickBookmark')}
      games={array('Games', [
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
      ])}
    />
    <PlayerCard
      name={text('Player name2', 'Chris')}
      imgSrc="https://source.unsplash.com/1600x900/?city"
      userName={text('Username2', '@chris')}
      isExpanded={boolean('isExpanded2', true)}
      onClick={action('onClick2')}
      isBookmarked={boolean('isBookmarked2', false)}
      onClickBookmark={action('onClickBookmark2')}
      games={array('Games2', [
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
      ])}
    />
    <PlayerCard
      name={text('Player name3', 'Chris')}
      imgSrc="https://source.unsplash.com/1600x900/?city"
      userName={text('Username3', '@chris')}
      isExpanded={boolean('isExpanded3', true)}
      onClick={action('onClick3')}
      isBookmarked={boolean('isBookmarked3', false)}
      onClickBookmark={action('onClickBookmark3')}
      games={array('Games3', [])}
    />
  </React.Fragment>
))
