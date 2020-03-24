import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import MemberImage from "../MemberImage/MemberImage.js"

const TeamGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        nodes {
          name
          course
          role
          img {
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

  return (
    <Container className="pb-5">
      <Row>
        {data.allTeamJson.nodes.map(member => (
          <Col style={{ padding: "5px" }}>
            <MemberImage
              name={member.name}
              image={member.img}
              course={member.course}
              role={member.role}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TeamGallery
