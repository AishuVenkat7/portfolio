import React, { useState } from "react";
import "./qualification.css";
import { Fade, Slide } from "react-reveal";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <Fade bottom duration={1000} distance="20px">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
      </Fade>
      <div className="qualification__container container">
        {/* education | experience */}
        <div className="qualification__tabs">
          {/* education tab */}
          <div
            className={`qualification__button button--flex ${
              toggleState === 1 ? "qualification__active" : ""
            }`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          {/* experience tab */}
          <div
            className={`qualification__button button--flex ${
              toggleState === 2 ? "qualification__active" : ""
            }`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        {/* qualification sections */}
        <div className="qualification__sections">
          {/* Education tab */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Grad*/}
            <div className="qualification__data">
              <Slide top duration={2000} distance="20px">
                <div>
                  <h3 className="qualification__title">
                    Master of Science in Computer Science
                  </h3>
                  <span className="qualification__subtitle">
                    Santa Clara University
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                  </div>
                </div>
              </Slide>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Under Grad */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <Slide bottom duration={2000} distance="20px">
                <div>
                  <h3 className="qualification__title">
                    Bachelor of Technology: Information Technology
                  </h3>
                  <span className="qualification__subtitle">
                    St. Joseph's College of Engineering, Anna University
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2014-2018
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          {/* Experience tab */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Data 1 */}
            <div className="qualification__data">
              <Slide top duration={2000} distance="20px">
                <div>
                  <h3 className="qualification__title">Mindtree Ltd</h3>
                  <span className="qualification__subtitle">
                    Full Stack Developer
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Jun-2018 - Feb-2021
                  </div>
                </div>
              </Slide>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Data 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <Slide bottom duration={2000} distance="20px">
                <div>
                  <h3 className="qualification__title">Research Assistant</h3>
                  <span className="qualification__subtitle">
                    Mobile App - using Flutter
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Jan 2024 - present
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
