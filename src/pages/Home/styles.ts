import styled from 'styled-components'

export const Container = styled.div`
  padding: 8vh 10vw;
  overflow: scroll;

  transition: all 0.3s;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 780px) {
    padding: 0;
  }
`

export const Title = styled.h1`
  font-size: 3.6rem;
  color: #353535;
  font-weight: 700;
`

export const Content = styled.div`
  max-width: 70vw;
  padding-bottom: 20vh;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 4vh;
`
