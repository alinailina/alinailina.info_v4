import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

// Screens
import Header from "./screens/Header";
import Services from "./screens/Services";
//import Tools from "./screens/Tools";
import Tools from "./screens/Tools";
// import News from "./screens/News";
import Culture from "./screens/Culture";
import Apps from "./screens/Apps";
import Contact from "./screens/Contact";

// Contentful delivery API
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get all entries
  useEffect(() => {
    setLoading(true);
    client
      .getEntries()
      .then((response) => setEntries(response.items))
      .catch(console.error);
    setLoading(false);
  }, []);

  console.log(loading);

  // Filter featured apps
  const apps = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "app" &&
    entry.fields.featured === "featured"
      ? apps.push(entry)
      : null
  );

  console.log(apps);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Aside />
      <main>
        <Header />
        <div></div>
        <Services />
        <Culture />
        <Tools />
        <Apps apps={apps} />
        {/* <News /> */}
        <Contact />
      </main>
      <BackToTop />
    </Router>
  );
}

export default App;
