import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  align-items: center;
  background: #eaeaea;
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto 2fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  padding: 10px;
`

const Title = styled.div`
  grid-column-start: span 2;
`

export default class GameTag extends Component {
  render() {
    const { title } = this.props
    return (
      <Wrapper>
        <Title>{title}</Title>
        <FontAwesomeIcon icon="trophy" />
        <select>
          <option value="" selected>
            Choose winner here
          </option>
          {this.renderAllOptionsForSelect()}
        </select>
      </Wrapper>
    )
  }

  renderAllOptionsForSelect() {
    return this.props.players
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleOption)
  }

  renderSingleOption = player => (
    <option value={player.id}>{player.name}</option>
  )
}
