import React from "react";
import { Icon } from "@iconify/react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Technologies</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="devicon:java" />
              <h3 className="skills__name">Java</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon
                className="icon__name"
                icon="file-icons:c"
                color="darkblue"
              />
              <h3 className="skills__name">C++</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon
                className="icon__name"
                icon="devicon:php"
                color="darkblue"
              />
              <h3 className="skills__name">PHP</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:python" />
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:ruby" />
              <h3 className="skills__name">Ruby</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="devicon:c" color="darkblue" />
              <h3 className="skills__name">C</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
