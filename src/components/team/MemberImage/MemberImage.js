import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"
import styles from "./MemberImage.module.css"

const MemberImage = ({ image }) => {
  const imageStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
  }

  return (
    <Container className={styles.memberImage}>
      <Img
        style={imageStyle}
        fixed={image.node.childImageSharp.fixed}
        alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
      />
      <div className={styles.memberInfo}>{image.node.base.split(".")[0]}</div>
      <div className={[styles.memberInfo, styles.memberCourse].join(" ")}>
        Multimedia Masters
      </div>
    </Container>
  )
}

export default MemberImage
