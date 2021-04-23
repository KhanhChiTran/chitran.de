/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #e1e0fc;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

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
    <HeaderWrap>
      <HeaderNav>
        <Link to="/"> ChiTran</Link>
        <Link to="/about">About</Link>
      </HeaderNav>
    </HeaderWrap>
  );
};

export default Header;
