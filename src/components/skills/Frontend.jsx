import React from "react";
import { Icon } from "@iconify/react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Technologies</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="vscode-icons:file-type-html" />
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:javascript" />
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:css-3" />
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:bootstrap" />
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon className="icon__name" icon="logos:react" />
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <Icon
                className="icon__name"
                icon="vscode-icons:file-type-angular"
              />
              <h3 className="skills__name">Angular</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
