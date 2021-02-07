import React, { useState, useRef, useEffect } from "react";
import ui from "../assets/icons/ui.svg";
import devices from "../assets/icons/devices.svg";
import server from "../assets/icons/server.svg";

const Services = () => {
  const [active, setActive] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const toogleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
    titleRef.current.style.background = active
      ? "none"
      : "linear-gradient(to top, #fc5f1c 10%, transparent 10%)";
    titleRef.current.style.fontWeight = active ? "600" : "";
  }, [active]);

  return (
    <section id="services">
      <div>
        <header>
          <h3>Services</h3>
          <p>What I do</p>
        </header>
        <ul>
          <li>
            <h4>
              Front-end <br />
              development
            </h4>
            <img src={devices} alt="interface-icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur tenetur officia nulla officiis autem explicabo.
              Maxime, ex autem.
            </p>
            <ul>
              <li>Tools:</li>
              <li>JavaScript (ES6)</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>SASS</li>
              <li>HTML5</li>
            </ul>
          </li>
          <li>
            <h4>
              User interface <br />
              design
            </h4>
            <img src={ui} alt="devices-icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quaerat enim vel est voluptatibus.
            </p>
            <ul>
              <li>Tools:</li>
              <li>AdobeXD</li>
              <li>Figma</li>
            </ul>
          </li>
          <li>
            <h4>
              Back-end <br />
              development
            </h4>
            <img src={server} alt="server-icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur tenetur officia.
            </p>
            <ul>
              <li>Tools:</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
          </li>
        </ul>
        <div>
          <button ref={titleRef} onClick={toogleActive}>
            What I don&apos;t
          </button>
          <p ref={contentRef} className={active ? "active" : " "}>
            Like mess. Want to buy a plastic bag. Know how to handle
            compliments. Like spicy food. Wash whites with colours. Go chasing
            waterfalls. Understand how or why pork gets pulled. Do shots. Enjoy
            roller coasters. Repeat myself. Drink coffee with sugar. Need a
            receipt. Allow 30 minutes after eating before swimming. Like speed
            driving. Fall gracefully. Jump queues. Stretch before exercising.
            Believe in ghosts. Know how to whistle with my fingers. Smoke.
            Stretch after exercising. Dance often enough. Visit the dentist
            regularly. Want fries with that. Like spiders. Repeat myself. Stop
            believing. Settle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
