import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"

import styles from "../styles/products.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getAllProducts = data => {
  let products = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    products.push({
      name: node.frontmatter.name,
      description: node.frontmatter.small_description,
      path: node.frontmatter.path,
      image: node.frontmatter.placeholder_image.childImageSharp.fluid,
    })
  })

  return products
}

const ProductsPage = () => {
  const data = useStaticQuery(graphql`
    query getProductAndGetProduct {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/" } }) {
        edges {
          node {
            frontmatter {
              name
              path
              small_description
              placeholder_image {
                publicURL
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
    }
  `)

  const products = getAllProducts(data)

  return (
    products.length > 0 && (
      <Layout>
        <div className={styles.page}>
          <Container>
            <SEO title="Products" />
            <h1 className="main-title text-center pt-5">Our Products</h1>
            <Row className="text-center">
              <Col md="6" className="pt-3">
                <div class="product-card">
                  <Link to={products[0].path}>
                    <Img fluid={products[0].image} alt={products[0].name} />
                    <p className="title text-left pt-1">{products[0].name}</p>
                    <p className="text-left">{products[0].description}</p>
                  </Link>
                </div>
              </Col>
              <Col md="6" className="pt-3">
                <div class="product-card">
                  <Link to={products[1].path}>
                    <Img fluid={products[1].image} alt={products[0].name} />
                    <p className="title text-left pt-1">{products[1].name}</p>
                    <p className="text-left">{products[1].description}</p>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md="6" className="pt-3">
                <div class="product-card">
                  <Link to={products[2].path}>
                    <Img fluid={products[2].image} alt={products[0].name} />
                    <p className="title text-left pt-1">{products[2].name}</p>
                    <p className="text-left">{products[2].description}</p>
                  </Link>
                </div>
              </Col>
              <Col md="6" className="pt-3">
                <div class="product-card">
                  <Link to={products[3].path}>
                    <Img fluid={products[3].image} alt={products[0].name} />
                    <p className="title text-left pt-1">{products[3].name}</p>
                    <p className="text-left">{products[3].description}</p>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  )
}

export default ProductsPage
