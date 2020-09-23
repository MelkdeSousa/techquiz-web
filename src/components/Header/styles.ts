import styled from 'styled-components'

export const Container = styled.header<{ background?: string }>`
  background: ${props => props.background || '#8f40eb'};

  grid-area: header;

  display: flex;
  flex: 1;
  align-items: center;
`

export const Title = styled.h1`
  margin: 10px 20px;
  padding: 5px;

  font-size: 2.5rem;
  color: #fff;
`
