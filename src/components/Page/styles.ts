import styled from 'styled-components'

export const Container = styled.div`
  background: #e2e2e2;

  display: grid;
	grid-template-columns: 15vw auto;
	grid-template-rows: auto 100vh;
  grid-template-areas: 
  	'header header'
  	'sidebar main'
  ;
`

export const Main = styled.div`
	grid-area: main;

	display: flex;
	flex: 1;
`
