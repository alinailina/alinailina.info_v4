import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Step3 = ({ currentStep, email, setEmail }) => {
  if (currentStep !== 3) {
    return null;
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("3");
    }
  };
  return (
    <React.Fragment>
      <label htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          required
        />
      </label>
      <button type="submit">
        <RiArrowRightLine />
      </button>
    </React.Fragment>
  );
};

export default Step3;
