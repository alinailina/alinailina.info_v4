import React, { useState } from "react";
import Modal from "./Modal";
import { RiArrowRightLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

const App = ({ app, i }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  const { title, description } = app;
  return (
    <li>
      <Fade>
        <div>
          <span>
            <span>#</span>
            {i + 1}
          </span>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={toggleActive}>
            View details <RiArrowRightLine />
          </button>
          <Modal active={active} toggleActive={toggleActive} app={app} />
        </div>
      </Fade>
    </li>
  );
};

export default App;
