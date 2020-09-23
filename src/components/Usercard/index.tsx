import React from 'react'

import {
  Container,
  Avatar,
  Image,
  Name,
  Text,
  TechList,
  Tech,
  TechCircle,
} from './styles'

const Usercard: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <Image src="https://api.adorable.io/avatars/285/crazy@adorable.io" />
        <Name>Adorable Crazy</Name>
      </Avatar>

      <Text>Scores</Text>

      <TechList>
        <Tech>
          Python
          <TechCircle color="#E65B5B" />
        </Tech>
        <Tech>
          Javascript
          <TechCircle color="#6B71F5" />
        </Tech>
        <Tech>
          Docker
          <TechCircle color="#FFF468" />
        </Tech>
        <Tech>
          Linux
          <TechCircle color="#F17AC2" />
        </Tech>
        <Tech>
          DevOps
          <TechCircle color="#59DF6E" />
        </Tech>
      </TechList>
    </Container>
  )
}

export default Usercard
