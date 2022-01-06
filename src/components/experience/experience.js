/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import classes from "./Experience.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Experience extends Component {
  projectEx = {
    title: "Millennium I.T. E.S.P",
    period: "[7 months ( 2019 Oct - 2020 April) ]",
    description:
      "Was involved in planning designing developing testing and bug fixing new features for a spring boot+ postgress | based web application back end for a call cost reporting application. Developed stand along spring boot service to aggregate and summaise data for easy and fast reporting purposes Familiarised with agile work flows and practices | Utilized Jira for project management and and git (bit bucket) for version control",

    tags: ["React", "Chart.js", "TypeScript"],
    link: "geethoob.vercel.app",
    github: "harshhhdev/geethoob",
  };

  render() {
    let project = this.projectEx;
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>EXPERIENCE</span>

          <div className={classes.xpBox}>
            <h3
              className={classes["textmuted"]}
            >{`${project.title}   ${project.period}`}</h3>
            <p className={classes["textmuted"]}>{project.description} </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Experience;
