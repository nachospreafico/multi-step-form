import Check from "./../assets/images/icon-checkmark.svg";
import "./styles/FormStep3.css";

const FormStep3 = ({ monthly, addons, setAddons }) => {
  function handleAddonsSelection(addon) {
    setAddons(addon);
  }

  return (
    <div id="step-3">
      <h1>Pick add-on</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div
        className={`addon-option-container ${
          addons.onlineServices ? "checked-container" : ""
        }`}
        onClick={() =>
          handleAddonsSelection({
            ...addons,
            onlineServices: !addons.onlineServices,
          })
        }
      >
        <div
          className={`addon-check-container ${
            addons.onlineServices ? "checked" : ""
          }`}
        >
          {addons.onlineServices ? <img src={Check}></img> : null}
        </div>
        <div className="addon-option">
          <h3>Online Service</h3>
          <p>Access to multiplayer games</p>
        </div>
        <p className="addon-price">{monthly ? <>$+1/mo</> : <>+10/yr</>}</p>
      </div>
      <div
        className={`addon-option-container ${
          addons.largerStorage ? "checked-container" : ""
        }`}
        onClick={() =>
          handleAddonsSelection({
            ...addons,
            largerStorage: !addons.largerStorage,
          })
        }
      >
        <div
          className={`addon-check-container ${
            addons.largerStorage ? "checked" : ""
          }`}
        >
          {addons.largerStorage ? (
            <img className="check" src={Check}></img>
          ) : null}
        </div>
        <div className="addon-option">
          <h3>Larger storage</h3>
          <p>Extra 1TB of cloud save</p>
        </div>
        <p className="addon-price">{monthly ? <>$+2/mo</> : <>+20/yr</>}</p>
      </div>
      <div
        className={`addon-option-container ${
          addons.customTheme ? "checked-container" : ""
        }`}
        onClick={() =>
          handleAddonsSelection({ ...addons, customTheme: !addons.customTheme })
        }
      >
        <div
          className={`addon-check-container ${
            addons.customTheme ? "checked" : ""
          }`}
        >
          {addons.customTheme ? <img src={Check}></img> : null}
        </div>
        <div className="addon-option">
          <h3>Customizable profile</h3>
          <p>Custom theme on your profile</p>
        </div>
        <p className="addon-price">{monthly ? <>$+2/mo</> : <>+20/yr</>}</p>
      </div>
    </div>
  );
};

export default FormStep3;
