import React, { useState } from "react";
import Modal from "./Modal";
import { BsThreeDots } from "react-icons/bs";

const App = ({ app, i }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  const { title, description } = app;

  return (
    <li>
      <div>
        <div>
          <BsThreeDots /> <span>0{i + 1}</span>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={toggleActive}>View details</button>
          <Modal active={active} toggleActive={toggleActive} app={app} />
        </div>
      </div>
    </li>
  );
};

export default App;
