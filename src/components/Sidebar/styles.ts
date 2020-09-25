import styled from 'styled-components'

export const Container = styled.aside`
  background: #edeff1;
  grid-area: sidebar;
  overflow: hidden;

  padding: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;

    &.sidebar-on {
      display: block;

      position: relative;
      width: 100vw;
      height: 100vh;
      background: #a265e9;

      z-index: 10;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border: none;
  border-radius: 50%;
`

export const Name = styled.span`
  font-size: 1.6rem;
  color: #464646;
  font-weight: 500;
  margin-top: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    color: #fff;
  }
`

export const Actions = styled.div`
  padding: 20%;

  display: flex;
  flex: 1;
  justify-content: center;
`

export const Logout = styled.button`
  width: auto;
  height: auto;

  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 20px;
  background: #d42a59;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-weight: 700;
  color: #fff;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background: #ba274e;
  }
`
