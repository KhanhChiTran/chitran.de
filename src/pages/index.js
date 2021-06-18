import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { BoxCenter, RedPunkt } from "../components/Share/boxcenter";
import girl3 from "../../static/girl3.svg";

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
        <div>
          <h2>
            Hello <RedPunkt>.</RedPunkt>
          </h2>
          <h2>I'm Chi Tran</h2>
          <p> Web Developer</p>
        </div>
        <div>
          <img src={girl3} alt="" width="500px" />
        </div>
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
