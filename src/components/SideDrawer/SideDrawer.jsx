import React from "react"

import { StyledSideDrawer } from "./SideDrawer.styled"

import NavColumn from "../NavColumn/NavColumn"

const SideDrawer = ({ open }) => {
  return (
    <StyledSideDrawer open={open}>
      <NavColumn />
    </StyledSideDrawer>
  )
}

export default SideDrawer
