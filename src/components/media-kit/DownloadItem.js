import React from "react"
import { Row, Col } from "react-bootstrap"
import Arrow from "../../images/download-icon.png"

import styles from "../../styles/media-kit.module.css"

const DownloadItem = ({ file, title, description }) => (
  <a href={file.publicURL} download className={styles.item}>
    <div className="media-card py-5 px-3">
      <Row className="text-center">
        <Col
          md="3"
          className="d-flex align-items-center justify-content-center pr-0"
        >
          <img src={Arrow} alt="download" />
        </Col>
        <Col md="8">
          <p className="title text-left">{title}</p>
          <p className="text text-left">{description}</p>
        </Col>
      </Row>
    </div>
  </a>
)

export default DownloadItem
