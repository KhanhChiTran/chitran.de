import * as React from "react";
import { Link } from "gatsby";
import Header from "./header";
import GithubIcon from "../assets/icons/github-brands.svg";
import FacebookIcon from "../assets/icons/facebook-square-brands.svg";
import LinkedinIcon from "../assets/icons/linkedin-brands.svg";
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

      <ul className="side-bar">
        <li className="side-bar_item">
          <GithubIcon className="icon" />
          {/* <span>Github</span> */}
        </li>
        <li className="side-bar_item">
          <FacebookIcon className="icon" />
        </li>
        <li className="side-bar_item">
          <LinkedinIcon className="icon" />
        </li>
      </ul>

      <div className="circle"></div>
      <footer>© {new Date().getFullYear()}, by ChiTran</footer>
    </div>
  );
};

export default Layout;
