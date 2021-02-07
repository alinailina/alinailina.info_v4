import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
    setSuccess(true);
  };

  const handleNextStep = () => {
    let currentStep = step;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setStep(currentStep);
  };

  //   const handlePrevStep = () => {
  //     let currentStep = step;
  //     currentStep = currentStep <= 1 ? 1 : currentStep - 1;
  //     setStep(currentStep);
  //   };

  //   const prevBtn = () => {
  //     let currentStep = step;
  //     if (currentStep !== 1) {
  //       return (
  //         <button onClick={handlePrevStep}>
  //           <RiArrowLeftLine />
  //         </button>
  //       );
  //     }
  //     return null;
  //   };

  const nextBtn = () => {
    let currentStep = step;
    if (currentStep <= 2) {
      return (
        <button onClick={handleNextStep}>
          <RiArrowRightLine />
        </button>
      );
    }
    return null;
  };

  return (
    <div id="form">
      {success ? (
        <h4>Thanks, all done</h4>
      ) : (
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <Step1 currentStep={step} handleNextStep={handleNextStep} />
            <Step2
              currentStep={step}
              name={name}
              setName={setName}
              handleNextStep={handleNextStep}
            />
            <Step3 currentStep={step} email={email} setEmail={setEmail} />
          </form>
          {nextBtn()}
        </React.Fragment>
      )}
    </div>
  );
};

export default MultiStepForm;
