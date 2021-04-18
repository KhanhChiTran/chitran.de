import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../layouts/layout";

// const query = graphql`
// query(${slug}: String! )`;
export default function BlogTemplate(props) {
  console.log(props);
  return (
    <Layout>
      <h1>Blog</h1>
    </Layout>
  );
}
