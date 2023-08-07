import { useEffect, useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";

import "./styles/FormContainer.css";

const FormContainer = ({ step, input, setInput }) => {
  const [monthly, setMonthly] = useState(true);
  const [plan, setPlan] = useState({ id: 1, price: 9 });
  const [addons, setAddons] = useState({
    onlineServices: false,
    largerStorage: false,
    customTheme: false,
  });

  function calculateTotal() {
    let price = plan.price;
    if (addons.onlineServices) {
      price += 1;
    }
    if (addons.largerStorage) {
      price += 2;
    }
    if (addons.customTheme) {
      price += 2;
    }
    return price;
  }

  let total = calculateTotal();

  return (
    <form className="form-container">
      {step === 1 && <FormStep1 input={input} setInput={setInput} />}
      {step === 2 && (
        <FormStep2
          monthly={monthly}
          setMonthly={setMonthly}
          setPlan={setPlan}
          planId={plan.id}
        />
      )}
      {step === 3 && (
        <FormStep3
          monthly={monthly}
          setAddons={setAddons}
          addons={addons}
          plan={plan}
        />
      )}
      {step === 4 && (
        <FormStep4
          monthly={monthly}
          planPrice={plan.price}
          addons={addons}
          total={total}
          plan={plan}
        />
      )}
      {step === 5 && <FormStep5 />}
    </form>
  );
};

export default FormContainer;
