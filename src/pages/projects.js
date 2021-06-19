import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { BoxCenter, Overlay } from "../components/Share/boxcenter";
import girl6 from "../../static/girl6.svg";
import { ProjectStyling } from "../components/Share/boxcenter";
import ecomWeb from "../../static/shopping-online.svg";
import quiz from "../../static/quiz.svg";
import weather from "../../static/weather.svg";
import todo from "../../static/todo.svg";
export default function projects({ location }) {
  return (
    <Layout location={location}>
      <SEO title="My Own Projects" />
      <h2 style={{ textAlign: "center" }}>My Works </h2>
      <BoxCenter>
        <div>
          <ProjectStyling>
            <img src={ecomWeb} alt="" />
            <Overlay>
              <p>React</p>
              <p>Context API</p>
              <p>Material UI</p>
              <a href="https://quiz.chitran.de/" target="_blank">
                Go to E-Commerce Website
              </a>
            </Overlay>
          </ProjectStyling>

          <ProjectStyling>
            <img src={quiz} alt="" />
            <Overlay>
              <p>Redux</p>
              <p>Redux-Thunk</p>
              <p>Styled-Component</p>
              <a href="https://quiz.chitran.de/" target="_blank">
                Go to Trivia Game
              </a>{" "}
            </Overlay>
          </ProjectStyling>
        </div>
        <div>
          <ProjectStyling>
            <img src={todo} alt="" />
            <Overlay>
              <p>Redux</p>
              <p>Redux-Thunk</p>
              <p>Styled-Component</p>
              <a href="https://quiz.chitran.de/" target="_blank">
                Go to Todo App
              </a>{" "}
            </Overlay>
          </ProjectStyling>

          <ProjectStyling>
            <img src={weather} alt="" />
            <Overlay>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <a href="https://chitran-weatherapp.netlify.app/" target="_blank">
                Go to Weather App
              </a>{" "}
            </Overlay>
          </ProjectStyling>
        </div>
      </BoxCenter>
    </Layout>
  );
}
