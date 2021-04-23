import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Image from "../images/bg-img.jpeg";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const [color, setColor] = React.useState(false);

  const ButtonChange = styled.button`
    padding: 1rem;
    color: blue;
    background-color: ${color ? "red" : "black"};
    border: 1px solid red;
  `;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <img src={Image} width="100%" height="100%" alt="Image" />
    </Layout>
  );
};

export default BlogIndex;

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
