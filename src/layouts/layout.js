import React from "react"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
// import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"

export default function LayOut({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
