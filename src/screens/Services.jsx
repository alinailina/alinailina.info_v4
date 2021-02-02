import React from "react";
import ui from "../assets/icons/ui.svg";
import devices from "../assets/icons/devices.svg";
import server from "../assets/icons/server.svg";

const Services = () => {
  return (
    <section id="services">
      <h3>I can help you with</h3>
      <ul>
        <li>
          <img src={devices} alt="interface-icon" />
          <div>
            <h4>Front-end development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              iste doloremque adipisci esse,
              <span>illum voluptatibus ad, at sapiente</span>.
            </p>
          </div>
        </li>
        <li>
          <img src={server} alt="server-icon" />
          <div>
            <h4>Back-end development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur
              <span>illum voluptatibus ad, at sapiente</span>
              reprehenderit asperiores necessitatibus eveniet nesciunt
              laudantium.
            </p>
          </div>
        </li>
        <li>
          <img src={ui} alt="devices-icon" />
          <div>
            <h4>User interface design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              iste doloremque adipisci esse, illum voluptatibus ad.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
