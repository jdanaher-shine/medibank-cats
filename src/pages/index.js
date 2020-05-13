import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cats from "../components/cats";

const IndexPage = () => (
  <Layout>
    <SEO title="Cats only" />
    <h1>Cat only zone</h1>
    <p>Only cats will be listed here.</p>
    <p>We don't even care about their owners' names (only their owners' gender - meow!)</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Cats />

  </Layout>
)

export default IndexPage
