import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

// Screens
import Header from "./screens/Header";
import Introduction from "./screens/Introduction";
import Services from "./screens/Services";
import Culture from "./screens/Culture";
import Tools from "./screens/Tools";
import Apps from "./screens/Apps";
import Contact from "./screens/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Aside />
      <main>
        <Header />
        <Introduction />
        <Services />
        <Culture />
        <Tools />
        <Apps />
        {/* <News /> */}
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </Router>
  );
}

export default App;
