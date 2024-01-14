import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__list">
          <p>
            Thank you for visiting my personal portfolio website. Keep Rising
            🚀.
          </p>
        </div>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/aishuvenkat7/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/AishuVenkat7"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
