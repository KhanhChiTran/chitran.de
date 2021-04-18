import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query MyFooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <h1>
        <Link to="/">Created By {data.site.siteMetadata.author}, © 2021</Link>{" "}
      </h1>
    </div>
  )
}
