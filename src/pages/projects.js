import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { BoxCenter } from "../components/Share/boxcenter"
export default function projects({ location }) {
  return (
    <Layout location={location}>
      <SEO title="My Own Projects" />
      <BoxCenter>
        <h1>Working on </h1>
        <a href="https://chitran-shop-demo.netlify.app/">Shop Demo</a>{" "}
      </BoxCenter>
    </Layout>
  )
}
