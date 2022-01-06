/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
// import {  FiExternalLink } from 'react-icons/fi';
import logo from "../images/logo1.png";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img src={logo} alt="logo" />
        <p>
          <Link smooth to="/#start" className="h1_links">
            Welcome !
          </Link>
        </p>
        <p
          style={{ color: "#3199ed", fontWeight: "bold", fontSize: "1em" }}
          className="gmail"
        >
          {"sathirauo@gmail.com"}
        </p>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/react-portfolio/#empty" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/react-portfolio/#about" className="links">
              Experience
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/react-portfolio/#interest" className="links">
              Projects
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              <a
                href="www.google.com"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/sathirafdo"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-github fa-lg"
              ></a>
            </li>

            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:sathirauogmail.com"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-envelope fa-lg"
              ></a>
            </li>
            {/* <li className="sidebar-nav-icons">
              {" "}
              <a
                href="www.google.com"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-hackerrank fa-lg"
              ></a>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
//TODO add hackerank link
export default Sidebar;
