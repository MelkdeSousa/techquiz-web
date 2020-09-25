import React, { useCallback, useState, useEffect } from 'react'

import { IPageProps } from '../../@types'

import Header from '../Header'
import Sidebar from '../Sidebar'

import { Container, Main } from './styles'

const Page: React.FC<IPageProps> = ({ titlePage, children }) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [menu, setMenu] = useState<Element | null>(null)
  const [sidebar, setSidebar] = useState<Element | null>(null)

  const toggleMenuAndSidebar = useCallback(() => {
    menu?.addEventListener('click', () => {
      sidebar?.classList.toggle('sidebar-on')
      menu?.classList.toggle('menu-on')
    })
  }, [menu, sidebar])

  useEffect(() => {
    const { current: divContainer } = ref

    if (divContainer) {
      setMenu(divContainer.querySelector('#menu'))
      setSidebar(divContainer.querySelector('#sidebar'))
    }

    toggleMenuAndSidebar()
  }, [menu, sidebar, toggleMenuAndSidebar])

  return (
    <Container id="page-container" ref={ref}>
      <Header title={titlePage} />
      <Sidebar />
      <Main>{children}</Main>
    </Container>
  )
}

export default Page
