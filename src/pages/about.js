import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";

import styled from "styled-components";

const About = ({ location }) => {
  console.log(location);
  return (
    <Layout location={location}>
      <h1>About Page</h1>
    </Layout>
  );
};
export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
