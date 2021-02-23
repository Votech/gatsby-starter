import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { StyledLogo } from "./Logo.styled"

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "assets/images/logo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <StyledLogo>
          <Img fluid={data.file.childImageSharp.fluid} />
        </StyledLogo>
      )}
    />
  )
}

export default Logo
