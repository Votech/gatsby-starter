import React from "react"
import { Link } from "gatsby"

import { StyledNav } from "./Nav.styled"

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
