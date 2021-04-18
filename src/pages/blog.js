import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../layouts/layout";
export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>My Blog</h1>

      {data.allMarkdownRemark.nodes.map((node, i) => {
        return (
          <div key={i}>
            <Link to={`/blog/${node.fields.slug}`}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}
