import React from "react"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"
import styles from "./MemberImage.module.css"

const MemberImage = ({ name, image, course }) => {
  const imageStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
  }

  return (
    <Container className={styles.memberImage}>
      <Img
        style={imageStyle}
        fixed={image.childImageSharp.fixed}
        alt={name} // only use section of the file extension with the filename
      />
      <div className={styles.memberInfo}>{name}</div>
      <div className={[styles.memberInfo, styles.memberCourse].join(" ")}>
        {course}
      </div>
    </Container>
  )
}

export default MemberImage
