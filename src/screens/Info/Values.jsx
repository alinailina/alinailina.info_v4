import React from "react";
import { values } from "../../data";
import Value from "./Value";

const Values = () => {
  // console.log(values);
  return (
    <section id="values">
      <h3>I value 🙏</h3>
      <ul>
        {values.map((value) => (
          <Value key={value.title} value={value} />
        ))}
      </ul>
    </section>
  );
};

export default Values;
