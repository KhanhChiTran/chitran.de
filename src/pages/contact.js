import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { BoxCenter, RedPunkt, TextWrap } from "../components/Share/boxcenter";
import girl from "../../static/girl6.svg";
export default function contact({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Looking for a Web Developer?" />
      <TextWrap>
        <h2 style={{ textAlign: "center" }}>
          Contact <RedPunkt>.</RedPunkt> Me
        </h2>
        <p style={{ textAlign: "center" }}>khanhchi.tran13051@gmail.com</p>
        <img src={girl} alt="" width="500px" />
      </TextWrap>
    </Layout>
  );
}
