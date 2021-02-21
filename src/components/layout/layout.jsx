import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: white;
  }

  h1 {
    margin: 0;
    color: blue;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <div>{children}</div>
  </>
)

export default Layout
