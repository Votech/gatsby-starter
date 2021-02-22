import React, { useState, useRef } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import "../../assets/fonts/fonts.css"
import { theme } from "../../utils/theme"
import { useOnClickOutside } from "../../utils/hooks"

import Header from "../Header/Header"
import SideDrawer from "../SideDrawer/SideDrawer"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open sans';
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div ref={node}>
          <Header open={open} setOpen={setOpen} />
          <SideDrawer open={open} setOpen={setOpen} />
        </div>
        <div>{children}</div>
      </>
    </ThemeProvider>
  )
}

export default Layout
