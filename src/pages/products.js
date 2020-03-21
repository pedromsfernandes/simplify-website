import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"

import styles from "../styles/products.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PlaceholderImg from "../images/placeholder.png"

const getAllProducts = data => {
  let products = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    products.push({
      name: node.frontmatter.name,
      description: node.frontmatter.about,
      path: node.frontmatter.path,
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
              about
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
                    <img src={PlaceholderImg} alt={products[0].name} />
                    <p className="title text-left pt-1">{products[0].name}</p>
                    <p className="text-justify">{products[0].description}</p>
                  </Link>
                </div>
              </Col>
              <Col md="6" className="pt-3">
                <div class="product-card">
                  <Link to={products[1].path}>
                    <img src={PlaceholderImg} alt={products[1].name} />
                    <p className="title text-left pt-1">{products[1].name}</p>
                    <p className="text-justify">{products[1].description}</p>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md="6" className="pt-3">
                <div class="product-card">
                  <Link to={products[2].path}>
                    <img src={PlaceholderImg} alt={products[2].name} />
                    <p className="title text-left pt-1">{products[2].name}</p>
                    <p className="text-justify">{products[2].description}</p>
                  </Link>
                </div>
              </Col>
              <Col md="6" className="pt-3">
                <div class="product-card">
                  <Link to={products[3].path}>
                    <img src={PlaceholderImg} alt={products[3].name} />
                    <p className="title text-left pt-1">{products[3].name}</p>
                    <p className="text-justify">{products[3].description}</p>
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
