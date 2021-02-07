import React from "react";

const Step1 = ({ currentStep }) => {
  if (currentStep !== 1) {
    return null;
  }
  return <h4>Subscribe for news and updates</h4>;
};

export default Step1;
