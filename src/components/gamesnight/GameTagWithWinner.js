import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  align-items: center;
  background: #eaeaea;
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  padding: 10px;
`

const Title = styled.div`
  grid-column-start: span 2;
`

const SelectWinner = styled.select`
  border: none;
  color: #333;
  font-size: 1em;
  padding: 10px;
`

export default class GameTag extends Component {
  handleChange = event => {
    this.props.addWinnerToGame(event.target.id, event.target.value)
  }

  render() {
    const { id, title } = this.props
    return (
      <Wrapper data-cy="GameTagWithWinner">
        <Title>{title}</Title>
        <FontAwesomeIcon icon="trophy" />
        <SelectWinner
          data-cy={'SelectWinner' + id}
          id={id}
          onChange={this.handleChange}
        >
          {this.renderAllOptionsForSelect()}
        </SelectWinner>
      </Wrapper>
    )
  }

  renderAllOptionsForSelect() {
    const defaultOption =
      this.props.winnerId === ''
        ? [
            <option value="" selected>
              Choose winner here
            </option>
          ]
        : [<option value="">Choose winner here</option>]

    const playerOptions = this.props.players
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleOption)

    return defaultOption.concat(playerOptions)
  }

  renderSingleOption = player =>
    player.id === this.props.winnerId ? (
      <option value={player.id} selected>
        {player.name}
      </option>
    ) : (
      <option value={player.id}>{player.name}</option>
    )
}
