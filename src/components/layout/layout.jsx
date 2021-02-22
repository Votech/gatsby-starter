import React from "react"
import { createGlobalStyle } from "styled-components"

import "../../assets/fonts/fonts.css"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'Open sans';
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
