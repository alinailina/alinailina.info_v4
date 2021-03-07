import React from "react";
import { RiCloseFill } from "react-icons/ri";

const Modal = ({ active, toggleActive, app }) => {
  const { features, tools, github, website } = app;

  if (active === false) {
    return null;
  }
  return (
    <div className="modal">
      <div>
        <button onClick={toggleActive}>
          <RiCloseFill />
        </button>
        <ul>
          <li>Features:</li>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <ul>
          <li>Tools:</li>
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <div>
          <a href={github}>See code</a>
          <a href={website}>Visit website</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
