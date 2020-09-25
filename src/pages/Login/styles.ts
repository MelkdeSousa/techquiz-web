import styled from 'styled-components'
import { Link as DomLink } from 'react-router-dom'

export const Container = styled.div`
  background: #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Form = styled.form`
  background: #8f40eb;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    ' . . . link link'
    '. . logo . .';
  grid-row-gap: 1rem;
`

export const Image = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  grid-area: logo;
`

export const Link = styled(DomLink)`
  text-decoration: none;
  
  color: #eaeaea;
  font-family: Ubuntu;
  font-size: 1.4rem;
  font-weight: 500;

  grid-area: link;

  display: flex;
  justify-content: center;
  align-content: center;
`

export const Input = styled.input`
  height: 5rem;
  margin: 1rem;
  background: #edeff1;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  transition: box-shadow 0.2s;
  font-family: Ubuntu;
  font-size: 1.4rem;
  font-weight: 500;
  color: #3573ac;

  &::placeholder {
    color: #9abcdb;
  }

  &:focus {
    box-shadow: 0 0.5rem 0 0 #8228eb;
  }
`

export const Button = styled.button`
  background: #eaeaea;
  border-radius: 1rem;

  color: #8f40eb;
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 2.4rem;
  border: none;
  padding: 0.3rem 1.2rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f2f2f2;
  }
`
