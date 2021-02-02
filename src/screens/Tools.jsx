import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiAdobexd,
  SiJest,
  SiFigma,
  SiWordpress,
  SiBootstrap,
  SiMaterialUi,
  SiGraphql,
  SiCss3,
  SiTypescript,
} from "react-icons/si";

import { FaSass, FaGitAlt } from "react-icons/fa";

const Tools = () => {
  return (
    <section id="tools">
      <h3>Tools</h3>
      <ul>
        <li>
          <SiJavascript />
          <span>JavaScript (ES6)</span>
        </li>
        <li>
          <SiReact />
          <span> React</span>
        </li>
        <li>
          <SiNodeDotJs />
          <span>Node (Express)</span>
        </li>
        <li>
          <SiTypescript />
          <span>Typescript</span>
        </li>
        <li>
          <SiMongodb />
          <span>MongoDB</span>
        </li>
        <li>
          <SiJest />
          <span>Jest</span>
        </li>
        <li>
          <SiGraphql />
          <span>GraphQL</span>
        </li>
        <li>
          <FaGitAlt />
          <span>Git</span>
        </li>
        <li>
          <SiCss3 />
          <span>CSS3</span>
        </li>
        <li>
          <FaSass />
          <span>SASS</span>
        </li>
        <li>
          <SiMaterialUi />
          <span>Material-UI</span>
        </li>
        <li>
          <SiBootstrap />
          <span>Bootstrap</span>
        </li>
        <li>
          <SiWordpress />
          <span>WordPress</span>
        </li>
        <li>
          <SiFigma />
          <span>Figma</span>
        </li>
        <li>
          <SiAdobexd />
          <span>AdobeXD</span>
        </li>
        <li aria-hidden="true"></li>
        <li aria-hidden="true"></li>
      </ul>
    </section>
  );
};

export default Tools;
