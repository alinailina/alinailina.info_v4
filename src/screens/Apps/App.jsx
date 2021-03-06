import React, { useState } from "react";
import Modal from "./Modal";
import { RiArrowRightLine } from "react-icons/ri";

const App = ({ app, i }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  const { title, description } = app;
  return (
    <li>
      <div>
        <span>{i + 1}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={toggleActive}>
          View details <RiArrowRightLine />
        </button>
        <Modal active={active} toggleActive={toggleActive} app={app} />
      </div>
    </li>
  );
};

export default App;
