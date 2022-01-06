/* eslint-disable react/jsx-no-target-blank */

import React, { Component } from "react";
import classes from "./Projects.module.css";
import projectBoxClasses from "./projectBox";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { AiOutlineGithub, AiOutlinePaperClip } from "react-icons/ai";

class Projects extends Component {
  pList = [
    {
      title: "Geethoob",
      description:
        "View, and visualise your GitHub profile and stats with beautiful graphs",
      tags: ["React", "Chart.js", "TypeScript"],
      link: "geethoob.vercel.app",
      github: "harshhhdev/geethoob",
    },
    {
      title: "Glassmorphicssm",
      description: "Generate glassy CSS code for all your glassmorphism needs",
      tags: ["React", "Chart.js"],
      link: "harshhhdev.github.io/glassmorphicssm",
      github: "harshhhdev/glassmorphicssm",
    },
    {
      title: "Glassmorphicssm",
      description: "Generate glassy CSS code for all your glassmorphism needs",
      tags: ["React", "Chart.js"],
      link: "harshhhdev.github.io/glassmorphicssm",
      github: "harshhhdev/glassmorphicssm",
    },
    {
      title: "Glassmorphicssm",
      description: "Generate glassy CSS code for all your glassmorphism needs",
      tags: ["React", "Chart.js"],
      link: "harshhhdev.github.io/glassmorphicssm",
      github: "harshhhdev/glassmorphicssm",
    },
    {
      title: "Glassmorphicssm",
      description: "Generate glassy CSS code for all your glassmorphism needs",
      tags: ["React", "Chart.js"],
      link: "harshhhdev.github.io/glassmorphicssm",
      github: "harshhhdev/glassmorphicssm",
    },
    {
      title: "Glassmorphicssm",
      description: "Generate glassy CSS code for all your glassmorphism needs",
      tags: ["React", "Chart.js"],
      link: "harshhhdev.github.io/glassmorphicssm",
      github: "harshhhdev/glassmorphicssm",
    },
  ];

  render() {
    return (
      <div
        className={classes.box}
        id="projects"
        onClick={() => {
          console.log("clicked on projects");
        }}
      >
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>PROJECTS</span>

          <h2 className={classes.heading}>
            Here are some projects that I have done
          </h2>

          <div className={classes.Interest}>
            {/* start */}
            {this.pList.map((project, index) => (
              <div style={projectBoxClasses.projectBox} key={index}>
                <div style={projectBoxClasses.projectTopContainer}>
                  <h1 style={projectBoxClasses.projectHeader}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F4F4F5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div style={projectBoxClasses.projectLinks}>
                      <div
                        style={projectBoxClasses.projectLink}
                        href={`https://${project.link}`}
                        target="_blank"
                      >
                        <AiOutlinePaperClip />
                      </div>
                      <a
                        style={projectBoxClasses.projectLink}
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                      >
                        <AiOutlineGithub />
                      </a>
                    </div>
                  </h1>
                  <p style={projectBoxClasses.projectTitle}>{project.title}</p>
                  <p style={projectBoxClasses.projectDescription}>
                    {project.description}
                  </p>
                </div>
                <div style={projectBoxClasses.tags}>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border rounded-pill border-info border-2 p-2 m-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {/* end */}
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Projects;
