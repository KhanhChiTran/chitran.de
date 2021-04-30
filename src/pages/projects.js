import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
export default function projects({ location }) {
  return (
    <Layout location={location}>
      <SEO title="My Own Projects" />
      <h1>loading...</h1>
    </Layout>
  );
}
