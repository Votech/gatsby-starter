import React from "react"

import { StyledSideDrawer } from "./SideDrawer.styled"

import Nav from "../Nav/Nav"

const SideDrawer = ({ open }) => {
  return (
    <StyledSideDrawer open={open}>
      <Nav />
    </StyledSideDrawer>
  )
}

export default SideDrawer
