import React, { useState, useEffect, useRef } from "react";
import pic from "../assets/la.jpg";

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
      <div>
        <img src={pic} alt="" />
      </div>
      <div>
        <div>
          <p>
            I work with React daily and enjoy building front-end architecture,
            component libraries, and design systems.
          </p>
          <p>
            My strong interest in usability and interaction design informs my
            work as a developer and designer. I believe{" "}
            <span>attractive things work better</span> and pay a lot of
            attention to aesthetics and clarity.{" "}
          </p>
          <p>
            I like to take ownership of my work while collaborating with
            talented people, who care about the end product, as much as I do.
          </p>
          <p>
            As a <span>self-taught professional</span>, I’m driven by an
            unquenchable desire to learn and challenge my status quo.
          </p>
          <h3 className="subtitle">What I do</h3>
          <h4>I develop</h4>
          <p>
            I work with React and it’s ecosystem. My primary focus is on
            building <span>single page React applications</span> with
            Node/Express API on the back end.
          </p>
          <h4>I design</h4>
          <p>
            No need to reinvent the UI wheel - I look at what others are doing
            right, and combine those <span>proven design patterns</span> with
            20% of my <span>unique spin</span>.
          </p>
          <p>
            I believe a clever mix of typography and whitespaces is a design in
            and of itself, and never go for complexity without reason.
          </p>
          <h4>I value</h4>
          <ul>
            <li>
              <h5>Simplicity</h5>
              <p>
                Clean code, <span>functional interfaces</span>. I believe noise
                inhibits utility, and seek to remove everything that doesn’t add
                perceivable value.{" "}
              </p>
            </li>
            <li>
              <h5>Honesty</h5>
              <p>
                I believe in the power of{" "}
                <span>honest communication, trust, transparency</span> and short
                feedback cycle.
              </p>
            </li>
            <li>
              <h5>Ownership and accountability</h5>
              <p>
                I genuinely care about <span>making things better</span>.
                Working with people who don’t is my worst nightmare.
              </p>
            </li>
            <li>
              <h5>Pixel-perfect design</h5>
              <p>
                I do judge a book by its cover, and always aim for a{" "}
                <span>highly polished design</span>, with a touch of awe(some).
              </p>
            </li>
            <li>
              <h5>Common sense</h5>
              <p>
                I believe <span>sound practical judgement</span> goes a looong
                way.
              </p>
            </li>
          </ul>
          <div>
            <button ref={titleRef} onClick={toogleActive} className="subtitle">
              What I don&apos;t
            </button>
            <p ref={contentRef} className={active ? "active" : " "}>
              Like mess. Want to buy a plastic bag. Know how to handle
              compliments. Like spicy food. Wash whites with colours. Go chasing
              waterfalls. Understand how or why pork gets pulled. Do shots.
              Enjoy roller coasters. Repeat myself. Drink coffee with sugar.
              Need a receipt. Allow 30 minutes after eating before swimming.
              Like speed driving. Fall gracefully. Jump queues. Stretch before
              exercising. Believe in ghosts. Know how to whistle with my
              fingers. Smoke. Stretch after exercising. Dance often enough.
              Visit the dentist regularly. Want fries with that. Like spiders.
              Repeat myself. Stop believing. Settle.
            </p>
          </div>
          <h4>My happy place</h4>
          <p>
            I would fit very comfortably in a{" "}
            <span> cross-functional team</span> of developers, product managers,
            and designers delivering ethically-minded end-to-end software
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
