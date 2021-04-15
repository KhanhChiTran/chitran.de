import React from "react"
import Header from "../components/Header/header"
import "./hi.scss"
export default function LayOut({ children }) {
  console.log("layout rerendering...")
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
