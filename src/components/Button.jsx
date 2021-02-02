import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Button = ({text}) => {
  return ( 
    <button>{text}<BiArrowBack/></button>
  );
};
 
export default Button;