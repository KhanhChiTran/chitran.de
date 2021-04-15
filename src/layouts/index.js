import React from "react"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"

import "./hi.scss"
export default function LayOut({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
