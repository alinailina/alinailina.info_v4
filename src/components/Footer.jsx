import React from "react";
import { RiDownloadLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a href="tel:+3584659 35910">+358 (4) 659 35910</a>
          </li>
          <li>
            <a href="maito:niftysyntax@gmail.com">niftysyntax(at)gmail.com</a>
          </li>
          <li>
            <a href="/">
              <RiDownloadLine /> CV (.pdf)
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/alinailina/">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/niftysyntax">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/alinailina">Github</a>
          </li>
        </ul>
      </div>
      <p>© 2021 - Designed and developed by Alina Ilina 💅</p>
    </footer>
  );
};

export default Footer;
