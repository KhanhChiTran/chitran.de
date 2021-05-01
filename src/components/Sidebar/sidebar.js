import React from "react";
import GithubIcon from "../../assets/icons/github-brands.svg";
import FacebookIcon from "../../assets/icons/facebook-square-brands.svg";
import LinkedinIcon from "../../assets/icons/linkedin-brands.svg";
import "./sidebar.scss";
function SideBar() {
  return (
    <ul className="side-bar">
      <li className="side-bar_item">
        <a href="https://github.com/KhanhChiTran">
          <GithubIcon className="icon github" />
        </a>
        {/* <span>Github</span> */}
      </li>
      <li className="side-bar_item">
        <FacebookIcon className="icon facebook" />
      </li>
      <li className="side-bar_item">
        <a href="https://www.linkedin.com/in/chi-tran-6393b7204/">
          <LinkedinIcon className="icon linkedin" />
        </a>
      </li>
    </ul>
  );
}

export default SideBar;
