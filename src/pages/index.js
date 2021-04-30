import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const [color, setColor] = React.useState(false);
  console.log(data);
  const ButtonChange = styled.button`
    padding: 1rem;
    color: blue;
    background-color: ${color ? "red" : "black"};
    border: 1px solid red;
  `;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="home-content">
        <h1>Chi Tran</h1>
        <p> Web Developer</p>
      </div>
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
