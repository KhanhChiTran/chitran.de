import React from "react"
import Header from "../components/Header/header.component"

export default function LayOut({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
