import React from "react";
// import { RiArrowDownLine } from "react-icons/ri";
// import spinner from "../assets/icons/spinner.svg";
import MultiStepForm from "./Newsletter/MultiStepForm";

const Footer = () => {
  return (
    <footer id="contact">
      <div>
        <div>
          <div>
            <h4>For work enquiries</h4>
            <ul>
              <li>
                <a href="/">+(358) 4 659 35910</a>
              </li>
              <li>
                <a href="/">niftysyntax(at)gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
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
          </div>
        </div>

        <MultiStepForm />
        <p>© 2021 &mdash; Designed and developed by Alina Ilina</p>
      </div>
    </footer>
  );
};

export default Footer;
