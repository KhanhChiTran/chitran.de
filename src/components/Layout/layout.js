import * as React from "react";
import { Link } from "gatsby";
import Header from "../Header/header";
import SideBar from "../Sidebar/sidebar";
import "./layout.scss";
import girl4 from "../../../static/girl4.svg";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      <SideBar />
      <footer style={{ textAlign: "center" }}>
        {/* <div className="circle"></div> */}© {new Date().getFullYear()}. Made
        by{" "}
        <a target="__blank" href="https://www.chitran.de">
          ChiTran
        </a>{" "}
        <br />
        Built with{" "}
        <a target="__blank" href="https://www.gatsbyjs.org">
          Gatsby
        </a>{" "}
        <br />
        Deployed with{" "}
        <a target="__blank" href="https://www.netlify.com">
          Netlify
        </a>
      </footer>
    </div>
  );
};

export default Layout;
