import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import Container from "react-bootstrap/Container"

import styles from "../styles/products.module.css"

import Overall from "../components/products/Overall.js"

const ProductsPage = () => (
  <Layout>
    <div className={styles.page}>
      <Container>
        <SEO title="Products" />
        <h1 className="main-title text-center pt-5">Our Products</h1>
        <Overall />
      </Container>
    </div>
  </Layout>
)

export default ProductsPage
