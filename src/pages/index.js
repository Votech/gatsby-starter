import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"

import styled from "styled-components"

const H1 = styled.h1`
  margin: 0 0 12px 0;
  padding: 0;
  color: blue;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <H1>Hello World</H1>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "assets/images/logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
