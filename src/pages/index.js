import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Simplify your projects for better business</h1>
    <p>
      We are a multidisciplinary company that can help you to find a quick and
      easy way to solve any burden of your everyday tasks using technology and
      multimedia.
    </p>
    <Link to="/team/">Go to team</Link>
  </Layout>
)

export default IndexPage
