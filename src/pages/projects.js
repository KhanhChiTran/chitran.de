import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { BoxCenter, Overlay } from "../components/Share/boxcenter";
import girl6 from "../../static/girl6.svg";
import { ProjectStyling } from "../components/Share/boxcenter";
import ecomWeb from "../../static/shopping-online.svg";
import quiz from "../../static/quiz.svg";
export default function projects({ location }) {
  return (
    <Layout location={location}>
      <SEO title="My Own Projects" />
      <h1 style={{ textAlign: "center" }}>My Works </h1>
      <BoxCenter>
        <div>
          <a href="https://shop.chitran.de/" target="_blank">
            <ProjectStyling>
              <img src={ecomWeb} alt="" width="250px" />
              <Overlay>
                <span>E-Commerce Website</span>
                <p>React</p>
                <p>Redux</p>
                <p>styling</p>
              </Overlay>
            </ProjectStyling>
          </a>{" "}
          <a href="https://quiz.chitran.de/" target="_blank">
            <ProjectStyling>
              <img src={quiz} alt="" width="250px" />
              <Overlay>
                <span>Trivia Game</span>
                <p>React</p>
                <p>Redux</p>
                <p>styling</p>
              </Overlay>
            </ProjectStyling>
          </a>{" "}
        </div>
        <div>
          <img src={girl6} alt="" width="500px" />
        </div>
      </BoxCenter>
    </Layout>
  );
}
