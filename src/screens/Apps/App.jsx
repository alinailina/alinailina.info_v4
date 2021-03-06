import React from "react";

const App = ({ app, i }) => {
  const { title, description, features, tools, github, website } = app;
  return (
    <li>
      <div>
        <div className="front">
          <div>
            <div>
              <span></span>
              <span></span>
            </div>{" "}
            <span>{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="back">
          <div>
            <h4>Features</h4>
            <ul>
              {features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <h4>Tools</h4>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>- {tool}</li>
              ))}
            </ul>
            <div>
              <a href={github}>See code</a>
              <a href={website}>Visit website</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default App;
