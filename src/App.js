/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Education from "./components/Education/Education";
import Interest from "./components/skills/Interest";
import CarouselImages from "./components/carousel/CarouselImages.js";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/experience";
import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="side" style={{ zIndex: "1" }}>
            <nav className="navbar side navbar-expand-lg navbar-light p-0">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                style={{ zIndex: "1" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <Sidebar />
              </div>
            </nav>
          </div>
          <div className="main">
            <div
              style={{
                height: "100px",
              }}
            >
              <Particles
                id="tsparticles"
                options={particlesConfig}
                style={{ zIndex: -2 }}
              />
              {/* <CarouselImages /> */}
            </div>
            <About />
            <Experience />
            <Projects />
            {/* <Interest /> */}
            {/* <Education /> */}
            {/* <Education />
            <Education /> */}
            <div style={{ minHeight: "100px" }}></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
