import React from "react";
import "./home.css";
import Type from "./Type";

const Data = () => {
  return (
    <div className="home__data">
      <h1 style={{ paddingBottom: 15 }} className="heading">
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <h1 className="home__title">
        I'm <strong className="main-name"> Aishwarya Venkatesh</strong>
      </h1>
      <h3 className="home__subtitle">
        <Type />
      </h3>
      <p className="home__description">
        I am a passionate and dynamic individual with a keen interest in
        technology, currently pursuing a Master's Degree in Computer Science.
        With a love for versatility, I am open to exploring and contributing to
        various fields within the realm of technology. Let's connect and
        collaborate on exciting projects!
      </p>

      <a href="#contact" className="button button--flex">
        Contact Me
      </a>
    </div>
  );
};

export default Data;
