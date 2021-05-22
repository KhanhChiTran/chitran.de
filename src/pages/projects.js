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
        <a href="https://shop.chitran.de/" target="_blank">
          Shop Demo : https://shop.chitran.de/
        </a>{" "}
        <hr style={{ maxWidth: 200, padding: 3, backgroundColor: "red" }} />
        <a href="https://quiz.chitran.de/" target="_blank">
          Quiz Game : https://quiz.chitran.de/
        </a>{" "}
      </BoxCenter>
    </Layout>
  )
}
