import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import MemberImage from "../MemberImage/MemberImage.js"

const TeamGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "team" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 160, height: 160) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const images = [
    ...data.allFile.edges,
    ...data.allFile.edges,
    ...data.allFile.edges,
    ...data.allFile.edges,
    ...data.allFile.edges,
    ...data.allFile.edges,
  ]

  return (
    <Container>
      <Row>
        {images.map(image => (
          <Col>
            <MemberImage image={image} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TeamGallery
