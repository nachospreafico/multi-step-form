import Arcade from "./../assets/images/icon-arcade.svg";
import Advanced from "./../assets/images/icon-advanced.svg";
import Pro from "./../assets/images/icon-pro.svg";

import "./styles/FormStep2.css";

const FormStep2 = ({ monthly, setMonthly, setPlan, planId }) => {
  function handleBillingOption() {
    setMonthly(!monthly);
  }

  return (
    <div id="step-2">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="billing-options-wrapper">
        <div
          className={`billing-option-container ${
            planId === 1 ? "selected" : ""
          }`}
          onClick={() => {
            console.log("planId: ", planId);
            setPlan({ id: 1, price: 9 });
          }}
        >
          <img src={Arcade} className="plan-img"></img>

          <div className="billing-option">
            <h3>Arcade</h3>
            {monthly ? (
              <p>$9/mo</p>
            ) : (
              <>
                <p>$90/yr</p>
                <p className="months-free">2 months free</p>
              </>
            )}
          </div>
        </div>
        <div
          className={`billing-option-container ${
            planId === 2 ? "selected" : ""
          }`}
          onClick={() => {
            setPlan({ id: 2, price: 12 });
          }}
        >
          <img src={Advanced} className="plan-img"></img>
          <div className="billing-option">
            <h3>Advanced</h3>
            {monthly ? (
              <p>$12/mo</p>
            ) : (
              <>
                <p>$120/yr</p>
                <p className="months-free">2 months free</p>
              </>
            )}
          </div>
        </div>
        <div
          className={`billing-option-container ${
            planId === 3 ? "selected" : ""
          }`}
          onClick={() => {
            setPlan({ id: 3, price: 15 });
          }}
        >
          <img src={Pro} className="plan-img"></img>
          <div className="billing-option">
            <h3>Pro</h3>
            {monthly ? (
              <p>$15/mo</p>
            ) : (
              <>
                <p>$150/yr</p>
                <p className="months-free">2 months free</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="billing-slider">
        <p className="slider-monthly">Monthly</p>
        <div className="slider-container" onClick={handleBillingOption}>
          <div className={`slider-${monthly ? "left" : "right"}`}></div>
        </div>
        <p className="slider-yearly">Yearly</p>
      </div>
    </div>
  );
};

export default FormStep2;
