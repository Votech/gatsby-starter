import React from "react"

import { StyledHeader } from "./Header.styled"

import Burger from "../Burger/Burger"

const Header = ({ open, setOpen }) => {
  return (
    <>
      <StyledHeader>
        <h2>hello, im navbar</h2>
        <Burger open={open} setOpen={setOpen} />
      </StyledHeader>
    </>
  )
}

export default Header
