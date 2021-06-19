/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";

const Header = () => {
  const [overlay, setOverlay] = useState(false);
  const [hidden, setHidden] = useState(false);

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
        <Link to="/about/" activeClassName="active">
          About
        </Link>
        <Link to="/projects/" activeClassName="active">
          Projects
        </Link>

        <Link to="/contact/" activeClassName="active">
          {" "}
          Contact Me
        </Link>
      </nav>
      <div
        onClick={() => setOverlay(true)}
        className={`normal ${overlay && "overlay"}`}
      >
        {!overlay ? (
          <div className="burger-menu">
            {" "}
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <div>
            <div className="delete" onClick={() => setHidden(true)}>
              X
            </div>

            <div className="overlay-menu">
              <Link className="overlay-menu-link" to="/">
                Home
              </Link>
              <Link className="overlay-menu-link" to="/about/">
                About
              </Link>
              <Link className="overlay-menu-link" to="/projects/">
                Projects
              </Link>
              <Link className="overlay-menu-link" to="/contact/">
                {" "}
                Contact Me
              </Link>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
