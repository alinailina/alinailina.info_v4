import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Screens
import Header from "./screens/Header";
import Introduction from "./screens/Introduction";
import Services from "./screens/Services";
import Culture from "./screens/Culture";
import Apps from "./screens/Apps";
// import News from "./screens/News";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Header />
        <Introduction />
        <Services />
        <Culture />
        <Apps />
        {/* <News /> */}
        <Footer />
      </main>
      <BackToTop />
    </Router>
  );
}

export default App;
