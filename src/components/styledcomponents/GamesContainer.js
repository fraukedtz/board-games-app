import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-gap: ${props => props.gap || 20}px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 10px 0 10px 0;
`
