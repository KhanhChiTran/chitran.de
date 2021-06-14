import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { BoxCenter, RedPunkt } from "../components/Share/boxcenter";

// import { Button } from "luly"

// console.log(Button)

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
      <SEO title="Home" />
      <BoxCenter>
        <h2>
          Hello <RedPunkt>.</RedPunkt>
        </h2>
        <h2>I'm Chi Tran</h2>
        <p> a Web Developer</p>
        {/* <h1>Working on </h1>
        <a href="https://shop.chitran.de/" target="_blank">
          Shop Demo : https://shop.chitran.de/
        </a>{" "}
        <hr style={{ maxWidth: 200, padding: 3, backgroundColor: "red" }} />
        <a href="https://quiz.chitran.de/" target="_blank">
          Quiz Game : https://quiz.chitran.de/
        </a>{" "} */}
      </BoxCenter>
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
