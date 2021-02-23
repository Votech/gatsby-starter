import React from "react"

import { Link } from "gatsby"

import { StyledHeader } from "./Header.styled"

import Burger from "../Burger/Burger"
import NavRow from "../NavRow/NavRow"
import Logo from "../Logo/Logo"

const Header = ({ open, setOpen }) => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <Logo />
        </Link>

        <NavRow />
        <Burger open={open} setOpen={setOpen} />
      </StyledHeader>
    </>
  )
}

export default Header
