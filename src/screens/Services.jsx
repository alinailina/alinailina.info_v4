import React from "react";
import ui from "../assets/icons/ui.svg";
import devices from "../assets/icons/devices.svg";
import server from "../assets/icons/server.svg";

const Services = () => {
  return (
    <section id="services">
      <div>
        <header>
          <h3>Services</h3>
          <p>Things I can help you with</p>
        </header>
        <ul>
          <li>
            <img src={devices} alt="interface-icon" />
            <div>
              <h4>Front-end development</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur tenetur officia nulla officiis autem explicabo.
                Maxime, ex autem.
              </p>
            </div>
          </li>
          <li>
            <img src={server} alt="server-icon" />
            <div>
              <h4>Back-end development</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur tenetur officia.
              </p>
            </div>
          </li>
          <li>
            <img src={ui} alt="devices-icon" />
            <div>
              <h4>User interface design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur tenetur officia nulla officiis autem explicabo.
                Maxime, ex autem.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
