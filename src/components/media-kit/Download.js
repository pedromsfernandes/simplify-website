import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Row, Col } from "react-bootstrap"

import DownloadItem from "./DownloadItem"

const MediaDownload = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMediaKitJson {
        edges {
          node {
            description
            title
            file {
              publicURL
            }
          }
        }
      }
    }
  `)

  return (
    <Row className="text-center mt-5">
      {data.allMediaKitJson.edges.map(
        ({ node: { title, description, file } }) => (
          <Col md="4" className="d-flex mt-3">
            <DownloadItem title={title} description={description} file={file} />
          </Col>
        )
      )}
    </Row>
  )
}

export default MediaDownload
