import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Value = ({ value }) => {
  //console.log(value);
  const { name, text } = value;
  const [active, setActive] = useState(false);
  const nameRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.style.maxHeight = active
      ? `${textRef.current.scrollHeight}px`
      : "0px";
    nameRef.current.style.color = active ? "#007aff" : "";
    nameRef.current.style.marginBottom = active ? "10px" : "";
  }, [active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <li>
      <h4 ref={nameRef} onClick={toogleActive}>
        {name}
        <span className={active ? "accToggle active" : "accToggle"}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </h4>
      <div ref={textRef}>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default Value;
