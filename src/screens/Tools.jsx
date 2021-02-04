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

import { FaGitAlt } from "react-icons/fa";

const Tools = () => {
  return (
    <section id="tools">
      <div>
        <h3>Tools</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          totam vitae labore qui similique laborum repellat ratione ducimus modi
          autem. Magnam reprehenderit, ullam incidunt corporis iusto excepturi.
        </p>
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
            <SiCss3 />
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
          <li aria-hidden="true"></li>
        </ul>
      </div>
    </section>
  );
};

export default Tools;
