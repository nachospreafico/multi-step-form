import { useState, useEffect } from "react";

import "./App.css";
import FormContainer from "./components/FormContainer";

function App() {
  const [step, setStep] = useState(1);

  const [input, setInput] = useState({
    name: { value: "", isEmpty: true },
    email: { value: "", isEmpty: true },
    phone: { value: "", isEmpty: true },
  });

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 480);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            {isMobileScreen ? (
              <>
                <div className={`step ${step === 1 ? "current" : ""}`}>1</div>
                <div className={`step ${step === 2 ? "current" : ""}`}>2</div>
                <div className={`step ${step === 3 ? "current" : ""}`}>3</div>
                <div className={`step ${step === 4 ? "current" : ""}`}>4</div>
              </>
            ) : (
              <>
                <div>
                  <div className={`step ${step === 1 ? "current" : ""}`}>1</div>
                  <p>YOUR INFO</p>
                </div>
                <div>
                  <div className={`step ${step === 2 ? "current" : ""}`}>2</div>
                  <p>SELECT PLAN</p>
                </div>
                <div>
                  <div className={`step ${step === 3 ? "current" : ""}`}>3</div>
                  <p>ADD-ONS</p>
                </div>
                <div>
                  <div className={`step ${step === 4 ? "current" : ""}`}>4</div>
                  <p>SUMMARY</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="form-btn-container">
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
      </div>
    </>
  );
}

export default App;
