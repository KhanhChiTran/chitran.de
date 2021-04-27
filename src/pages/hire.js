import React from "react";
import Layout from "../components/Layout/layout";
export default function hire({ location }) {
  console.log(location);
  return (
    <Layout location={location}>
      <h1>loading...</h1>
    </Layout>
  );
}
