import React from "react"
import LayOut from "../layouts"
import { Link } from "gatsby"

export default function Home({ navigate }) {
  return (
    <LayOut>
      Hello from Index
      <button>
        <Link to="/hello"> Go to Hello </Link>
      </button>
    </LayOut>
  )
}
