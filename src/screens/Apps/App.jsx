import React, { useState } from "react";
import Modal from "./Modal";

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
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={toggleActive}>View details</button>
        </div>

        <Modal active={active} toggleActive={toggleActive} app={app} />
      </div>
    </li>
  );
};

export default App;
