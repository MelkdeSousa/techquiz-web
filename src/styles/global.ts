import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Ubuntu, sans-serif;
    outline: none;
    font-size: 10px;
  }

  html, body, #root {
    height: 100vh;
    overflow: hidden;
  }
`
