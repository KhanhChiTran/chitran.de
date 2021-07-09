import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { BoxCenter, Overlay } from "../components/Share/boxcenter"
import girl6 from "../../static/girl6.svg"
import { ProjectStyling, TextWrap } from "../components/Share/boxcenter"
import ecomWeb from "../../static/shopping-online.svg"
import quiz from "../../static/quiz.svg"
import weather from "../../static/weather.svg"
import todo from "../../static/todo.svg"
export default function projects({ location }) {
  return (
    <Layout location={location}>
      <SEO title="My Own Projects" />

      <h2 style={{ textAlign: "center", marginTop: "60px" }}>My Works </h2>
      <BoxCenter marginTop="0px">
        <div>
          <ProjectStyling>
            <img src={ecomWeb} alt="" />
            <Overlay>
              <p>React</p>
              <p>Context API</p>
              <p>Material UI</p>
            </Overlay>
          </ProjectStyling>
          <a href="https://shop.chitran.de/" target="_blank">
            E-Commerce Website
          </a>
          <ProjectStyling>
            <img src={quiz} alt="" />
            <Overlay>
              <p>Redux</p>
              <p>Redux-Thunk</p>
              <p>Styled-Component</p>
            </Overlay>
          </ProjectStyling>
          <a href="https://quiz.chitran.de/" target="_blank">
            Trivia Game
          </a>{" "}
        </div>
        <div>
          <ProjectStyling>
            <img src={todo} alt="" />
            <Overlay>
              <p>MongoDB</p>
              <p>Lambda functions</p>
              <p>React</p>
            </Overlay>
          </ProjectStyling>
          <a href="https://moviebay.chitran.de/" target="_blank">
            Movie bay
          </a>{" "}
          <ProjectStyling>
            <img src={weather} alt="" />
            <Overlay>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </Overlay>
          </ProjectStyling>
          <a href="https://chitran-weatherapp.netlify.app/" target="_blank">
            Weather App
          </a>{" "}
        </div>
      </BoxCenter>
    </Layout>
  )
}
