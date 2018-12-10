import React, { Component } from 'react'

import styled from 'styled-components'

const StyledInput = styled.input`
  border: 2px solid #eaeaea;
  border-radius: 5px;
  font-size: 1em;
  margin: 10px 20px;
  padding: 0 10px;
`

export default class Input extends Component {
  handleKeyUp = event => {
    this.props.setSearchQuery(this.props.id, event.target.value)
  }

  render() {
    return (
      <StyledInput
        data-cy="Input"
        onKeyUp={this.handleKeyUp}
        placeholder={this.props.text}
      />
    )
  }
}
