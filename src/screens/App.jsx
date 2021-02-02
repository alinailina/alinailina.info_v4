import React, { useState, useRef, useEffect } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";

const App = ({ app, id }) => {
  const { title, description, link } = app.fields;
  const [active, setActive] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
    titleRef.current.style.borderBottom = active ? "none" : "1px solid black";
    titleRef.current.style.color = active ? "#00ba71" : "black";
  }, [active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className="app">
      <div ref={titleRef} onClick={toogleActive}>
        <p>0{id + 1}</p>
        <h4>{title}</h4>
        <div className={active ? "accToggle active" : "accToggle"}>
          <BiRightArrowAlt />
        </div>
      </div>
      <div ref={contentRef}>
        <div>
          <p>{description}</p>
          <a href={link}>
            Link
            <RiArrowRightUpLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
