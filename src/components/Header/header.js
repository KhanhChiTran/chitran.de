/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div className="header-wrap">
      <div className="header-logo">
        <Link to="/">
          <h1>CHI</h1>{" "}
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about" activeClassName="active">
          About
        </Link>
        <Link to="/projects" activeClassName="active">
          Projects
        </Link>

        <Link to="/hire" activeClassName="active">
          {" "}
          Hire
        </Link>
      </nav>
    </div>
  );
};

export default Header;
