import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Others from "./Others";
import { Fade } from "react-reveal";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <Fade bottom duration={1000}>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Here's What I do</span>
      </Fade>
      <div className="skills__container container grid">
        <Fade left duration={1500}>
          <Frontend />
        </Fade>
        <Fade right duration={2000}>
          <Backend />
        </Fade>
        <Fade left duration={2500}>
          <Database />
        </Fade>
        <Fade right duration={2500}>
          <Others />
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
