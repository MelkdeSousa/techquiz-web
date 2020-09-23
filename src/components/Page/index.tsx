import React from 'react'

import { IPageProps } from '../../@types'

import Header from '../Header'
import Sidebar from '../Sidebar'

import { Container, Main } from './styles'

const Page: React.FC<IPageProps> = ({ titlePage, children }) => {
  return (
    <Container>
      <Header title={titlePage} />
      <Sidebar />
      <Main>{children}</Main>
    </Container>
  )
}

export default Page
