import React from "react";
import "./portfolio.css";
import Works from "./Works";
import { Fade } from "react-reveal";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <Fade bottom duration={1000} distance="20px">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>
      </Fade>
      <Works />
    </section>
  );
};

export default Portfolio;
