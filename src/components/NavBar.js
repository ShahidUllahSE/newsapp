import React, { Component } from "react";

import { Link } from "react-router-dom";
const NavBar=()=> {
  
    return (
      <div>
<nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand bg-black" href="/">
            Latest News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home{" "}
                </a>
              </li>

              <li className="nav-item text-white">
                <a className="nav-link text-white" href="/business">
                  Business
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/Entertainment">
                  Entertainment
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/general">
                  General
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/health">
                  Health
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/science">
                  Science
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/sports">
                  Sports
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/technology">
                  Technology
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">
                  Contact us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/guest">
                  Notifications
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    );

}

export default NavBar;
