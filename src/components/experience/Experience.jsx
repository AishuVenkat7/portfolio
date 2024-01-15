import React, { useState } from "react";
import "./experience.css";
import { Fade } from "react-reveal";

const Experience = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <section className="services section" id="experience">
      <Fade bottom duration={1000} distance="20px">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">Where I've Worked</span>
      </Fade>
      <div className="services__container container grid">
        <div className="services__content">
          <Fade left duration={1500}>
            <div>
              <i className="uil uil-briefcase-alt services__icon"></i>
              <h3 className="services__title">Mindtree Ltd</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </Fade>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Mindtree Ltd</h3>
              <p className="services__modal-description">
                3 Years of Work Experience
              </p>
              {/* view more content */}
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Client: Avis Budget Group - ABG is a leading global provider
                    of mobility solutions, operating three of the most
                    recognized brands in the industry through Avis, Budget and
                    Zipcar.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Designed, developed and managed operational processes for
                    tasks including creating, modifying, and canceling
                    reservations, catering to both guest users and preferred
                    account holders enjoying associated benefits. Successfully
                    forged a link between the SNCF train website and the ABG
                    website, streamlining the process of booking car rentals
                    upon the user's completion of their train reservation. This
                    integration led to a notable 50% boost in car rental
                    reservations through ABG France.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Enhanced the platform by introducing support for various new
                    features, including flexible pickup times, discounted
                    pricing options, complimentary extras, and exclusive
                    membership benefits. As a result, our customer retention
                    rate experienced a significant increase of 30%. Served as
                    the leader of a 3-member team, adhering to Agile
                    methodologies with JIRA as our tool of choice. Maintained a
                    strong collaborative relationship with clients to collect
                    requirements, foster adoption, and effectively address and
                    resolve critical issues.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <span style={{ fontWeight: "bold" }}>
                      Technologies used:
                    </span>{" "}
                    JAVA, Collections, Spring, Hibernate, JAX-RS, MySQL, Open
                    Jaw, Junit, Mockito. Third Party API: Tempest Microservice
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* for directed research */}
        <div className="services__content">
          <Fade right duration={1500}>
            <div>
              <i className="uil uil-notebooks services__icon"></i>
              <h3 className="services__title">Directed Research</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </Fade>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Directed Research</h3>
              <p className="services__modal-description">
                Started Working as a Research Assistant
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    We are developing a mobile app designed to teach
                    mathematical concepts specifically tailored for students who
                    may not be fluent in English.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <span style={{ fontWeight: "bold" }}>
                      Technologies used:
                    </span>{" "}
                    Flutter, Figma
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// comment

{
  /* <div
          className={`flip-card ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="flip-card-inner">
            <Fade right duration={1500}>
              <div className="flip-card-front">
                <span>
                  <i class="uil uil-search search__icon"></i>
                </span>
                <h3 className="search__title">Work Search</h3>
                <div>
                  Flip Over
                  <i className="uil uil-arrow-right services__button-icon"></i>
                </div>
              </div>
            </Fade>
            <div className="flip-card-back">
              <p>
                I possess three years of experience in the software industry and
                am currently pursuing graduate studies. I am engaged in
                independent project work, focusing on directed research using
                Flutter. Actively seeking internships or full-time positions, I
                have a keen enthusiasm for learning and adopting new
                technologies.
              </p>
            </div>
          </div>
        </div> */
}
