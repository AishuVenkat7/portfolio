import React from "react";
import { Icon } from "@iconify/react";

const Database = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Database Technologies</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:mysql" />
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon
                className="icon__name"
                icon="simple-icons:oracle"
                color="red"
              />
              <h3 className="skills__name">Oracle</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
