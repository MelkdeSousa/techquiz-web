import React from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'

import { useAuth } from '../../contexts/auth'

import { Container, Image, Profile, Name, Actions, Logout } from './styles'

const Sidebar: React.FC = () => {
  const { logout } = useAuth()

  async function handleLogout() {
    await logout()
  }

  return (
    <Container id="sidebar">
      <Profile>
        <Image src="https://api.adorable.io/avatars/285/melk@adorable.io" />
        <Name>Adorable Melk</Name>
      </Profile>

      <Actions>
        <Logout onClick={handleLogout}>
          <RiLogoutCircleLine color="#fff" size={20} />
          Logout
        </Logout>
      </Actions>
    </Container>
  )
}

export default Sidebar
