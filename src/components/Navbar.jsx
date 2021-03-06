import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);
  const navRef = useRef(null);

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
    <nav style={{ top: visible ? "0" : "-120px" }} ref={navRef}>
      <div className={active ? "active" : ""}>
        <ul>
          <li>
            <Link to="/" activeClass="active" spy={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="info" activeClass="active" spy={true}>
              Info
            </Link>
          </li>
          <li>
            <Link to="apps" activeClass="active" spy={true}>
              Apps
            </Link>
          </li>
          <li>
            <Link to="cta" activeClass="active" spy={true}>
              Contact
            </Link>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">LinkedIn</a>
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
