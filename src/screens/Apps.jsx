import React from "react";
// import App from "./App";
import { BiRightArrowAlt } from "react-icons/bi";
const Apps = () => {
  return (
    <section id="apps">
      <div id="wrapper">
        <h3 id="sticky">Apps</h3>
        {/* <div className="apps">
          {apps.map((app, i) => (
            <App key={i} id={i} app={app} />
          ))}
        </div> */}
        <ul>
          <li>
            <h4>App 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              dolores eveniet vel id maiores nesciunt dolorem suscipit rerum
              eaque, debitis perspiciatis sequi consequuntur ipsum.
            </p>
            <a href="/">
              Link
              <BiRightArrowAlt />
            </a>
          </li>
          <li>
            <h4>App 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              dolores eveniet vel id maiores nesciunt dolorem suscipit rerum
              eaque, debitis perspiciatis sequi consequuntur ipsum.
            </p>
            <a href="/">
              Link
              <BiRightArrowAlt />
            </a>
          </li>
          <li>
            <h4>App 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              dolores eveniet vel id maiores nesciunt dolorem suscipit rerum
              eaque, debitis perspiciatis sequi consequuntur ipsum.
            </p>
            <a href="/">
              Link
              <BiRightArrowAlt />
            </a>
          </li>
          <li>
            <h4>App 4</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              dolores eveniet vel id maiores nesciunt dolorem suscipit rerum
              eaque, debitis perspiciatis sequi consequuntur ipsum.
            </p>
            <a href="/">Link</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Apps;
