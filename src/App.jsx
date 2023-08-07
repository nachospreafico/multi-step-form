import { useState } from "react";

import "./App.css";
import FormContainer from "./components/FormContainer";

function App() {
  const [step, setStep] = useState(1);

  const [input, setInput] = useState({
    name: { value: "", isEmpty: true },
    email: { value: "", isEmpty: true },
    phone: { value: "", isEmpty: true },
  });

  function handleStepIncrease() {
    if (
      step < 5 &&
      step > 0 &&
      !input.name.isEmpty &&
      !input.email.isEmpty &&
      !input.phone.isEmpty
    ) {
      setStep(step + 1);
    }
  }

  function handleStepDecrease() {
    if (step <= 5 && step >= 1) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <div className="app-container">
        <div className="counter-wrapper">
          <div className="step-counter">
            <div className={`step ${step === 1 ? "current" : ""}`}>1</div>
            <div className={`step ${step === 2 ? "current" : ""}`}>2</div>
            <div className={`step ${step === 3 ? "current" : ""}`}>3</div>
            <div className={`step ${step === 4 ? "current" : ""}`}>4</div>
          </div>
        </div>
        <div className="form-wrapper">
          <FormContainer step={step} input={input} setInput={setInput} />
        </div>
        <div className="buttons-container">
          <button
            className={`back-btn ${step === 1 || step === 5 ? "hidden" : ""}`}
            onClick={handleStepDecrease}
            disabled={step === 1 ? true : false}
          >
            Go back
          </button>

          {step < 5 ? (
            <button className="next-btn" onClick={handleStepIncrease}>
              {step === 4 ? "Confirm" : "Next Step"}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
