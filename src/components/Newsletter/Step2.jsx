import React from "react";

const Step2 = ({ currentStep, name, setName, handleNextStep }) => {
  if (currentStep !== 2) {
    return null;
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("2");
      handleNextStep();
    }
  };

  return (
    <label htmlFor="name">
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        required
      />
    </label>
  );
};

export default Step2;
