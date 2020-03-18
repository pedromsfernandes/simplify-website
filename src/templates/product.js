import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Subscribe from "../components/products/Subscribe"
import Img from "gatsby-image"

export default function Template({ data }) {
  const { markdownRemark: product } = data

  return (
    <>
      <SEO title={product.frontmatter.name} />
      <div>{product.frontmatter.name}</div>
      <div>{product.frontmatter.about}</div>
      <div dangerouslySetInnerHTML={{ __html: product.html }}></div>
      <Img fluid={product.frontmatter.main_image.childImageSharp.fluid} />
      <Subscribe />
    </>
  )
}

export const productQuery = graphql`
  query getProduct($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        name
        path
        about
        main_image {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        carousel {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
