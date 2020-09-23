import React from 'react'

import { IHeaderProps } from '../../@types'

import { Container, Title } from './styles'

const Header: React.FC<IHeaderProps> = ({ title, background }) => {
  return (
    <Container background={background}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Header
