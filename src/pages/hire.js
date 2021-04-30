import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
export default function hire({ location }) {
  console.log(location);
  return (
    <Layout location={location}>
      <SEO title="Looking for a Web Developer?" />
      <h1>loading...</h1>
    </Layout>
  );
}
