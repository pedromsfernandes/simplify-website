import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "../styles/media-kit.module.css"

import Download from "../components/media-kit/Download"
import Yumpu from "../components/media-kit/Yumpu"

const MediaKitPage = () => (
  <Layout>
    <div className={styles.page}>
      <Container>
        <SEO title="Press" />
        <Row className="justify-content-center align-items-center">
          <Col xs="8">
            <h1 className="main-title text-center pt-5">Press</h1>
            <p className="text-center pt-2">
              Hello journalists and media professionals! Here is everything you
              need to put your story together or use our brand and assets,
              including our logo.
            </p>
            <p className="text-center pt-2 mb-0">
              If you got any questions or want to request extra materials,
              please contact us at
            </p>
            <p className="mail text-center font-weight-bold pt-0">
              <a
                href="mailto:press@simplify-lgp.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                press@simplify-lgp.tech
              </a>
            </p>
          </Col>
        </Row>
        <Download />
      </Container>
      <Yumpu />
    </div>
  </Layout>
)

export default MediaKitPage
