import React from "react";
import { IoMdArrowDown } from "react-icons/io";

// import map from "../assets/map.png";
const Contact = () => {
  return (
    <section id="contact">
      <h3>
        Enough about me,
        <br />
        let’s talk about you.
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde deleniti
        tempora omnis dignissimos maxime molestias atque aspernatur id ipsa
        aperiam assumenda, eveniet culpa molestiae eius, delectus consequatur
        veniam fugit odit!
      </p>
      {/* <hr /> */}
      <ul>
        <li>
          <a href="tel:+358465935910"> +(358) 4 659 35910</a>
        </li>
        <li>
          <a href="mailto:niftysyntax@gmail.com">niftysyntax(at)gmail.com</a>
        </li>
        <li>
          <p>Helsinki, Finland</p>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <IoMdArrowDown />
            CV (.pdf)
          </a>
        </li>
      </ul>
      {/* <img src={map} alt="" /> */}
    </section>
  );
};

export default Contact;
