import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyle'

addDecorator(story => (
  <div>
    {story()}
    <GlobalStyle />
  </div>
))

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
