import React, { useState, useEffect, useRef } from "react";

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
      <div id="values">
        <div>
          <h3>I value 🙏</h3>
          <ul>
            <li>
              <h4>Simplicity</h4>
              <p>
                Clean code, <span>functional interfaces</span>. I believe noise
                inhibits utility, and seek to remove everything that doesn’t add
                value.{" "}
              </p>
            </li>
            <li>
              <h4>Honesty</h4>
              <p>
                I believe in the power of{" "}
                <span>honest communication, trust, transparency</span> and short
                feedback cycle.
              </p>
            </li>
            <li>
              <h4>Ownership and accountability</h4>
              <p>
                I genuinely care about <span>making things better</span>.
                Working with people who don’t is my worst nightmare.
              </p>
            </li>
            <li>
              <h4>Pixel-perfect precision</h4>
              <p>
                I do judge a book by its cover, and always aim for a{" "}
                <span>highly polished design</span>, with a touch of awe(some).
              </p>
            </li>
            <li>
              <h4>Common sense</h4>
              <p>
                I believe <span>sound practical judgement</span> goes a looong
                way.
              </p>
            </li>
            <li className="empty-flex-item"></li>
          </ul>
        </div>
      </div>
      <div id="lol">
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
        unquenchable desire to learn and <span>challengemy status quo</span> 🚀
      </h3>
    </section>
  );
};

export default Info;
