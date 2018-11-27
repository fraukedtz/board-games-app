import React, { Component } from 'react'

import Header from '../Header'

export default class PlayGroupScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'My Play Group'} />
        This is my play group
      </React.Fragment>
    )
  }
}
