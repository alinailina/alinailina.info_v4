import React from "react";
import { IoMdArrowDown } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <header>
          <h3>
            But enough about me,
            <br />
            let’s talk about you.
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            deleniti tempora omnis.
          </p>
        </header>
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
      </div>
    </section>
  );
};

export default Contact;
