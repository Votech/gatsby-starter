import React from "react"
import { Link } from "gatsby"

import { StyledNavColumn } from "./NavColumn.styled"

const NavColumn = () => {
  return (
    <StyledNavColumn>
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
    </StyledNavColumn>
  )
}

export default NavColumn
