import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>About Us</h1>
      <p></p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
