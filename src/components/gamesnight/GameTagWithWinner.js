import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  align-items: center;
  height: 110px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  padding-top: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  background-blend-mode: lighten;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`

const Title = styled.div`
  background: #fefefe;
  padding: 10px 10px 10px 20px;
  border-radius: 0 5px 5px 0;
  font-weight: bold;
  /* letter-spacing: 0.05em; */
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  padding: 20px 10px 0 10px;
  align-items: center;
`

const SelectWinner = styled.select`
  border: none;
  border-radius: 0 5px 5px 0;
  color: #333;
  font-size: 1em;
  padding: 10px;

  width: 100%;
`

const Icon = styled.div`
  background: #eaeaea;
  padding: 10px;
  border-radius: 5px 0 0 5px;
`

export default class GameTag extends Component {
  handleChange = event => {
    this.props.addWinnerToGame(event.target.id, event.target.value)
  }

  render() {
    const { id, title } = this.props
    return (
      <Wrapper
        data-cy="GameTagWithWinner"
        style={{
          backgroundImage: `url(${this.props.imgScr})`
        }}
      >
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Container>
          <Icon>
            <FontAwesomeIcon icon="trophy" />
          </Icon>
          <SelectWinner
            data-cy={'SelectWinner' + id}
            id={id}
            onChange={this.handleChange}
          >
            {this.renderAllOptionsForSelect()}
          </SelectWinner>
        </Container>
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
