import React from "react";
import { Icon } from "@iconify/react";

const Others = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">FRAMEWORKS, TOOLS AND IDE</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon
                className="icon__name"
                icon="bxl:spring-boot"
                color="green"
              />
              <h3 className="skills__name">Spring Boot</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:hibernate" />
              <h3 className="skills__name">Hibernate</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon
                className="icon__name"
                icon="mdi:language-ruby-on-rails"
                color="darkred"
              />
              <h3 className="skills__name">Ruby on Rails</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="devicon:git" />
              <h3 className="skills__name">Git</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:docker-icon" />
              <h3 className="skills__name">Docker</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:postman-icon" />
              <h3 className="skills__name">Postman</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="devicon:eclipse" />
              <h3 className="skills__name">Eclipse</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="devicon:vscode" />
              <h3 className="skills__name">VS Code</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="devicon:figma" />
              <h3 className="skills__name">Figma</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
