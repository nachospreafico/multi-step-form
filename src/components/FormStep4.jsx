import "./styles/FormStep4.css";

const FormStep4 = ({ monthly, plan, planPrice, addons, total }) => {
  return (
    <div id="step-4">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary-container">
        <div className="plan-summary">
          <div className="plan">
            <p className="plan-title">
              {plan.id === 1
                ? "Arcade"
                : plan.id === 2
                ? "Advanced"
                : plan.id === 3
                ? "Pro"
                : null}{" "}
              ({monthly ? "Monthly" : "Yearly"})
            </p>
            <p className="change-btn">Change</p>
          </div>
          <p className="plan-price">
            ${planPrice}/{monthly ? "mo" : "yr"}
          </p>
        </div>
        <div className="addons-summary">
          {addons.onlineServices ? (
            <div className="addon-item">
              <p>Online service</p>
              <p className="addon-price-summary">
                {monthly ? "+$1/mo" : "+$10/yr"}
              </p>
            </div>
          ) : null}
          {addons.largerStorage ? (
            <div className="addon-item">
              <p>Larger storage</p>
              <p className="addon-price-summary">
                {monthly ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          ) : null}
          {addons.customTheme ? (
            <div className="addon-item">
              <p>Customizable profile</p>
              <p className="addon-price-summary">
                {monthly ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="total-container">
        <p>Total (per {monthly ? "month" : "year"})</p>
        <p className="total-price">
          +${monthly ? total : total * 10}/{monthly ? "mo" : "ye"}
        </p>
      </div>
    </div>
  );
};

export default FormStep4;
