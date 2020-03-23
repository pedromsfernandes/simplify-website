import React from "react"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"
import styles from "./MemberImage.module.css"

const MemberImage = ({ name, image, course, role }) => {
  const imageStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    filter: "grayscale(100%)",
  }

  return (
    <Container className={styles.memberImage}>
      <Img style={imageStyle} fixed={image.childImageSharp.fixed} alt={name} />
      <div className={styles.memberInfo}>{name} </div>
      <div className={[styles.memberInfo, styles.memberCourse].join(" ")}>
        {course}
        {role !== "" && <span> &#xb7; {role}</span>}
      </div>
    </Container>
  )
}

export default MemberImage
