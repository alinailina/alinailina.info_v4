import React from "react";
// import Spinner from "../components/Spinner";

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <div>
          <header>
            <p>
              But enough about me,
              <br />
              let’s talk about you.
            </p>
          </header>
          <ul>
            <li>
              <span>T.</span> <a href="tel:+358465935910">+(358) 4 659 35910</a>
            </li>
            <li>
              <span>E.</span>{" "}
              <a href="mailto:niftysyntax@gmail.com">
                niftysyntax(at)gmail.com
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        {/* <div>
          <Spinner />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
