import styled from 'styled-components'
import { BsFillCircleFill } from 'react-icons/bs'

export const Container = styled.div`
  background: #edeff1;

  padding: 2.4rem;
  border: none;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const Image = styled.img`
  width: 6.4rem;
  height: 6.4rem;

  border-radius: 50%;
  border: 0.2rem solid #e2e2e2;
`

export const Name = styled.h2`
  color: #464646;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0.5rem;
`

export const Text = styled.h3`
  color: #545454;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 0 0.8rem;
`

export const TechList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0.5vw 0.5vh;
`

export const Tech = styled.li`
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  color: #464646;

  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

export const TechCircle = styled(BsFillCircleFill)`
  margin: 0 0.5vw;
`
