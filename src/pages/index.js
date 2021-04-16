import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hi there!</h1>
      <h3>I'm ChiTran, a web developer from Berlin.</h3>
      <p>
        Need a Developer? <Link to="/contact">Contact me!</Link>{" "}
      </p>
    </Layout>
  )
}
