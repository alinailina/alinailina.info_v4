import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import spinner from "../assets/icons/spinner.svg";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Download CV" />
      <a href="/">
        <RiDownloadLine />
      </a>
    </div>
  );
};

export default Spinner;
