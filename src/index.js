import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

//import Parent from "./screens/Parent";

import Navbar from "./components/Navbar";
import Header from "./screens/Header";
import Info from "./screens/Info";
import Apps from "./screens/Apps";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

ReactDOM.render(
  <Router>
    {/* <Parent /> */}
    <Navbar />
    <Header />
    <Info />
    <Apps />
    <Contact />
    <Footer />
    <ScrollToTop />
    <BackToTop />
  </Router>,
  document.getElementById("root")
);
