import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import Container from "react-bootstrap/Container"

import styles from "../styles/media-kit.module.css"

import Download from "../components/media-kit/Download.js"

const MediaKitPage = () => (
  <Layout>
    <div className={styles.page}>
      <Container>
        <SEO title="Media Kit" />
        <h1 className="main-title text-center pt-5">Media Kit</h1>
        <p className="text-center pt-2">
          Hello jornalist and media professionals! Here is everything you need
          to put your story together or use our brand and assets, including our
          logo.
        </p>
        <p className="text-center pt-2 mb-0">
          If you got any questions or want to request extra materials, please
          contact us at
        </p>
        <p className="mail text-center font-weight-bold pt-0">
          press@simplify-lgp.tech
        </p>
        <Download />
      </Container>
    </div>
  </Layout>
)

export default MediaKitPage
