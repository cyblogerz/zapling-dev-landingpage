import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle`
  html {
    background-color: black;
  }

  body {
    font-family: Manrope, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue';
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }
`

export default GlobalStyle
