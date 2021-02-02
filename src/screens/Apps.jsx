import React from "react";
import App from "./App";

const Apps = ({ apps }) => {
  return (
    <section id="apps">
      <h3>Apps</h3>
      <div>
        <div className="apps">
          {apps.map((app, i) => (
            <App key={i} id={i} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
