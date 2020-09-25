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

export const Menu = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 30px;

    margin-left: 20px;

    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 6px;

    .one,
    .two,
    .three {
      background: #fff;

      transition-duration: 0.3s;
    }

    &.menu-on .one {
      transform: rotate(45deg) translate(7px, 7px);
    }

    &.menu-on .two {
      opacity: 0;
    }

    &.menu-on .three {
      transform: rotate(-45deg) translate(9px, -9px);
    }
  }
`

export const Logo = styled.img``
