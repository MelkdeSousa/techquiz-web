import React from 'react'

import { IHeaderProps } from '../../@types'

import { Container, Title, Menu, Logo } from './styles'

const Header: React.FC<IHeaderProps> = ({ title, background }) => {
  return (
    <Container id="header" background={background}>
      <Menu id="menu">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </Menu>

      <Title id="title">{title}</Title>
      <Logo />
    </Container>
  )
}

export default Header
