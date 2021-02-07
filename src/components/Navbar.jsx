import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RiArrowDownLine } from "react-icons/ri";

import spinner from "../assets/icons/spinner.svg";
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (!active) window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav style={{ top: visible ? "0" : "-120px" }}>
      <div>
        <div>
          <img src={spinner} alt="Download CV" />
          <a href="/">
            <RiArrowDownLine />
          </a>
        </div>
      </div>
      <div className={active ? "active" : ""}>
        <ul>
          <li>
            <Link to="services" activeClass="active" spy={true}>
              Services
            </Link>
          </li>
          <li>
            <Link to="culture" activeClass="active" spy={true}>
              Culture
            </Link>
          </li>
          <li>
            <Link to="apps" activeClass="active" spy={true}>
              Apps
            </Link>
          </li>
          {/* <li>
            <Link to="news" activeClass="active" spy={true}>
              News  <RiArrowRightLine />
            </Link>
          </li> */}
          <li>
            <Link to="contact" activeClass="active" spy={true}>
              Contact
            </Link>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Medium</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Github</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={toggleActive}
      >
        <div className="bar bar1"></div>
        <div className="hidden"></div>
        <div className="bar bar3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
