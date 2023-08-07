import ThankYou from "./../assets/images/icon-thank-you.svg";

const FormStep5 = ({ isMobileScreen }) => {
  return (
    <div
      id="step-5"
      style={
        !isMobileScreen
          ? {
              display: "grid",
              gridTemplateColumns: "1fr",
              alignItems: "center",
              justifyItems: "center",
              height: "50%",
              margin: "auto 0 auto 0",
            }
          : null
      }
    >
      <img src={ThankYou}></img>
      <h1>Thank you!</h1>
      <p
        style={
          !isMobileScreen
            ? {
                textAlign: "center",
              }
            : null
        }
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default FormStep5;
