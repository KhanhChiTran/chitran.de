import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Helmet from "react-helmet";

import { Button, RedPunkt, TextWrap } from "../components/Share/boxcenter";

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <TextWrap>
        <h2>About Me</h2>
        <p>
          <h1>
            {" "}
            <RedPunkt>.</RedPunkt>{" "}
          </h1>{" "}
          Hello World! I'm a Web Developer from Berlin, Germany. I used to work
          with languages, but now I work with code.{" "}
          <h1>
            {" "}
            <RedPunkt>.</RedPunkt>{" "}
          </h1>{" "}
          I started my coding journey almost exactly a year ago and now I'm
          learning full time and doing freelance projects on the side for my
          friends. I love combining the world of logic and beautiful design to
          make intuitive and functional websites.{" "}
          <h1>
            {" "}
            <RedPunkt>.</RedPunkt>{" "}
          </h1>{" "}
          Technology is undeniably important to our life. I enjoy seeing the
          results of my efforts helping the user's experience in the future. I'm
          excited to make the leap and continue refining my skills with the
          right company.
        </p>
        <Button>
          <a href="../CHiTRAN CV.docx (1).pdf" download>
            Download My CV
          </a>
        </Button>
        <Button>
          <a href="/projects">My Projects</a>
        </Button>
      </TextWrap>
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
