import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

import Navbar from "./components/Navbar";
import Header from "./screens/Header";
import Info from "./screens/Info";
import Apps from "./screens/Apps";
import CTA from "./screens/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

ReactDOM.render(
  <Router>
    <Navbar />
    <Header />
    <Info />
    <Apps />
    <CTA />
    <Footer />
    <ScrollToTop />
    <BackToTop />
  </Router>,
  document.getElementById("root")
);
