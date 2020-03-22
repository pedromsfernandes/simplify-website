import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Subscribe from "../components/products/Subscribe"
import Layout from "../components/layout"

import ProductAbout from "../components/products/ProductAbout"
import ProductImages from "../components/products/ProductImages"
import ProductInfo from "../components/products/ProductInfo"

import styles from "./product.module.css"
import BackToProducts from "../components/products/BackToProducts"

export default function Template({ data }) {
  const { markdownRemark: product } = data

  return (
    <Layout headerClassName={styles.background}>
      <SEO title={product.frontmatter.name} />
      <div className={[styles.background, "pt-4"].join(" ")}>
        <BackToProducts />
        <ProductAbout
          name={product.frontmatter.name}
          image={product.frontmatter.main_image.childImageSharp.fluid}
          about={product.frontmatter.about}
        />
        <ProductImages images={product.frontmatter.carousel} />
        <ProductInfo info={product.html} />
        <Subscribe />
      </div>
    </Layout>
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
