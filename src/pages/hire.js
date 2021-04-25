import React from "react";
import Layout from "../components/layout";

export default function hire({ location }) {
  console.log(location);
  return <Layout location={location}>Hire Me!</Layout>;
}
