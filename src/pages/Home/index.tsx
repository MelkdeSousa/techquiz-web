import React from 'react'

import Page from '../../components/Page'
import Usercard from '../../components/Usercard'

import { Container, Title, Content } from './styles'

const Home: React.FC = () => {
  return (
    <Page titlePage="Tech Quiz">
      <Container>
        <Title>Users Score</Title>
        <Content>
          <Usercard />
          <Usercard />
          <Usercard />

          <Usercard />
          <Usercard />
          <Usercard />

          <Usercard />
          <Usercard />
          <Usercard />

          <Usercard />
          <Usercard />
          <Usercard />
        </Content>
      </Container>
    </Page>
  )
}

export default Home
