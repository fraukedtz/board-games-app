import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  align-items: center;
  background-blend-mode: lighten;
  background-color: rgba(255, 255, 255, 0.2);
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  height: 110px;
  padding-top: 10px;
`
const TitleContainer = styled.div`
  align-items: center;
  display: flex;
`

const Title = styled.div`
  background: #fefefe;
  border-radius: 0 5px 5px 0;
  padding: 10px 10px 10px 20px;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 20px 10px 0 10px;
`
const Icon = styled.div`
  background: #eaeaea;
  border-radius: 5px 0 0 5px;
  padding: 10px;
`

const SelectWinner = styled.select`
  border: none;
  border-radius: 0 5px 5px 0;
  color: #333;
  font-size: 1em;
  padding: 10px;
  width: 100%;
`

export default class GameTag extends Component {
  handleChange = event => {
    this.props.addWinnerToGame(event.target.id, event.target.value)
  }

  render() {
    const { id, title, imgSrc } = this.props
    return (
      <Wrapper
        data-cy="GameTagWithWinner"
        style={{
          backgroundImage: `url(${imgSrc})`
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
      .slice()
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
