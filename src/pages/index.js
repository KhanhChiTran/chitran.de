import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Layout from "../layouts"

export default function IndexPage() {
  return (
    <Layout>
      <Header />
      <h1>Hi there!</h1>
      <h3>I'm ChiTran, a web developer from Berlin.</h3>
      <p>
        Need a Developer? <Link to="/contact">Contact me!</Link>{" "}
      </p>
      <Footer />
    </Layout>
  )
}
