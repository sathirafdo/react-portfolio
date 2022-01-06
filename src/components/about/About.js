import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { AiOutlinePaperClip } from "react-icons/ai";
import me from "../images/me.jpg";

class About extends Component {
  render() {
    return (
      <div
        className={classes.box}
        id="experience"
        onClick={() => {
          console.log("clicked on about");
        }}
      >
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <div className="row">
            <div className="col-md-6">
              <p className={`${classes.blue} ${classes.title}`}>
                Hi, my name is{" "}
              </p>
              <h1 className={classes.name + " " + classes.purple}>
                Sathira Fernando
              </h1>
              <p className={classes.textmuted}>
                I am a dedicated and passionate undergraduate of University of
                Moratuwa with an enthusiasm to always broaden my knowledge and
                develop new skills. I aspire to enhance myself and gain
                experience in the fields of Software Development , Web / mobile
                App development and Data Science and . I believe I have the
                skills and the potential to excel in those areas facing new
                challenges and providing solutions.
              </p>
              <br></br>
              {/* <Button to="/contact/" text="Contact" class="btn" /> */}
              <AiOutlinePaperClip />
            </div>
            <br></br>
            <br></br>

            <div className={`col-md-6  ${classes["logo-col"]}`}>
              <img
                className={`${classes["img-fluid"]} ${classes.logo}`}
                alt="profile pic"
                src={me}
              ></img>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="row">
  <div className="col-md-6">
    <p className="white title">Hi, this is</p>
    <h1 className="purple name">DarkLeas</h1>
    <p className="text-muted">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt,
      nibh eu accumsan maximus, magna ligula varius lacus, sagittis imperdiet
      turpis erat facilisis mi. Mauris efficitur ac massa at malesuada. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <br></br>
    <Button to="/contact/" text="Contact" class="btn" />
    <AiOutlinePaperClip />
  </div>
  <br></br>
  <br></br>

  <div className="col-md-6 logo-col">
    <img
      className="img-fluid logo"
      alt="burhan kocadağ"
      src="http://placekitten.com/g/50/50"
    ></img>
  </div>
</div> */
}
