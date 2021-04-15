import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back to Home page</Link>{" "}
      </p>
    </Layout>
  )
}
