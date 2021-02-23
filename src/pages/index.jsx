import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout/Layout"
import H1 from "../components/H1/H1"
import SEO from "../components/SEO/SEO"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1>Hello</H1>
      <Img
        style={{ maxHeight: "90vh", width: "auto" }}
        fluid={data.file.childImageSharp.fluid}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "assets/images/photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
