import React from "react"
import { Link } from "gatsby"

import { StyledNavRow } from "./NavRow.styled"

const NavRow = () => {
  return (
    <StyledNavRow>
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
    </StyledNavRow>
  )
}

export default NavRow
