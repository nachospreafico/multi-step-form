import { useState, useEffect } from "react";

import "./styles/FormStep1.css";

const FormStep1 = ({ input, setInput }) => {
  function handleNameInput(e) {
    setInput((prevState) => ({
      ...prevState,
      name: { isEmpty: e.target.value.trim() === "", value: e.target.value },
    }));
  }

  function handleEmailInput(e) {
    setInput((prevState) => ({
      ...prevState,
      email: { isEmpty: e.target.value.trim() === "", value: e.target.value },
    }));
  }

  function handlePhoneInput(e) {
    setInput((prevState) => ({
      ...prevState,
      phone: { isEmpty: e.target.value.trim() === "", value: e.target.value },
    }));
  }

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div id="step-1">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form-item">
        <div className="error-container">
          <label htmlFor="name">Name</label>
          {input.name.isEmpty ? (
            <p className="input-empty">This field is required</p>
          ) : null}
        </div>
        <input
          id="name"
          required
          style={input.name.isEmpty ? { border: "solid 1px tomato" } : null}
          type="text"
          placeholder="e.g. Stephen King"
          onChange={handleNameInput}
        ></input>
      </div>
      <div className="form-item">
        <div className="error-container">
          <label htmlFor="email">Email Address</label>
          {input.email.isEmpty ? (
            <p className="input-empty">This field is required</p>
          ) : null}
        </div>
        <input
          id="email"
          required
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          style={input.name.isEmpty ? { border: "solid 1px tomato" } : null}
          onChange={handleEmailInput}
        ></input>
      </div>
      <div className="form-item">
        <div className="error-container">
          <label htmlFor="phone-number">Phone Number</label>
          {input.phone.isEmpty ? (
            <p className="input-empty">This field is required</p>
          ) : null}
        </div>
        <input
          id="phone-number"
          required
          type="tel"
          placeholder="e.g. +1 234 567 890"
          style={input.name.isEmpty ? { border: "solid 1px tomato" } : null}
          onChange={handlePhoneInput}
        ></input>
      </div>
    </div>
  );
};

export default FormStep1;
