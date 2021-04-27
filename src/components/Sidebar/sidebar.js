import React from "react";
import GithubIcon from "../../assets/icons/github-brands.svg";
import FacebookIcon from "../../assets/icons/facebook-square-brands.svg";
import LinkedinIcon from "../../assets/icons/linkedin-brands.svg";
import "./sidebar.scss";
function SideBar() {
  return (
    <ul className="side-bar">
      <li className="side-bar_item">
        <GithubIcon className="icon github" />
        {/* <span>Github</span> */}
      </li>
      <li className="side-bar_item">
        <FacebookIcon className="icon facebook" />
      </li>
      <li className="side-bar_item">
        <LinkedinIcon className="icon linkedin" />
      </li>
    </ul>
  );
}

export default SideBar;
