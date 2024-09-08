import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import girl4 from "../../static/girl4.svg";

import {
  Button,
  RedPunkt,
  TextWrap,
  SvgAbout,
} from "../components/Share/boxcenter";

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title='About' />
      <TextWrap>
        <h2>
          About Me <RedPunkt>.</RedPunkt>
        </h2>
        <p>
          I'm a Frontend Engineer, a Chinese Teacher, living in Berlin, Germany.
          {"<code/>"}
          <br />
          <RedPunkt>.</RedPunkt> I started my coding journey almost exactly a
          year ago and now I'm learning full time and doing freelance projects
          on the side for my friends. I love combining the world of logic and
          beautiful design to make intuitive and functional websites.
          <br /> <RedPunkt>.</RedPunkt> Technology is undeniably important to
          our life. I enjoy seeing the results of my efforts helping the user's
          experience in the future. I'm excited to make the leap and continue
          refining my skills with the right company.
          <br /> <RedPunkt>.</RedPunkt> Frontend: JavaScript, TypeScript, React.js, Next.js
          <br /> <RedPunkt>.</RedPunkt>  Backend: Java  with Java Spring Boot, Expressjs and Nextjs     
        </p>
        <Button>
          <a href='/chitran.de.pdf'>Download My CV</a>
        </Button>
        <Button>
          <Link to='/projects'>My Projects</Link>
        </Button>
      </TextWrap>
      <SvgAbout>
        <img src={girl4} alt='' style={{ width: "100%", maxWidth: "500px" }} />
      </SvgAbout>
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
