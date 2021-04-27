import React, { useEffect } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import styled from "styled-components";

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
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
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
