import styled from 'styled-components'

export const Container = styled.div`
  overflow: scroll;

  transition: all 0.3s;

  &::-webkit-scrollbar {
    display: none;
  }

  padding: 8vh 10vw;
`

export const Title = styled.h1`
  font-size: 3.6rem;
  color: #353535;
  font-weight: 700;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4vh;
`
