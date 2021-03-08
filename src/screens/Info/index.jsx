import React, { useState, useEffect, useRef } from "react";
import Values from "./Values";

const Info = () => {
  const [active, setActive] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const toogleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    titleRef.current.style.textDecoration = active ? "none" : "";
  }, [active]);

  return (
    <section id="info">
      <div id="skills">
        <ul>
          <li>
            <h3>I develop 👌</h3>
            <p>
              I work with React and it’s ecosystem. My primary focus is on
              building <span>single page React applications</span> with
              Node/Express API on the back end.
            </p>
          </li>
          <li>
            <h3>I design 💅</h3>
            <p>
              I believe <span>attractive things work better</span> and pay a lot
              of attention to aesthetics and clarity.
            </p>
            <p>
              My strong interest in usability and interaction design informs my
              work as a developer and designer. I look at what others are doing
              right, and combine those <span>proven design patterns</span> with
              20% of my <span>unique spin</span>.
            </p>
          </li>
        </ul>
      </div>
      <Values />
      <div id="joke">
        <button ref={titleRef} onClick={toogleActive}>
          What I don&apos;t
        </button>
        <p ref={contentRef} className={active ? "active" : " "}>
          Like mess. Wash whites with colours. Mind the gap. Take sugar with
          coffee. Go chasing waterfalls. Want to buy a plastic bag. Understand
          how or why pork gets pulled. Enjoy speed driving. Always say the right
          thing at the right time. Want fries with that. Stretch before
          exercising. Smoke. Stretch after exercising. Dance often enough. Stop
          believing. Settle.
        </p>
      </div>
      <h3>
        As a <span>self-taught professional</span>, I’m driven by an
        unquenchable desire to learn and <span>challenge my status quo</span> 🚀
      </h3>
    </section>
  );
};

export default Info;
